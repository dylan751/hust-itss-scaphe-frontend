import authAxios from './authAxios';
import {
  CreateOrUpdateUserRequestInterface,
  LoginInterface,
} from '../models/user';

class userApi {
  getUsers = async () => {
    return await authAxios(`${process.env.REACT_APP_API_DOMAIN}/api/v1/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  getUserById = async (userId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/users/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  login = async (loginData: LoginInterface) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/users/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: loginData,
      },
    );
  };

  createUser = async (userData: CreateOrUpdateUserRequestInterface) => {
    return await authAxios(`${process.env.REACT_APP_API_DOMAIN}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: userData,
    });
  };

  updateUser = async (
    userId: string,
    userData: CreateOrUpdateUserRequestInterface,
  ) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/users/${userId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        data: userData,
      },
    );
  };

  deleteUser = async (userId: string) => {
    return await authAxios(
      `${process.env.REACT_APP_API_DOMAIN}/api/v1/users/${userId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };
}

export default new userApi();
