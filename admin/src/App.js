import './App.css';

import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import OauthLoginHandler from './components/OauthLoginHandler';

// Pages
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';
import Leftbar from './components/Leftbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/oauth' element={<OauthLoginHandler />} />
        <Route path='/user' element={<MainPage />}>
          <Route path='/user/:id' element={<UserPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
