import { ShopInterface } from '../models/Shop';
import authAxios from './authAxios';

class shopApi {
  getShops = async () => {
    return await authAxios(`${process.env.REACT_APP_API_DOMAIN}/api/v1/shops`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  getShopById = async (shopId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/shops/${shopId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  createShop = async (shopData: ShopInterface) => {
    return await authAxios(`${process.env.REACT_APP_API_DOMAIN}/api/v1/shops`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: shopData,
    });
  };

  updateShop = async (shopId: string, shopData: ShopInterface) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/shops/${shopId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        data: shopData,
      },
    );
  };

  deleteShop = async (shopId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/shops/${shopId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };
}

export default new shopApi();
