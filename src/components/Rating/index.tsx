import { Typography } from '@mui/joy';
import { Container, Grid } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RatingProgress from './RatingProgress';
import { ShopInterface } from '../../models/shop';
import { calculateAvgStar } from '../../utils/calculateAvgStar';
import { calculateShowStar } from '../../utils/calculateShowStar';
import { RatingInterface } from '../../models/rating';

interface ShopInfoProps {
  shopInfo: ShopInterface;
  shopRatings: RatingInterface[];
}

const Rating = ({ shopInfo, shopRatings }: ShopInfoProps) => {
  const avgStar = calculateAvgStar(shopInfo.ratings);
  const { fullStars, halfStar, emptyStars } = calculateShowStar(avgStar);

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
        {shopRatings.length} レビュー
      </Typography>
      <RatingProgress shopInfo={shopInfo} shopRatings={shopRatings} />
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
          {avgStar}
        </Typography>
        {[...new Array(fullStars)].map((arr, index) => (
          <StarIcon sx={{ color: '#ff9800', fontSize: '36px' }} key={index} />
        ))}
        {halfStar && (
          <StarHalfIcon sx={{ color: '#ff9800', fontSize: '36px' }} />
        )}
        {[...new Array(emptyStars)].map((arr, index) => (
          <StarOutlineIcon
            sx={{ color: '#ff9800', fontSize: '36px' }}
            key={index}
          />
        ))}
      </Container>
    </Grid>
  );
};

export default Rating;
