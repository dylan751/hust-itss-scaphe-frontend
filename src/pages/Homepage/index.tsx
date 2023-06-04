import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import ShopList from '../../components/ShopList';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/Shop';

const HomePage = () => {
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
    <>
      <Filter />
      <ShopList shops={shops} />
    </>
  );
};

export default HomePage;
