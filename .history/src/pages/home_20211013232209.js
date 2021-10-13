import React from 'react';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';
import { MasonryPost, PostMasonry } from '../components/common';
import { useSwipe } from '../contexts/swipeContext';

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: 400px
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    });
};

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop();


export default function Home() {
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();
    return (
        <section onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className="container home" >
            <div className="row">
                <section className="featured-posts-container">
                    <h1>Featured Posts</h1>
                    <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                    <MasonryPost post={lastFeatured} tagsOnTop={true} />
                </section>
                <h1>Trending Posts</h1>
                <PostMasonry posts={trending} />
            </div>
        </section>
    )
}
