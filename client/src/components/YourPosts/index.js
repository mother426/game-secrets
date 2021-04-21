import React from 'react';
import './style.css';

function YourPosts() {
  return (
    <>
    <h4 className="your-secrets-title">
      Your Secrets
    </h4>

    <div className="card post-card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img
            className=""
            src="https://i.guim.co.uk/img/media/c39bf8486b167ff4d297f4db15efe4e18078df98/683_269_2713_1628/master/2713.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=aa104510291a053bf3f40583b4e2e86c"
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">Ghost of Tsushima Glitch</h4>
          <h6>posted by: BestUs3r123</h6>
          <p className="card-text">
            I’m in Act II playing the mission Ghost of Yarakiwa, I die, and am
            then respawned across the map. The game now has me in a loop to
            return to my Tale in 10 seconds, but spawned me 7km away from it.
            Has anyone else experienced this?
          </p>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    </>
  )
}

export default YourPosts;