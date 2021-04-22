import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log(props.searchResults);
  return (
    <>
    {props.searchResults.map((post) => (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img/>
        </div>
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <h6>images could go here</h6>
          <p className="card-text">
          {post.body}
          </p>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">posted by: {post.user.name} at {post.date}</small>
      </div>
    </div>
    ))}
    </>
  );
}

export default SearchResults;
