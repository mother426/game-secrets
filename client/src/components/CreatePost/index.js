import React from 'react';
import './style.css';

function CreatePost() {
    return (
        <div>
            <h1>Create Player Question</h1>
        <form>

        </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Player Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Player Question:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
        
            </div>
            </div>
</form>
    );
}

export default CreatePost;