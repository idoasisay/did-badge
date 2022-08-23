import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// mui
import { CssBaseline, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// recoil
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/user';

// components
import LoginBox from '../components/LoginBox';

// mui theme setting
const theme = createTheme();

// login Page
export default function LoginPage() {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

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
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            Login
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <LoginBox />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
