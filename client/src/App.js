import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar'
import FindSecretsPage from './pages/FindSecrets'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/findsecrets" component={FindSecretsPage} />
      </Switch>
    </Router>
  );
}

export default App;
