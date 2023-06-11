import React, { useState } from 'react';
import shopApi from '../../services/shopApi';
import { ShopInterface } from '../../models/shop';

import _ from 'lodash';

import ShopDetail from '../../components/ShopDetail';

const PageDetail = () => {
  const [shops, setShops] = useState<ShopInterface[]>([]);

  const getAllShops = async (
    searchTerm: string,
    cityName: string,
    districtName: string,
    star: string,
    categories: string[],
    sort: string,
  ) => {
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

  //   const debounceLoadData = useCallback(_.debounce(fetchData, 500), []);

  //   useEffect(() => {
  //     debounceLoadData(
  //       searchTerm,
  //       cityName,
  //       districtName,
  //       star,
  //       categories,
  //       sort,
  //     );
  //   }, [searchTerm, cityName, districtName, star, categories, sort]);

  return <ShopDetail shopDetail={shops[2]} />;
};

export default PageDetail;
