import React from "react";
import './style.css'

function SavePost(props) {
  return (
    <span className="save-btn" {...props} role="button">
      ☆
    </span>
  );
}

export default SavePost;