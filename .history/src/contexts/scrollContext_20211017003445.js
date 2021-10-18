import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// import { sidebarContext } from './sidebarContext';

const ScrolledContext = React.createContext();

export function useScroll() {
    return useContext(ScrolledContext);
}

export function ScrolledProvider({ children }) {
    const [navbarChange, setNavbarChange] = useState(false);
    const [navbarChangeAgain, setNavbarChangeAgain] = useState(false);
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
            const scrolled3 = window.scrollY;
            const scrolled4 = window.scrollY

            if(scrolled > 655) {
                setNavbarChange(true);
            } else if(scrolled <= 655) {
                setNavbarChange(false);
            } else if(scrolled4 > 1160) {
                setNavbarChange(false)
            };

            if(scrolled2 > 1160) {
                setSvgScale(true);
            } else if(scrolled2 <= 1160) {
                setSvgScale(false);
            };

            // if(scrolled3 > 1960) {
            //     setNavbarChange(true);
            // } else if(scrolled3 <= 1960) {
            //     setNavbarChange(false);
            // };

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
        svgScale,
        navbarChangeAgain
    }

    return (
        <ScrolledContext.Provider value={value}>
            {children}
        </ScrolledContext.Provider>
    )
}