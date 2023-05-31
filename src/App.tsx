import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
