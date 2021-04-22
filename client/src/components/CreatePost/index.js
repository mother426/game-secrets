import React from "react";
import "./style.css";

function CreatePost() {
  return (
    <div>
      <h1>Create Player Question</h1>
      <form>

        <div class="form-group">
          <label for="exampleInputEmail1">Title of post</label>
          <input class="form-control" placeholder="Enter title here" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Player Question:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Pour your heart out!"></textarea>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Upload</span>
            </div>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"/>
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>

              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
          
</form>
        </div>
  );
}

export default CreatePost;