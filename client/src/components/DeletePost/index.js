import React from "react";
import "./style.css"

function DeletePost(props) {
  return (
    <div className="delete-btn" {...props} role="button">
      ✗
    </div>
  );
}

export default DeletePost;