import React from 'react';
import './style.css';

function CreatePost() {
    return (
        <div>
            <h1>Create Player Question</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Player Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Player Question:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>

</div>
</form>
</div>
  );
}

export default CreatePost;