import { Typography } from '@mui/joy';
import { Container, Grid } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RatingProgress from './RatingProgress';

function Rating() {
  return (
    <Grid>
      <Typography
        sx={{
          textAlign: 'center',
          borderBottom: '2px solid #b6b6b6',
          paddingBottom: '16px',
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          fontSize: '24px',
        }}
      >
        50 レビュー
      </Typography>
      <RatingProgress />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      >
        <Typography
          sx={{ fontSize: '32px', fontWeight: 600, marginRight: '10px' }}
        >
          4.5
        </Typography>
        <StarIcon sx={{ color: '#ff9800', fontSize: '36px' }} />
        <StarIcon sx={{ color: '#ff9800', fontSize: '36px' }} />
        <StarIcon sx={{ color: '#ff9800', fontSize: '36px' }} />
        <StarHalfIcon sx={{ color: '#ff9800', fontSize: '36px' }} />
        <StarOutlineIcon sx={{ color: '#ff9800', fontSize: '36px' }} />
      </Container>
    </Grid>
  );
}

export default Rating;
