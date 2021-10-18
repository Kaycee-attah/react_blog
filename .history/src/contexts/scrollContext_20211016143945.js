import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// import { sidebarContext } from './sidebarContext';

const ScrolledContext = React.createContext();

export function useScroll() {
    return useContext(ScrolledContext);
}

export function ScrolledProvider({ children }) {
    const [navbarChange, setNavbarChange] = useState(false);


    useEffect(() => {
        document.addEventListener('scroll', () => {
            // const scrollable = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY;

            if(scrolled > 655) {
                setNavbarChange(true);
            } else if(scrolled <= 655) {
                setNavbarChange(false);
            };

            console.log(scrolled)
        })
    })

    const value = {
        navbarChange
    }

    return (
        <ScrolledContext.Provider value={value}>
            {children}
        </ScrolledContext.Provider>
    )
}