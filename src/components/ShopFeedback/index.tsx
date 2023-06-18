import { Button, Grid, Link } from '@mui/material';
import React from 'react';
import TextareaValidator from './TextareaValidator';
import Rating from '../Rating';
import Comment from './Comment';
import { ShopInterface } from '../../models/shop';
import { RatingInterface } from '../../models/rating';

interface ShopInfoProps {
  shopInfo: ShopInterface;
  shopRatings: RatingInterface[];
}

const ShopFeedback = ({ shopInfo, shopRatings }: ShopInfoProps) => {
  return (
    <>
      <Grid
        sx={{
          marginTop: '36px',
          borderTop: '2px solid #b0adad',
          borderBottom: '2px solid #b0adad',
          display: 'flex',
          justifyContent: 'space-around',
          fontWeight: 'bold',
        }}
      >
        <Link
          underline="hover"
          sx={{
            ':hover': {
              color: '#1976d2',
            },
            margin: '12px 0',
            fontWeight: 'bold',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          口コミ
        </Link>
        <Link
          underline="hover"
          sx={{
            ':hover': {
              color: '#1976d2',
            },
            margin: '12px 0',
            fontWeight: 'bold',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          フォト
        </Link>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Grid>
            <Button
              sx={{
                margin: '20px 10px',
                fontSize: '20px',
                padding: '2px 35px',
                color: 'black',
                border: '2px solid',
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
              variant="text"
            >
              ５スター
            </Button>
            <Button
              sx={{
                margin: '20px 10px',
                fontSize: '20px',
                padding: '2px 40px',
                color: 'black',
                border: '2px solid',
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
              variant="text"
            >
              ベトナム
            </Button>
          </Grid>
          <TextareaValidator shopInfo={shopInfo} />
          {shopRatings.map((shopRating, index) => (
            <Comment key={index} shopInfo={shopInfo} shopRating={shopRating} />
          ))}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            margin: '36px 0px 10px 70px',
            border: '2px solid #b6b6b6',
            padding: '0 10px 10px 0',
            height: '100%',
          }}
        >
          <Rating shopInfo={shopInfo} shopRatings={shopRatings} />
        </Grid>
      </Grid>
    </>
  );
};

export default ShopFeedback;
