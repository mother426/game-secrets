import React from "react";
import { Image } from "cloudinary-react";
import "./style.css";

function Post() {

  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <Image cloudName="dlq3ftm0n" publicId="dwc53gz8kzdamktygcxh"/>
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
  );
}

export default Post;
