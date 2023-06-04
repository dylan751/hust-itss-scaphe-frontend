import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import ShopList from '../../components/ShopList';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/Shop';
import { SelectChangeEvent } from '@mui/material';

const HomePage = () => {
  const [shops, setShops] = useState<ShopInterface[]>([]);

  const [cityName, setCityName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [star, setStar] = useState('1'); // By default, will fetch all shops with avg stars >= 1 (which means all Shops)

  const handleChangeCity = (event: SelectChangeEvent) => {
    setCityName(event.target.value as string);
    setDistrictName('');
  };
  const handleChangeDistrict = (event: SelectChangeEvent) => {
    setDistrictName(event.target.value as string);
  };

  const handleChangeStar = (event: SelectChangeEvent) => {
    setStar(event.target.value as string);
  };

  const handleClearFilter = () => {
    setCityName('');
    setDistrictName('');
    setStar('1');
  };

  const getAllShops = async (
    cityName: string,
    districtName: string,
    star: string,
  ) => {
    const res = await shopApi.getShops(cityName, districtName, star);
    const allShops = res.data.data.shops;
    setShops(allShops);
  };

  useEffect(() => {
    getAllShops(cityName, districtName, star);
  }, [cityName, districtName, star]);

  return (
    <>
      <Filter
        cityName={cityName}
        districtName={districtName}
        star={star}
        handleChangeCity={handleChangeCity}
        handleChangeDistrict={handleChangeDistrict}
        handleChangeStar={handleChangeStar}
        handleClearFilter={handleClearFilter}
      />
      <ShopList shops={shops} />
    </>
  );
};

export default HomePage;
