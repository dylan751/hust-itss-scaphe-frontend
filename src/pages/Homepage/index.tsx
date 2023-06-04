import React, { ChangeEvent, useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import ShopList from '../../components/ShopList';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/shop';
import { SelectChangeEvent } from '@mui/material';

const HomePage = () => {
  const [shops, setShops] = useState<ShopInterface[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [cityName, setCityName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [star, setStar] = useState('1'); // By default, will fetch all shops with avg stars >= 1 (which means all Shops)

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value as string);
  };

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
    setSearchTerm('');
    setCityName('');
    setDistrictName('');
    setStar('1');
  };

  const getAllShops = async (
    searchTerm: string,
    cityName: string,
    districtName: string,
    star: string,
  ) => {
    const res = await shopApi.getShops(
      searchTerm,
      cityName,
      districtName,
      star,
    );
    const allShops: ShopInterface[] = res.data.data.shops;
    setShops(allShops);
  };

  useEffect(() => {
    getAllShops(searchTerm, cityName, districtName, star);
  }, [searchTerm, cityName, districtName, star]);

  return (
    <>
      <Filter
        searchTerm={searchTerm}
        cityName={cityName}
        districtName={districtName}
        star={star}
        handleChangeSearchTerm={handleChangeSearchTerm}
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
