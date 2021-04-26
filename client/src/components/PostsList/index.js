import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewFull from "../ViewFull";
import SavePost from "../SavePost";
import api from "../../utils/api";
import { Image } from "cloudinary-react";
import "./style.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api
      .getPosts()
      .then((results) => {
        setPosts(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // maybe a .push()
  const handleSave = () => {
    if ("clicked") {
      console.log("bruh moment");
    }
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post._id} className="card post-list-cards">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
                <Image cloudName="dlq3ftm0n" publicId={post.image} />
            </div>
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <h6>Posted By: {post.author}</h6>
              <p className="card-text">{post.body}</p>
              <Link to={"/post/" + post._id}>
                <div className="more-details">
                  <ViewFull />
                </div>
              </Link>
              <div className="card-footer">
                <small className="text-muted">{post.date}</small>
              </div>
            </div>
            <SavePost onClick={handleSave} />
          </div>
        </div>
      ))}
    </>
  );
}

export default PostsList;
