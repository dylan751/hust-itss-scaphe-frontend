import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import PageDetail from './pages/PageDetail';

function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<PageDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
