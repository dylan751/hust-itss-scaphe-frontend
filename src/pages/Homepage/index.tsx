import React from 'react';
import Filter from '../../components/Filter';
import ShopList from '../../components/ShopList';
import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Filter />
        <ShopList />
      </Layout>
    </>
  );
};

export default HomePage;
