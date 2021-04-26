import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import DeletePost from "../DeletePost";
import ViewFull from "../ViewFull";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import "./style.css";

function YourPosts(e) {
  const [posts, setPosts] = useState([]);
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const username = localUser.name;
  let usersPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].author === username) {
      usersPosts.push(posts[i]);
    }
  }
  console.log(usersPosts);

  useEffect(() => {
    api
      .getPosts()
      .then((results) => {
        setPosts(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const post = await api.deletePost(id);
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h4 className="your-secrets-title">Your Secrets</h4>
      {usersPosts.map((post) => (
        <div data-user={post._id} key={post._id} className="card post-card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <Image cloudName="dlq3ftm0n" publicId={post.image} />
            </div>
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <h6>posted by: {post.author}</h6>
              <p className="card-text">{post.body}</p>
              <Link to="/fullpost">
                <div className="more-details">
                  <ViewFull />
                </div>
              </Link>
              {/* TODO: redirect back to profile page on click */}
              <DeletePost onClick={() => handleDelete(post._id)} />
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

export default YourPosts;
