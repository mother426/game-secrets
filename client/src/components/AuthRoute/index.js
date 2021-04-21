import { Redirect, Route } from "react-router";

const AuthRoute = ({ user, component: Component, ...rest }) => {
  console.log("loaded", user);
  return (
    <>
    <Route
    {...rest}
      render={props=>user.email ? (
        <Component {...props} user={user} />
      ) : (
        <Redirect to="/login" />
      )}
      />
    </>
  );
};
export default AuthRoute;
