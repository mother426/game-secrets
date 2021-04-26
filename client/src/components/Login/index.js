import React, { useRef } from "react";
import { Redirect } from "react-router";
import api from "../../utils/api";
import "./style.css";

function Login({user, changeUser}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    const isLoggedIn = await api.login(data);
    console.log(isLoggedIn.data);
    changeUser(isLoggedIn.data);
  };

  return (

    <>
    {user.email && <Redirect to='/'/>}
    <div style={{ marginTop: 100, marginRight: 100, marginLeft: 100 }} className="card login-card">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
