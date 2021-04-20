import React from 'react';
import Post from '../components/Post'

function HomePage() {
    return (
        <>
            <div style={{ fontSize: 35, textAlign: 'center', marginTop: 30}} className="home-title">
                Secrets Feed
            </div>
            <Post />
        </>
    )
}

export default HomePage;