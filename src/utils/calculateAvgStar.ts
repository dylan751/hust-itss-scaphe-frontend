import { DEFAULT_AVG_STAR } from '../constants/Star';
import { RatingInterface } from '../models/rating';

export const calculateAvgStar = (ratings: RatingInterface[]): number => {
  let sumStar = 0;
  ratings.forEach((rating: RatingInterface) => (sumStar += rating.star));
  const avgStarString: string = (sumStar / ratings.length).toFixed(1);
  const avgStar = parseFloat(avgStarString);

  if (isNaN(avgStar)) {
    return DEFAULT_AVG_STAR;
  }
  return avgStar;
};
