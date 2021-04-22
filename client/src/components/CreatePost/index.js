import React, { useRef } from "react";
import api from "../../utils/api";
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
    const sendPost = await api.createPost(data);
    changeUser(sendPost.data);
  }
  return (
    <div>
      <h1>Create Player Question</h1>
      <form onSubmit={createPostHandler}>
        <div>
          <p>Post by:</p>
        <input disabled="disabled" ref={authorRef} value={localUser.name} />
        </div>
        <p>At:</p>
        <input disabled="disabled" ref={dateRef} value={currentDate} />
        <div class="form-group">

          <label for="exampleInputEmail1">Title of post</label>
          <input class="form-control" placeholder="Enter title here" ref={titleRef} />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Player Question:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Pour your heart out!" ref={bodyRef}></textarea>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Upload</span>
          </div>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>

          <button type="submit" class="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default CreatePost;