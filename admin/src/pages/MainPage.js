import React from 'react';
import Dashboard from '../components/Dashboard';
import Leftbar from '../components/Leftbar';

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import UserPage from './UserPage';

const mdTheme = createTheme();

export default function MainPage() {
  console.log(window.location.href);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Leftbar />
        {window.location.href !== 'http://localhost:3000/' ? (
          <UserPage />
        ) : (
          <Dashboard />
        )}
      </Box>
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
