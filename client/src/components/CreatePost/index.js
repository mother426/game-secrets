import React, { useRef, useState } from "react";
import api from "../../utils/api";
import "./style.css";
var moment = require("moment");

function CreatePost({ user, changeUser }) {
  const [imageSelected, setImageSelected] = useState("");

  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const dateRef = useRef();
  // const imageRef = useRef();
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  const createPostHandler = async (e) => {
    e.preventDefault();
    const image = await uploadImage();
    console.log(image)
    // reference file URL in the data object being sent to createPost?
    const data = {
      author: authorRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
      date: dateRef.current.value,
      image: image.data,
    };
    console.log(data);
    await api.createPost(data);
  };

  const uploadImage = async () => {
    console.log(imageSelected);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", process.env.UPLOAD_PRESET);

    return await api.uploadImageFile(formData);
    //TODO: save URL string to database
  };

  return (
    <div className="create-secret-main">
      <h1 className="create-secret-title">Create a Game Secret</h1>
      <form onSubmit= {createPostHandler}>
        <div>
          <p>Post by:</p>
          <input disabled="disabled" ref={authorRef} value={localUser.name} />
        </div>
        <p>At:</p>
        <input disabled="disabled" ref={dateRef} value={currentDate} />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title of post</label>
          <input
            className="form-control"
            placeholder="Enter title here"
            ref={titleRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Post Content:</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Pour your heart out!"
            ref={bodyRef}
          ></textarea>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div>
        </div>
        <div className="custom-file">
          <input
            type="file"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
          />
          {/* <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* </Redirect> */}
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
