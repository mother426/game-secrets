import { Redirect, Route } from "react-router";

const AuthRoute = ({ user, component: Component, ...rest }) => {
  return (
    <>
    <Route
      {...rest}
      render={props=> {
        const newProps = {...props, ...rest};
        // console.log('NEW PROPS: ',  newProps);
        return user.email ? (
          <Component {...newProps} user={user} />
        ) : (
          <Redirect to="/login" />
        )
      }}
      />
    </>
  );
};
export default AuthRoute;
