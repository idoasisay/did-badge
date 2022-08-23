import './App.css';

import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Header, Footer
import Header from './components/Header';
import Footer from './components/Footer';
import OauthLoginHandler from './components/OauthLoginHandler';

// Pages
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/oauth' element={<OauthLoginHandler />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
