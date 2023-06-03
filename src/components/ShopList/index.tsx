import React, { useEffect, useState } from 'react';
import ShopListItem from './ShopListItem';
import { Container } from '@mui/system';
import { ShopInterface } from '../../models/Shop';
import shopApi from '../../services/shopApi';

const ShopList = () => {
  const [shops, setShops] = useState<ShopInterface[]>([]);

  const getAllShops = async () => {
    const res = await shopApi.getShops();
    const allShops = res.data.data.shops;
    setShops(allShops);
  };

  useEffect(() => {
    getAllShops();
  }, []);

  return (
    <Container>
      {shops.map((shop: ShopInterface, index) => (
        <ShopListItem key={index} shop={shop} />
      ))}
    </Container>
  );
};

export default ShopList;
