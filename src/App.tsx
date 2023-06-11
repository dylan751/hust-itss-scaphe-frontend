import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import ShopDetail from './pages/ShopDetail';

const App = () => {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shops/:shopId" element={<ShopDetail />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
