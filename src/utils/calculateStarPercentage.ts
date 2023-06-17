import { RatingInterface } from '../models/rating';

export const calculateStarPercentage = (shopRatings: RatingInterface[]) => {
  const totalRatingCount = shopRatings.length;
  let oneStarCount = 0;
  let twoStarCount = 0;
  let threeStarCount = 0;
  let fourStarCount = 0;
  let fiveStarCount = 0;

  shopRatings.forEach((rating) => {
    switch (rating.star) {
      case 1:
        oneStarCount++;
        break;
      case 2:
        twoStarCount++;
        break;
      case 3:
        threeStarCount++;
        break;
      case 4:
        fourStarCount++;
        break;
      case 5:
        fiveStarCount++;
        break;
    }
  });

  const oneStarPercentage = (oneStarCount * 100) / totalRatingCount;
  const twoStarPercentage = (twoStarCount * 100) / totalRatingCount;
  const threeStarPercentage = (threeStarCount * 100) / totalRatingCount;
  const fourStarPercentage = (fourStarCount * 100) / totalRatingCount;
  const fiveStarPercentage = (fiveStarCount * 100) / totalRatingCount;

  return {
    oneStarPercentage,
    twoStarPercentage,
    threeStarPercentage,
    fourStarPercentage,
    fiveStarPercentage,
  };
};
