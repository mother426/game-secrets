import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './style.css';

function Profile() {
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  console.log(localUser.name)
  const [userName, setuserName] = useState({
    name: localUser.name,
  })
  return (
    <>
    {/* TODO: used to welcome the logged in user */}
      <div className="welcome-user">
        Welcome, {userName.name}!
      </div>
      {/* create a secret card */}
      {/* TODO: create a secret */}
      <div style={{borderRadius: 50}} className=" card create-secret-card">
        <div style={{borderRadius: 30}} className="card-body">
          <h5 className="card-title">Create a Secret</h5>
          <p className="card-text">Click the button below to create a Secret!</p>
          <Link
              to="/createpost"
              className={
                window.location.pathname === "/createpost" || window.location.pathname === "/createpost"
                  ? "nav-link active"
                  : "nav-link btn-danger btn create-post-btn"
              }
            >
              Create
            </Link>
        </div>
      </div>
    </>
  )
}

export default Profile;