import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import ShopDetail from './pages/ShopDetail';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ToastContainer } from 'react-toastify';
import { Login } from './components/Login';
import { Register } from './components/Register';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="">
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shops/:shopId" element={<ShopDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
        <ToastContainer autoClose={1000} closeOnClick />
      </div>
    </LocalizationProvider>
  );
};

export default App;
