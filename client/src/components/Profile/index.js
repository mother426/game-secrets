import React from 'react';
import './style.css';

function Profile() {
  return (
    <>
    {/* TODO: used to welcome the logged in user */}
      <div className="welcome-user">
        Welcome BestUs3er123!
      </div>
      {/* create a secret card */}
      {/* TODO: create a secret */}
      <div className="card create-secret-card">
        <div className="card-body">
          <h5 className="card-title">Create a Secret</h5>
          <p className="card-text">Click the button below to create a Secret!</p>
          <a href="#" className="btn btn-primary">Create</a>
        </div>
      </div>
    </>
  )
}

export default Profile;