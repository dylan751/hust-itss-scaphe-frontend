import { RatingInterface } from '../models/rating';

export const calculateStarPercentage = (shopRatings: RatingInterface[]) => {
  const totalRatingCount = shopRatings.length;
  let oneStarCount = 0;
  let twoStarCount = 0;
  let threeStarCount = 0;
  let fourStarCount = 0;
  let fiveStarCount = 0;

  // If the shop haven't had any ratings -> Return 0% for all
  if (totalRatingCount === 0) {
    return {
      oneStarPercentage: 0,
      twoStarPercentage: 0,
      threeStarPercentage: 0,
      fourStarPercentage: 0,
      fiveStarPercentage: 0,
    };
  }

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

  const oneStarPercentage = Math.round((oneStarCount * 100) / totalRatingCount);
  const twoStarPercentage = Math.round((twoStarCount * 100) / totalRatingCount);
  const threeStarPercentage = Math.round(
    (threeStarCount * 100) / totalRatingCount,
  );
  const fourStarPercentage = Math.round(
    (fourStarCount * 100) / totalRatingCount,
  );
  const fiveStarPercentage = Math.round(
    (fiveStarCount * 100) / totalRatingCount,
  );

  return {
    oneStarPercentage,
    twoStarPercentage,
    threeStarPercentage,
    fourStarPercentage,
    fiveStarPercentage,
  };
};
