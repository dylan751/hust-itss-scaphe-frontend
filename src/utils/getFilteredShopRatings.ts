import { RatingInterface } from '../models/rating';

export const getFilteredShopRatings = (
  shopRatings: RatingInterface[],
  star: string,
  countries: string[],
) => {
  let filteredShopRatings = shopRatings;

  // Filter by star
  if (star) {
    filteredShopRatings = filteredShopRatings.filter(
      (rating: RatingInterface) => rating.star === parseInt(star),
    );
  }

  // Filter by nationalities
  if (countries.length > 0) {
    filteredShopRatings = filteredShopRatings.filter(
      (rating: RatingInterface) => countries.includes(rating.user[0].country),
    );
  }

  return filteredShopRatings;
};
