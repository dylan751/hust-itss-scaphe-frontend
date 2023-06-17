import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/shop';
import ShopInfo from '../../components/ShopInfo';
import Loading from '../../components/Loading';
import ShopFeedback from '../../components/ShopFeedback';
import ratingApi from '../../services/ratingApi';
import { RatingInterface } from '../../models/rating';

const ShopDetail = () => {
  const { shopId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
  });
  const [shopRatings, setShopRatings] = useState<RatingInterface[]>([]);

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

  useEffect(() => {
    getShopInfo();
    getShopRatings();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ShopInfo shopInfo={shopInfo} />
          <ShopFeedback shopInfo={shopInfo} shopRatings={shopRatings} />
        </>
      )}
    </>
  );
};

export default ShopDetail;
