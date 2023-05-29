import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shops from './pages/Shops';

function App() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Routes>
          <Route path="/shops" element={<Shops />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
