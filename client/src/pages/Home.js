import React from 'react';
import Post from '../components/Post'
import PostsList from '../components/PostsList';

function HomePage() {
    return (
        <>
            <h4 style={{ textAlign: 'center', marginTop: 40, marginBottom: 20 }} className="home-title">
                Secrets Feed
            </h4>
            <Post />
            <PostsList/>
        </>
    )
}

export default HomePage;