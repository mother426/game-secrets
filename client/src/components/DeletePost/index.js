import React from "react";

function DeletePost(props) {
  return (
    <span className="delete-btn" {...props} role="button">
      ✗
    </span>
  );
}

export default DeletePost;