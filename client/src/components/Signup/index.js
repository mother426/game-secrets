import React from 'react';
import './style.css'

function Signup() {
    return (
        <div className="card login-card">
            <form>
                <h2>Sign Up</h2>
                <div class="form-group">
                    <label for="exampleInputUsername1">Username</label>
                    <input type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
          </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup;