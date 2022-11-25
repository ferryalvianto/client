import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import { getPosts } from './actions/posts';
import './styles/styles.scss';

import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/:profile' element={<Profile />} /> */}
        </Routes>
      </div>

    </Router>
  );
};

export default App;