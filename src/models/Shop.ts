type statusEnum = 0 | 1 | 2;

export interface ShopModel {
  id: number;
  name: string;
  status: statusEnum; /// 0, 1, 2
  phone: string;
  city: string;
  district: string;
  email: string;
  avatar: string;
}
