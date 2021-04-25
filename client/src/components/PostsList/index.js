import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ViewFull from '../ViewFull'
import SavePost from '../SavePost'
import api from "../../utils/api";

function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.getPosts()
            .then(results => {
                setPosts(results.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSave = () => {
        console.log('bruh moment')
    }

    return (
        <>
            {posts.map(post => (
                <div key={post._id} className="card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <h6>Posted By: <Link to="/profile">{post.author}</Link></h6>
                            <p className="card-text">
                                {post.body}
                            </p>
                            <Link to="/fullpost">
                                <div className="more-details">
                                    <ViewFull />
                                </div>
                            </Link>
                            <div className="card-footer">
                                <small className="text-muted">{post.date}</small>
                            </div>
                        </div>
                            <SavePost onClick={() => {handleSave()}} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostsList;
