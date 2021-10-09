import React, {useContext, useState} from "react";
import { IoIosMenu } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import {sidebarContext} from "../contexts/sidebarContext";

export default function Navigation(){
    const {menuActive, setMenuActive} = useContext(sidebarContext);


    let touchstartX = 0
    let touchendX = 0

    const slider = document.getElementById('nav');

    function handleGesture() {
        if(touchendX < touchstartX) alert('swiped left!')
        if(touchendX > touchstartX) alert('swiped right!')
    };

    slider.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })

    slider.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        handleGesture()
    })

    return(
        
        <nav id="nav" className='Blog-Navigation'>
            <span className="menu-title">My React Blog</span>
            <Sidebar />
            <span onClick={() => setMenuActive(!menuActive)} className="menu-icon">
                <IoIosMenu />
            </span>
        </nav>
    )
}