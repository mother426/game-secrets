import React from 'react';
import './style.css'

function FindSecrets() {
    return (
        <div class="search-area">
            <h4 className="search-title">Search Game by Title to find Secrets</h4>
            <div className="row justify-content-center">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search for a Game" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default FindSecrets;