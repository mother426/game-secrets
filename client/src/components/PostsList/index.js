import React from "react";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";
import API from "../../routes/API";

function PostsList() {
  const [state, dispatch] = useStoreContext();

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Player Feed</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post.user}>
              <Link to={"/posts/" + post.user}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
          ))}
        </List>
    </div>
  );
}

export default PostsList;
