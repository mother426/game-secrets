import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import './style.css';

function Navbar(props) {
  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("loggingout: ")
    await api.logout();
    console.log("removing from localstorage")
    sessionStorage.clear();
    console.log("setting user")
    props.changeUser({});
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Game Secrets
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/findsecrets"
              className={
                window.location.pathname === "/findsecrets" || window.location.pathname === "/findsecrets"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Find Secrets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
            <a href="/logout" onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>


    // ----CHANGED THIS TO WHAT'S ABOVE----

    // <nav class="navbar navbar-expand-lg navbar-light bg-light">

    //   {/* header/title link */}
    //   <a className="navbar-brand" href="/">Game Secrets</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div class="navbar-nav">

    //       {/* for navbar links */}
    //       <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
    //       <a className="nav-item nav-link" href="/findsecrets">Find Secrets</a>
    //       <a className="nav-item nav-link" href="/example">Profile</a>

    //       {/* search bar */}
    //       {/* <form class="form-inline">
    //         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //       </form> */}

    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar;