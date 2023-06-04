import React from 'react';
import ShopListItem from './ShopListItem';
import { Container } from '@mui/system';
import { ShopInterface } from '../../models/shop';

interface ShopListProps {
  shops: ShopInterface[];
}

const ShopList = ({ shops }: ShopListProps) => {
  return (
    <Container>
      {shops.map((shop: ShopInterface, index: number) => (
        <ShopListItem key={index} shop={shop} />
      ))}
    </Container>
  );
};

export default ShopList;
