import { CategoryInterface } from './category';
import { ShopInterface } from './shop';
import { UserInterface } from './user';

export type StarType = 1 | 2 | 3 | 4 | 5; // 1, 2, 3, 4, 5 stars

export interface RatingInterface {
  _id: string;
  userId: string;
  shopId: string;
  star: StarType;
  content: string;
  categoryIds: string[];
  isTrafficOk: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: UserInterface[]; // Only have 1 element (it's an array just because of the MongoDB aggregation format)
  categories: CategoryInterface[];
  shop: ShopInterface[]; // Only have 1 element (it's an array just because of the MongoDB aggregation format)
}

export interface CreateRatingRequestInterface {
  userId: string;
  shopId: string;
  star: StarType;
  content: string;
  categoryIds: string[];
  isTrafficOk: boolean;
}
