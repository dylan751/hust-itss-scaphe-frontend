export interface CalculateShowStarProps {
  fullStars: number;
  halfStar: boolean;
  emptyStars: number;
}

export const calculateShowStar = (avgStar: number): CalculateShowStarProps => {
  const totalStars = 5;

  let fullStars = Math.floor(avgStar);
  const decimalPart = avgStar - fullStars;
  let halfStar = false;

  if (decimalPart > 0 && decimalPart < 0.75) {
    halfStar = true;
  } else if (decimalPart >= 0.75) {
    halfStar = true;
    fullStars++; // Round up to the next star
  }
  const emptyStars = totalStars - (fullStars + (halfStar ? 1 : 0));

  return { fullStars, halfStar, emptyStars };
};
