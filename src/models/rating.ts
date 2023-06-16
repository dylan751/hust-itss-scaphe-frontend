import { UserInterface } from './user';

export type StarType = 1 | 2 | 3 | 4 | 5; // 1, 2, 3, 4, 5 stars

export interface RatingInterface {
  _id: string;
  userId: string;
  shopId: string;
  star: StarType;
  content: string;
  user: UserInterface;
}
