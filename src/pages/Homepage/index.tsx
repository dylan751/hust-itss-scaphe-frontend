import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import ShopList from '../../components/ShopList';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/shop';
import { SelectChangeEvent } from '@mui/material';
import _ from 'lodash';
import Loading from '../../components/Loading';

const HomePage = () => {
  const [shops, setShops] = useState<ShopInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [cityName, setCityName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [star, setStar] = useState('1'); // By default, will fetch all shops with avg stars >= 1 (which means all Shops)
  const [categories, setCategories] = useState<string[]>([]);
  const [sort, setSort] = useState('');

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

  const handleChangeCategories = (
    event: SelectChangeEvent<typeof categories>,
  ) => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSort = () => {
    setSort('asc');
  };

  const getAllShops = async (
    searchTerm: string,
    cityName: string,
    districtName: string,
    star: string,
    categories: string[],
    sort: string,
  ) => {
    setIsLoading(true);
    const res = await shopApi.getShops(
      searchTerm,
      cityName,
      districtName,
      star,
      categories,
      sort,
    );
    const allShops: ShopInterface[] = res.data.data.shops;
    setShops(allShops);
    setIsLoading(false);
  };

  const fetchData = (
    searchTerm: string,
    cityName: string,
    districtName: string,
    star: string,
    categories: string[],
    sort: string,
  ) => {
    getAllShops(searchTerm, cityName, districtName, star, categories, sort);
  };

  const debounceLoadData = useCallback(_.debounce(fetchData, 500), []);

  useEffect(() => {
    debounceLoadData(
      searchTerm,
      cityName,
      districtName,
      star,
      categories,
      sort,
    );
  }, [searchTerm, cityName, districtName, star, categories, sort]);

  return (
    <>
      <Filter
        searchTerm={searchTerm}
        cityName={cityName}
        districtName={districtName}
        star={star}
        categories={categories}
        handleChangeSearchTerm={handleChangeSearchTerm}
        handleChangeCity={handleChangeCity}
        handleChangeDistrict={handleChangeDistrict}
        handleChangeStar={handleChangeStar}
        handleChangeCategories={handleChangeCategories}
        handleSort={handleSort}
      />
      {isLoading ? <Loading /> : <ShopList shops={shops} />}
    </>
  );
};

export default HomePage;
