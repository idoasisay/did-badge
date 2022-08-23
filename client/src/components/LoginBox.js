/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// mui
import { Button } from '@mui/material';

export default function LoginBox(props) {
  const { loginButtonHandler } = props;
  return (
    <Button
      type='button'
      fullWidth
      variant='contained'
      onClick={loginButtonHandler}
      sx={{ mt: 3, mb: 2 }}
    >
      카카오톡으로 Klip 시작
    </Button>
  );
}
