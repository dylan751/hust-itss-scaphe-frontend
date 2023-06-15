import authAxios from './authAxios';

class cityDistrictApi {
  [x: string]: any;
  find() {
    throw new Error('Method not implemented.');
  }
  getListCityDistricts = async () => {
    return await authAxios('https://provinces.open-api.vn/api/?depth=2', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
}

export default new cityDistrictApi();
