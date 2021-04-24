import React, { useRef } from "react";
import api from "../../utils/api";
import { Link } from 'react-router-dom';
import "./style.css";
var moment = require("moment");

function CreatePost({ user, changeUser }) {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const dateRef = useRef();
  // const imageRef = useRef();
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  const createPostHandler = async (e) => {
    e.preventDefault();
    const data = {
      author: authorRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
      date: dateRef.current.value,
    }
    console.log(data);
    await api.createPost(data);
  }
  const redirectHandler = console.log("test");
  return (
    <div>
      <h1>Create Player Question</h1>
      <form onSubmit= {createPostHandler}>
        <div>
          <p>Post by:</p>
        <input disabled="disabled" ref={authorRef} value={localUser.name} />
        </div>
        <p>At:</p>
        <input disabled="disabled" ref={dateRef} value={currentDate} />
        <div className="form-group">

          <label htmlFor="exampleInputEmail1">Title of post</label>
          <input className="form-control" placeholder="Enter title here" ref={titleRef} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Player Question:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Pour your heart out!" ref={bodyRef}></textarea>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile01" />
          <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
          {/* when a post is submitted it re-directs you back to the profile page */}
        <Link to="/profile">
          <button type="submit" className="btn btn-primary">Submit</button>
        </Link>
        </div>

      </form>
    </div>
  );
}

export default CreatePost;