import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import Detail from './pages/Detail'
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/posts/:id" component={Detail} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
