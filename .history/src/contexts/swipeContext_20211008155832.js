import React, { useContext, useState } from 'react';
import { sidebarContext } from './sidebarContext';

const SwipeAbleContext = React.createContext();

export function useSwipe() {
    return useContext(SwipeAbleContext);
}

export function SwipeProvider({ children }) {
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX)
    };

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX)
    };

    function handleTouchEnd() {
        if(touchStart - touchEnd > 150 && menuActive) {
            setMenuActive(false)
            
        }else{
            return
        }

        if(touchStart - touchEnd < -150 && !menuActive) {
            setMenuActive(true);
        
        }else{
            return
        }
    }


    const value = {
        handleTouchStart,
        handleTouchEnd,
        handleTouchMove
    }

    return (
        <SwipeAbleContext.Provider value={value}>
            {children}
        </SwipeAbleContext.Provider>
    )
}