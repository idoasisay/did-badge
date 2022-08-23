/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// mui
import { Button } from '@mui/material';
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from '../apis/oauthLogin';

function KakaoLoginEventHandler() {
  console.log('카카오');
}
function GoogleLoginEventHandler() {
  console.log('구글');
}

export default function LoginBox() {
  return (
    <>
      <Button
        type='button'
        fullWidth
        variant='contained'
        onClick={KakaoLoginEventHandler}
        sx={{ mt: 3 }}
      >
        카카오톡으로 로그인하기
      </Button>
      <Button
        type='button'
        fullWidth
        variant='contained'
        onClick={GoogleLoginEventHandler}
        sx={{ mt: 3, mb: 10 }}
      >
        구글로 로그인하기
      </Button>
    </>
  );
}
