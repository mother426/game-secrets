import React from 'react';
import api from '../../utils/api';
import DeletePost from '../DeletePost';
import './style.css';

function YourPosts(props) {

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const post = await api.deletePost(id);
      console.log(post)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <h4 className="your-secrets-title">
      Your Secrets
    </h4>

    <div className="card post-card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img
            className=""
            src="https://i.guim.co.uk/img/media/c39bf8486b167ff4d297f4db15efe4e18078df98/683_269_2713_1628/master/2713.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=aa104510291a053bf3f40583b4e2e86c"
            alt="Card cap"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <h6>posted by: {props.author}</h6>
          <p className="card-text">
           {props.body}
          </p>
        </div>
    <DeletePost onClick ={() => handleDelete(props._id)} />
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.date}</small>
      </div>
    </div>
    </>
  )
}

export default YourPosts;