import React, { useRef } from "react";
import { Redirect } from "react-router";
import api from "../../utils/api";
import './style.css'

function Signup({user, changeUser}) {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const signupHandler = async (e) => {
        e.preventDefault();
        const data ={
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const isLoggedIn = await api.signup(data);
        changeUser(isLoggedIn.data);
    }

    return (
        <> 
        {user.name && <Redirect to='/'/>}
        <div className="card login-card">
            <form onSubmit={signupHandler}>
                <h2>Sign Up</h2>
                <div class="form-group">
                    <label for="exampleInputUsername1">Username</label>
                    <input type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username" ref={nameRef} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={emailRef}/>
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
          </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordRef}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Signup;