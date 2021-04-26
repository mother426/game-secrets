import React from "react";
import { Image } from "cloudinary-react";
import "./style.css";

function SearchResults(props) {
  console.log(props.searchResults);
  return (
    <>
    {props.searchResults.map((post) => (
    <div key={post._id} className="card results-card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
        <Image cloudName="dlq3ftm0n" publicId={post.image} />
        </div>
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <h6>Posted By: {post.author}</h6>
          <h6>images could go here</h6>
          <p className="card-text">
          {post.body}
          </p>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">{post.date}</small>
      </div>
    </div>
    ))}
    </>
  );
}


export default SearchResults;
