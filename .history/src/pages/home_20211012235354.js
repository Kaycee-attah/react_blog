import React from 'react';
import trending from '../assets/mocks/trending';
import { PostMasonry } from '../components/common';
import { useSwipe } from '../contexts/swipeContext';

export default function Home() {
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();
    return (
        <section onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className="container home" >
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} />
            </div>
        </section>
    )
}
