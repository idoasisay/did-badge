/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function CardList(props) {
  const { cards, cardHandler } = props;
  return (
    <Grid container spacing={4}>
      {cards.map(card => (
        <Grid item key={card} xs={5} sm={1} md={3}>
          <Card
            sx={{
              height: '100%',
              bgcolor: 'rgba( 255, 255, 255, 0.5 )',
              cursor: 'pointer',
              border: 0.5,
              borderColor: 'primary.main',
              boxShadow: 0,
            }}
            onClick={cardHandler.bind(this, card)}
          >
            <CardMedia component='img' image='gift_front.png' alt='random' />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant='h6' align='center'>
                {card}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
