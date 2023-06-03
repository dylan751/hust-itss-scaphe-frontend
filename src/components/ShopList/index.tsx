import React from 'react';
import ShopListItem from './ShopListItem';
import { Container } from '@mui/system';
import { DummyShop } from '../../data/Shop';
import { ShopModel } from '../../models/Shop';

const ShopList = () => {
  return (
    <Container>
      {DummyShop.map((shop: ShopModel, index) => (
        <ShopListItem key={index} shop={shop} />
      ))}
    </Container>
  );
};

export default ShopList;
