import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/example">Game Secrets</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a className="nav-item nav-link active" href="/example">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/example">Features</a>
      <a className="nav-item nav-link" href="/example">Pricing</a>
    </div>
  </div>
</nav>
    )
}

export default Navbar;