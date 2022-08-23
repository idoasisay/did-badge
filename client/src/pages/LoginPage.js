import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// mui
import { CssBaseline, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// api
import { postPrepare, getResult } from '../apis/klip';
import useInterval from '../hooks/useInterval';

// recoil
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/user';

// components
import LoginBox from '../components/LoginBox';
import LoginQRcodeBox from '../components/LoginQRcodeBox';

// mui theme setting
const theme = createTheme();

// login Page
export default function LoginPage() {
  const setUser = useSetRecoilState(userState);
  const [requestKey, setRequestKey] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const intialRemainingTime = 300;

  // 로그인 버튼 누르면 klip QR 생성
  const loginButtonHandler = async () => {
    const request_key = await postPrepare();

    // 정상
    if (request_key) {
      // 키 저장
      setRequestKey(request_key);
      // 로그인 큐알 오픈
      setOpen(true);
      // 유효 시간 체크
      setRemaining(intialRemainingTime);
    } else {
      // 에러 처리
      console.error();
    }
  };

  // 유효 시간 내에 로그인
  useInterval(
    async () => {
      // 인증 키값이 들어왔을 때 실행
      if (requestKey.length > 0) {
        // 1초씩 줄어듦
        setRemaining(remaining - 1);

        // QR 승인 이후, 유저의 address 저장
        const address = await getResult(requestKey);
        // TODO: 임시로 테스트 address 저장

        if (address) {
          // 유저 저장, 로그인 OK
          setUser({ address, isLogin: true });
          setOpen(false);
          // main으로 돌아가기
          console.log('로그인한 유저의 지갑 주소: ', address);
          navigate('/');
        }
      }
    },
    open && remaining > 0 ? 1000 : null
  );

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography>Login</Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            {open ? (
              <LoginQRcodeBox
                requestKey={requestKey}
                setOpen={setOpen}
                remaining={remaining}
              />
            ) : (
              <LoginBox loginButtonHandler={loginButtonHandler} />
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
