import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/shop';
import ShopInfo from '../../components/ShopInfo';
import Loading from '../../components/Loading';
import ShopFeedback from '../../components/ShopFeedback';

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

  const getShopInfo = async () => {
    setIsLoading(true);
    const res = await shopApi.getShopById(shopId as string);
    const shopData: ShopInterface = res.data.data.shop[0];
    setShopInfo(shopData);
    setIsLoading(false);
  };

  useEffect(() => {
    getShopInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ShopInfo shopInfo={shopInfo} />
          <ShopFeedback shopInfo={shopInfo} />
        </>
      )}
    </>
  );
};

export default ShopDetail;
