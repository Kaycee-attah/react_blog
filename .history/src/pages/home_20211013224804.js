import React from 'react';
import trending from '../assets/mocks/trending';
import { PostMasonry } from '../components/common';
import { useSwipe } from '../contexts/swipeContext';

const trendinConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    });
};

mergeStyles(trending, trendinConfig)

export default function Home() {
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();
    return (
        <section onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className="container home" >
            <div className="row">
                <h1>Trending Posts</h1>
                <PostMasonry posts={trending} />
            </div>
        </section>
    )
}
