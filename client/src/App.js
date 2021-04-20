import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* TODO: wrap in Wrapper then convert to exact path */}
      <LoginPage />
    </Router>
  );
}

export default App;
