export interface UserInterface {
  _id: string;
  email: string;
  password: string;
  name: string;
  country: string;
  avatar: string;
}

export interface CreateOrUpdateUserRequestInterface {
  email: string;
  password: string;
  name: string;
  country: string;
  avatar: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}
