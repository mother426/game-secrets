import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    console.log("localUser: ", localUser)
    if (localUser) setUser(localUser);
  }, []);

  const changeUser = (userInfo) => {
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
  };
  
  return (
    <Router>
      <Navbar changeUser={changeUser}/>
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
