import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          {/* <Route path="login" element={<LogInForm />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
);
