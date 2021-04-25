import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import DeletePost from '../DeletePost';
import './style.css';

function YourPosts() {
  const [posts, setPosts] = useState([]);
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const username = localUser.name
  let usersPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].author === username) {
      usersPosts.push(posts[i]);
    }
  }
  console.log(usersPosts)
  useEffect(() => {
    api.getPosts()
      .then(results => {
        setPosts(results.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const post = await api.deletePost(id);
      console.log(post)
    } catch (err) {
      console.log(err);
    }
  }

  // FIXME: 
  const onSubmit = () => {
    if (handleDelete) {
      console.log('onSubmit reload is working')
      return window.location.reload('/profile')
    }
  }



  return (
    <>
      <h4 className="your-secrets-title">
        Your Secrets
    </h4>
      {usersPosts.map(post => (
        <div key={post._id} className="card post-card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img
                className=""
                src="https://i.guim.co.uk/img/media/c39bf8486b167ff4d297f4db15efe4e18078df98/683_269_2713_1628/master/2713.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=aa104510291a053bf3f40583b4e2e86c"
                alt="Card cap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <h6>posted by: {post.author}</h6>
              <p className="card-text">
                {post.body}
              </p>
              {/* TODO: redirect back to profile page on click */}
              <DeletePost onClick={() => { handleDelete(post._id); onSubmit(); }} />
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">{post.date}</small>
          </div>
        </div>
      ))}
    </>
  )
}

export default YourPosts;