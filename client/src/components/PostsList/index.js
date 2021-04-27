import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewFull from "../ViewFull";
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

  const localUser = JSON.parse(sessionStorage.getItem("user"));
  console.log(localUser.name)
  const [userName, setuserName] = useState({
    name: localUser.name,
  })

  return (
    <>
      <div className="welcome-user-main">
        Welcome, {userName.name}!
      </div>
      <div className="bg-image-feed">
        <h4 className="home-title">
          Secrets Feed
      </h4>
        {posts.map((post) => (
          <div key={post._id} className="post-list-cards">
            <div className="card-horizontal card-whole">
              <div className="img-square-wrapper">
                <Image className="image-post-list" cloudName="dlq3ftm0n" publicId={post.image} />
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
              </div>
            </div>
            <div style={{ backgroundColor: 'rgb(237, 242, 244)' }} className="card-footer">
              <small className="text-muted">{post.date}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostsList;
