import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import './style.css';

function Navbar(props) {
  const handleLogout = async (e) => {
    e.preventDefault();
    // console.log("loggingout: ")
    await api.logout();
    // console.log("removing from localstorage")
    sessionStorage.clear();
    // console.log("setting user")
    props.changeUser({});
  }

  return (
    <nav style={{ padding: 15 }} className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand navbar-main-title" to="/">
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
              className={window.location.pathname === "/profile"
                ? "nav-link active"
                : "nav-link "
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className="nav-link active navbar-right nav-link"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>

          {/* <a href="/logout" onClick={handleLogout}>Logout</a> */}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;