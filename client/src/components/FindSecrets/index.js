import React from 'react';

function FindSecrets() {
    return (
        <>
            <div class="main-search">
                <h4>Search Game by Title to find Secrets</h4>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search for a Game</button>
                </form>
            </div>
        </>
    )
}

export default FindSecrets;