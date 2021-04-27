import React, { useEffect, useRef, useState } from 'react';
import { Image } from "cloudinary-react";
import api from '../utils/api';

const FullPost = props => {
  const [post, setPost] = useState([]);
  const commentRef = useRef();

  useEffect(() => {
    api.getPost(props.match.params.id)
      .then(res => setPost(res.data))
      .catch(err => console.log(err))
  }, []);
  // const commentsArray = post.comments
  const commentHandler = async (e) => {
    e.preventDefault();
    const data = {
      content: commentRef.current.value
    }
    console.log(data)
    await api.createComment(data)
    // Get this working!^
  }


  return (
    <>
      <div key={post._id} className="card commented-main-card">
        <div className="card-horizontal">
          <div className="img-square-wrapper">
          <Image cloudName="dlq3ftm0n" publicId={post.image}/>
          </div>
          <div className="card-body">
            <h4 className="card-title">{post.title}</h4>
            <h6>Posted By: {post.author}</h6>
            <p className="card-text">
              {post.body}
            </p>
            <div className="card-footer">
              <small className="text-muted">{post.date}</small>
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="exampleFormControlTextarea1">Post a comment below:</label>
      <form onSubmit={commentHandler}>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Pour your heart out!"
          ref={commentRef}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Submit
          </button>
      </form>
      {post.comments && post.comments.map((post,i) => (
      <div key={i} className="card">
        {post}
      </div>
     ))}
    </>
  );
};

export default FullPost;