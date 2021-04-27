import React, { useState } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup'


function LoginPage({ user, changeUser }) {
    return (
        <>
            <div className="row justify-content-center">
                <Login user={user} changeUser={changeUser} />
                <Signup user={user} changeUser={changeUser} />
            </div>
        </>
    )
}

export default LoginPage;