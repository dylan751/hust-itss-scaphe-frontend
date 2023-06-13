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
          There is no Coffee Shop found
        </Grid>
      )}
    </Container>
  );
};

export default ShopList;
