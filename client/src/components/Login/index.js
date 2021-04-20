import React, { useRef } from "react";
import { Redirect } from "react-router";
import api from "../../utils/api";

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
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
