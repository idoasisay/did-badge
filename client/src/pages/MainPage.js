import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// recoil
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/user';

import { useNavigate } from 'react-router-dom';

import { isLoginUser, isValidUser } from '../utils/user';

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
  const navigate = useNavigate();

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
            <Box
              sx={{
                borderRadius: '16px',
                bgcolor: 'info.main',
                width: '100%',
                height: '100%',
                p: 20,
                mb: 10,
              }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Typography
                variant='h6'
                align='center'
                color='text.secondary'
                paragraph
              >
                {!user.address && '임시'} 님 반갑습니다
              </Typography>

              <Button variant='outlined'>수료증 발급받기 </Button>
            </Box>

            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              나의 뱃지
            </Typography>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map(card => (
                <Grid item key={card} xs={5} sm={1} md={3}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba( 255, 255, 255, 0.5 )',
                      cursor: 'pointer',
                    }}
                  >
                    <CardMedia
                      component='img'
                      image='gift_front.png'
                      alt='random'
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant='h6' align='center'>
                        {card}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
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
