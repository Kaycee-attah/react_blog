import React, { useCallback, useContext, useEffect, useRef, useState} from "react";
import { IoIosMenu } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import {sidebarContext} from "../contexts/sidebarContext";
import { useSwipe } from "../contexts/swipeContext";
import { AiOutlineMore } from "react-icons/ai";
import { settingsContext } from "../contexts/settingsContext";

export default function Navigation(){
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const {settingsMenu, setSettingsMenu} = useContext(settingsContext);
    const [moreIconActive, setMoreIconActive] = useState(false);
    const node = useRef();
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();

    const handleClick = useCallback((e) => {
        if (node.current.contains(e.target)) {
            setMenuActive(true);
        }
      },[setMenuActive]);

    useEffect(() => {
        // add when mounted
        document.addEventListener("touchstart", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("touchend", handleClick);
        };
      }, [handleClick]);

      useEffect(() => {
          if(menuActive){
            setMoreIconActive(true);
          }else{
              setMoreIconActive(false);
          }
          return () => {
            setMoreIconActive(false)
          }
      }, [menuActive,setMoreIconActive])

    function handleSettings() {
        if(!menuActive || menuActive) {
           setMenuActive(true); 
           setSettingsMenu(!settingsMenu);
        }
    };

    console.log(moreIconActive);
    return(
        
        <nav onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className='Blog-Navigation'>
            <span className="menu-title">My React Blog</span>
            <span ref={node} className={`more-icon`} onClick={handleSettings}>
                <AiOutlineMore />
            </span>
            <Sidebar />
            <span onClick={() => setMenuActive(!menuActive)} className={`menu-icon ${!menuActive && 'active'}`}>
                <IoIosMenu />
            </span>
        </nav>
    )
}