import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import MapPage from './components/MapPage';

function App() {
  return (
    <LandingPage/>
  );
}

export default App;
