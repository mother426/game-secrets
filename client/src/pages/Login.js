import React, {useState} from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup'


function LoginPage({user, changeUser}) {
    return (
        <>
        <Login user={user} changeUser={changeUser}/>
        <Signup />
        </>
    )
}

export default LoginPage;