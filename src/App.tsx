import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import ShopDetail from './pages/ShopDetail';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="">
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shops/:shopId" element={<ShopDetail />} />
          </Routes>
        </Layout>
      </div>
    </LocalizationProvider>
  );
};

export default App;
