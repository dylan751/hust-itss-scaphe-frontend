import authAxios from './authAxios';
import { RatingInterface } from '../models/rating';

class ratingApi {
  getRatings = async () => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  getRatingById = async (ratingId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings/${ratingId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  getRatingByUserId = async (userId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings/user/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  getRatingByShopId = async (shopId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings/shop/${shopId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  createRating = async (ratingData: RatingInterface) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: ratingData,
      },
    );
  };

  updateRating = async (ratingId: string, ratingData: RatingInterface) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings/${ratingId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        data: ratingData,
      },
    );
  };

  deleteRating = async (ratingId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/ratings/${ratingId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };
}

export default new ratingApi();
