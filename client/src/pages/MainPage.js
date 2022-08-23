import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// recoil
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/user';

// import { useNavigate } from 'react-router-dom';
import CardModal from '../components/CardModal';
import CardList from '../components/CardList';
import CertificationBox from '../components/CertificationBox';

// import { isLoginUser, isValidUser } from '../utils/user';

const cards = [
  '수료',
  '최다 답변',
  '커리어 캠프',
  '멘토링',
  '2022 알럼나잇',
  '2021 알럼나잇',
  '빠른 취업',
  '최다 칭찬',
  '이유정',
];

const theme = createTheme();

export default function MainPage() {
  const user = useRecoilValue(userState);
  // const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [cardInfo, setCardInfo] = useState({});

  const cardHandler = (c, e) => {
    setModalOpen(true);
    setCardInfo({ c });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'aliceblue',
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth='md'>
            <CertificationBox user={user} />
            {modalOpen ? (
              <CardModal setModalOpen={setModalOpen} cardInfo={cardInfo} />
            ) : null}
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              나의 뱃지
            </Typography>
            <CardList cards={cards} cardHandler={cardHandler} />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

// 개발 중이라 잠시 turn off
// useEffect(() => {
//   if (!isValidUser(user) || !isLoginUser(user)) {
//     navigate('/login');
//   }
// }, [user, navigate]);

// 조건부 렌더링도 개발 중이라 잠시 turn off
// <>{user.name && '메인 페이지입니다'}</>;

/**
 *
 * 오늘 해야 할 일
 * 메인 페이지 클라이언트 -> DID 받은 거, 뱃지 확인!
 * 어드민 페이지 클라이언트
 */
