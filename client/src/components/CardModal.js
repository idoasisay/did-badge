/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// mui
import { Box, Button } from '@mui/material';

export default function CardModal(props) {
  const { setModalOpen, cardInfo } = props;
  const closeBtnHandler = () => {
    setModalOpen(false);
  };
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        sx={{
          width: '300px',
          height: '500px',
          bgcolor: 'white',
          position: 'absolute',
          top: 'calc(50vh - 250px)',
          left: 'calc(50vw - 150px)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: '10px',
          border: 0.2,
        }}
      >
        {cardInfo.c}
        <Button
          type='button'
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          onClick={closeBtnHandler}
        >
          닫기
        </Button>
      </Box>
    </Box>
  );
}
