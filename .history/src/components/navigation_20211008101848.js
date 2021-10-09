import React, {useContext, useState} from "react";
import { IoIosMenu } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import {sidebarContext} from "../contexts/sidebarContext";
import { useSwipe } from "../contexts/swipeContext";

export default function Navigation(){
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();



    // const [touchStart, setTouchStart] = useState(0);
    // const [touchEnd, setTouchEnd] = useState(0);

    // function handleTouchStart(e) {
    //     setTouchStart(e.targetTouches[0].clientX)
    // };

    // function handleTouchMove(e) {
    //     setTouchEnd(e.targetTouches[0].clientX)
    // };

    // function handleTouchEnd() {
    //     if(touchStart - touchEnd > 70) {
    //         setMenuActive(false);
    //         console.log("right");
    //     }

    //     if(touchStart - touchEnd < -70) {
    //         setMenuActive(true);
    //         console.log("left")
    //     }
    // }

    return(
        
        <nav onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className='Blog-Navigation'>
            <span className="menu-title">My React Blog</span>
            <Sidebar />
            <span onClick={() => setMenuActive(!menuActive)} className="menu-icon">
                <IoIosMenu />
            </span>
        </nav>
    )
}