import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import './styles/styles.scss';

import Navbar from './components/navbar';
import Home from './pages/home';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <div className='patternDiv'></div>
      </div>

    </Router>
  );
};

export default App;