import React from 'react';
import ShopListItem from './ShopListItem';
import { Container } from '@mui/system';
import { ShopInterface } from '../../models/shop';
import { Grid } from '@mui/material';

interface ShopListProps {
  shops: ShopInterface[];
}

const ShopList = ({ shops }: ShopListProps) => {
  return (
    <Container>
      {shops.length > 0 ? (
        shops.map((shop: ShopInterface, index: number) => (
          <ShopListItem key={index} shop={shop} />
        ))
      ) : (
        <Grid
          sx={{
            margin: '20px',
            color: '#f44336',
          }}
        >
          コーヒーショップが見つかりません
        </Grid>
      )}
    </Container>
  );
};

export default ShopList;
