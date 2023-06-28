import { categoryDatas } from '../data/Shop/Category';
import { RatingInterface } from '../models/rating';
import { ShopInterface } from '../models/shop';

export const shouldShowCategory = (
  shopInfo: ShopInterface,
  ratings: RatingInterface[],
): string[] => {
  const shopCategories: string[] = shopInfo.categories.map(
    (category) => category.category,
  );

  const existingCategoriesMap = new Map();
  categoryDatas.forEach((category) => existingCategoriesMap.set(category, 0)); // Initially: Count of each categories = 0

  // Count the number of existence of each categories
  ratings.map((rating) =>
    rating.categories.map((category) =>
      existingCategoriesMap.set(
        category.category,
        existingCategoriesMap.get(category.category) + 1,
      ),
    ),
  );

  // Only take the categories that have > 0 review confirm
  return shopCategories.filter(
    (category) => existingCategoriesMap.get(category) > 0,
  );
};
