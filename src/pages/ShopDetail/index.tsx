import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/shop';
import ShopInfo from '../../components/ShopInfo';
import Loading from '../../components/Loading';
import ShopFeedback from '../../components/ShopFeedback';
import ratingApi from '../../services/ratingApi';
import { RatingInterface } from '../../models/rating';
import { SelectChangeEvent } from '@mui/material';
import cityDistrictApi from '../../services/cityDistrictApi';

const ShopDetail = () => {
  const { shopId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cityDistricts, setCityDistricts] = useState<any[]>([]);
  const [shopInfo, setShopInfo] = useState<ShopInterface>({
    _id: '',
    name: '',
    phone: '',
    city: '',
    district: '',
    email: '',
    traffic: 0,
    ratings: [],
    categories: [],
    photos: [],
    openHours: [],
  });
  const [shopRatings, setShopRatings] = useState<RatingInterface[]>([]);

  const [star, setStar] = useState('');
  const handleChangeStar = (event: SelectChangeEvent) => {
    setStar(event.target.value as string);
  };
  const [countries, setCountries] = useState<string[]>([]);
  const handleChangeCountries = (
    event: SelectChangeEvent<typeof countries>,
  ) => {
    const {
      target: { value },
    } = event;
    setCountries(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const getShopInfo = async () => {
    setIsLoading(true);
    const res = await shopApi.getShopById(shopId as string);
    const shopInfoData: ShopInterface = res.data.data.shop[0];
    setShopInfo(shopInfoData);
    setIsLoading(false);
  };

  const getShopRatings = async () => {
    setIsLoading(true);
    const res = await ratingApi.getRatingByShopId(shopId as string);
    const shopRatingDatas: RatingInterface[] = res.data.data.ratings;
    setShopRatings(shopRatingDatas);
    setIsLoading(false);
  };

  const getAllCityDistricts = async () => {
    const res = await cityDistrictApi.getListCityDistricts();
    const allCityDistricts = res.data;
    setCityDistricts(allCityDistricts);
  };

  useEffect(() => {
    getShopInfo();
    getShopRatings();
    getAllCityDistricts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ShopInfo
            shopInfo={shopInfo}
            shopRatings={shopRatings}
            cityDistricts={cityDistricts}
          />
          <ShopFeedback
            shopInfo={shopInfo}
            shopRatings={shopRatings}
            countries={countries}
            handleChangeCountries={handleChangeCountries}
            star={star}
            handleChangeStar={handleChangeStar}
          />
        </>
      )}
    </>
  );
};

export default ShopDetail;
