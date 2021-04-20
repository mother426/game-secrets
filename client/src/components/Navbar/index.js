import React from 'react';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      {/* header/title link */}
      <a className="navbar-brand" href="/">Game Secrets</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          
          {/* for navbar links */}
          <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/example">Find Secrets</a>
          <a className="nav-item nav-link" href="/example">Profile</a>

          {/* search bar */}
          {/* <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}

        </div>
      </div>
    </nav>
  )
}

export default Navbar;