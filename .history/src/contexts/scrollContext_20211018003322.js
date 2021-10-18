import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// import { sidebarContext } from './sidebarContext';

const ScrolledContext = React.createContext();

export function useScroll() {
    return useContext(ScrolledContext);
}

export function ScrolledProvider({ children }) {
    const [navbarChange, setNavbarChange] = useState(false);
    const [svgScale, setSvgScale] = useState(false);


    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const scrolled2 = window.scrollY;

            if(scrolled > 655) {
                setNavbarChange(true);
            } else if(scrolled <= 655) {
                setNavbarChange(false);
            } 

            if(scrolled2 > 1160) {
                setSvgScale(true);
            } else if(scrolled2 <= 1160) {
                setSvgScale(false);
            };
        });
    })

    const value = {
        navbarChange,
        svgScale,
    }

    return (
        <ScrolledContext.Provider value={value}>
            {children}
        </ScrolledContext.Provider>
    )
}