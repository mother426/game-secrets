import React, { useEffect, useRef, useState } from 'react';
import api from '../utils/api';

const FullPost = props => {
  const [comment, setComment] = useState([]);
  const commentRef = useRef();

  useEffect(() => {
    api.getPost(props.match.params.id)
    .then(res => setComment(res.data))
    .catch(err => console.log(err)) 
  }, []);
  const commentsArray = comment.comments
  const commentHandler = async (e) => {
    e.preventDefault();
    const data = {
      comments: commentRef.current.value
    }
    console.log(data)
    // await api.createComment(data)
  }
 
    return(
      <>
        <div key={comment._id} className="card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{comment.title}</h4>
                            <h6>Posted By: {comment.author}</h6>
                            <p className="card-text">
                                {comment.body}
                            </p>
                            <div className="card-footer">
                                <small className="text-muted">{comment.date}</small>
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
          {commentsArray.map(comment => (
          <div className="card">
            {comment.comments}
          </div>
      ))}
      </>
    );
};

export default FullPost;