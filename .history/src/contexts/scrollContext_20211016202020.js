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




    // const handleScalinging = useCallback(
    //     () => {
    //         if(scrolled > 1160) {
    //             setSvgScale(true);
    //         } else if(scrolled <= 1160) {
    //             setSvgScale(false);
    //         };
    //     },
    //     [scrolled, setSvgScale],
    // )

    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         const scrolled = window.scrollY;

    //         if(scrolled > 1160) {
    //             alert("passed");
    //         };
    //     })
    // })


    useEffect(() => {
        document.addEventListener('scroll', () => {
            // const scrollable = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY;
            const scrolled2 = window.scrollY;

            if(scrolled > 655) {
                setNavbarChange(true);
            } else if(scrolled <= 655) {
                setNavbarChange(false);
            };

            if(scrolled2 > 1160) {
                setSvgScale(true);
            } else if(scrolled2 <= 1160) {
                setSvgScale(false);
            };

            console.log(scrolled)
        });

        // return () => {
        //     document.removeEventListener('scroll', () => {
        //         // const scrollable = document.documentElement.scrollHeight - window.innerHeight
        //         const scrolled = window.scrollY;
    
        //         if(scrolled > 655) {
        //             setNavbarChange(true);
        //         } else if(scrolled <= 655) {
        //             setNavbarChange(false);
        //         };
    
        //         console.log(scrolled)
        //     });
        //   }
        
    });

    // useEffect(() => {
    //     // add when mounted
    //     document.addEventListener('scroll', handleScalinging);
        
    //     // return function to be called when unmounted
    //     return () => {
    //       document.removeEventListener("scroll", handleScalinging);
    //     }
    // },[handleScalinging]);

    const value = {
        navbarChange,
        svgScale
    }

    return (
        <ScrolledContext.Provider value={value}>
            {children}
        </ScrolledContext.Provider>
    )
}