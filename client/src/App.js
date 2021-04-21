import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar";
import FindSecretsPage from "./pages/FindSecrets";
import ProfilePage from './pages/Profile'
import "./App.css";
import AuthRoute from "./components/AuthRoute";
// pass the user object into the state for the entire app
function App() {
  const [user, setUser] = useState({});
  const changeUser = (userInfo) => {
    setUser(userInfo);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/home" component={HomePage} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <LoginPage {...props} user={user} changeUser={changeUser} />
          )}
        />
        <AuthRoute
          exact
          path="/findsecrets"
          user={user}
          component={FindSecretsPage}
        />
        <AuthRoute
          exact
          path="/profile"
          user={user}
          component={ProfilePage}
        />
        <AuthRoute exact path="/" user={user} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
