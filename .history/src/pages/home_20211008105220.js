import React from 'react';
import { useSwipe } from '../contexts/swipeContext';

export default function Home() {
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();
    return (
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
            home
        </div>
    )
}
