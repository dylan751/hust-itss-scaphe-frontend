import React from 'react';
import HomepageLayout from '../../layouts/HomepageLayout';
import Filter from '../../components/Filter';
import ShopList from '../../components/ShopList';

const HomePage = () => {
  return (
    <>
      <HomepageLayout>
        <Filter />
        <ShopList />
      </HomepageLayout>
    </>
  );
};

export default HomePage;
