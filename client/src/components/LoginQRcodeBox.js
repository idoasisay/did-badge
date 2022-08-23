/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// mui
import { Button, Box, Typography } from '@mui/material';

import QRCode from 'qrcode.react';

export default function LoginQRcodeBox(props) {
  const { requestKey, setOpen, remaining } = props;

  // QR 만드는 함수
  function makeQR(requestKey) {
    return `https://klipwallet.com/?target=/a2a?request_key=${requestKey}`;
  }

  // 돌아가기 함수
  const backButtonHandler = () => {
    setOpen(false);
  };

  return (
    <Box
      variant='contained'
      sx={{
        mt: 3,
        mb: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography>카카오 Klip QR 연결</Typography>
      <br />
      <QRCode
        value={makeQR(requestKey)}
        style={{
          width: '50%',
          height: '50%',
        }}
      />
      <br />
      <Typography>남은 시간 {remaining}초</Typography>
      <Typography>QR 코드 리더기 또는 카카오톡 앱을 통해</Typography>
      <Typography>QR 코드를 스캔해 주세요</Typography>
      <br />
      <Typography>
        현재 테스트 단계이기 때문에 Klip 로그인만 가능하며,
      </Typography>
      <Typography>테스트 계정이 임시로 발급됩니다.</Typography>

      <Button type='button' onClick={backButtonHandler} sx={{ mt: 3, mb: 2 }}>
        돌아가기
      </Button>
    </Box>
  );
}
