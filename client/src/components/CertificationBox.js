/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

export default function CertificationBox(props) {
  const { user } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          borderRadius: '16px',
          bgcolor: 'white',
          border: 0.1,
          borderColor: 'primary.main',
          width: '400px',
          height: '550px',
          p: 10,
          mb: 10,
          mr: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
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
        <Box>
          <Typography>이름: 이유정</Typography>
          <Typography>수료 일자: 22/2/22</Typography>
          <Typography>기수: IM 20</Typography>
          <Typography>부트캠프: BEB</Typography>
        </Box>
        <Button variant='outlined'>수료증 발급받기</Button>
      </Box>
      <Box
        sx={{
          borderRadius: '16px',
          bgcolor: 'rgba( 255, 255, 255, 0.5 )',
          border: 0.1,
          borderColor: 'primary.main',
          width: '400px',
          height: '550px',
          p: 10,
          mb: 10,
          display: 'flex',
          alignItems: 'center',
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
          수료증 미리보기
        </Typography>
      </Box>
    </Box>
  );
}
