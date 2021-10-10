import React, { useCallback, useContext, useEffect, useRef } from "react";
import { IoIosMenu } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import { sidebarContext } from "../contexts/sidebarContext";
import { useSwipe } from "../contexts/swipeContext";
import { useClick } from "../contexts/outsideCliksContext";
import { AiOutlineMore } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";
import { settingsContext } from "../contexts/settingsContext";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdLightMode, MdNightlight } from "react-icons/md";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

export default function Navigation(){
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const {settingsMenu, setSettingsMenu} = useContext(settingsContext);
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();
    const { dropDownMenuRef } = useClick();
    const  { sideBarRef } = useClick();

    function handleMore() {
        setSettingsMenu(!settingsMenu);
    };

    // const handleClickOutsideDropDown = useCallback(
    //     (e) => {
    //         if(dropDownMenuRef.current.contains(e.target)) {
    //             return;
    //         } else {
    //             setSettingsMenu(false);
    //         }
    //     },
    //     [setSettingsMenu],
    // );

    // const handleClickOutsideSideBar = useCallback(
    //     (e) => {
    //         if(sideBarRef.current.contains(e.target)) {
    //             return;
    //         } else {
    //             setMenuActive(false);
    //         }
    //     },
    //     [setMenuActive],
    // );

    // useEffect(() => {
    //     // add when mounted
    //     document.addEventListener("mousedown", handleClickOutsideSideBar);
        
    //     // return function to be called when unmounted
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutsideSideBar);
    //     }
    // },[handleClickOutsideSideBar]);

    // useEffect(() => {
    //     // add when mounted
    //     document.addEventListener("mousedown", handleClickOutsideDropDown);
        
    //     // return function to be called when unmounted
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutsideDropDown);
    //     }
    // },[handleClickOutsideDropDown]);
    return(
        
        <nav onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className='Blog-Navigation'>
            <span onClick={() => setMenuActive(!menuActive)} className={`menu-icon ${!menuActive && 'active'}`}>
                <IoIosMenu style={{display: !menuActive ? "flex" : "none", color: menuActive ? "#383A23" : "null"}}/>
                <MdOutlineMenuOpen style={{display: menuActive ? "flex" : "none", color: menuActive ? "#EC6103" : "null"}}/>
            </span>
            <span className="menu-title">My React Blog</span>
            <span className={`more-icon`} onClick={handleMore}>
                <AiOutlineMore />
            </span>
            <div className={`more-icon-dropDown-Menu-Card-${settingsMenu}`}>
                        <div ref={dropDownMenuRef} className="more-icon-dropDown-Menu">
                            <div className="users-avatar">
                                <Avatar icon={<UserOutlined />} size={38}/>
                                <span className="users-avatar-name">Attah Kelechi</span>    
                            </div>  
                            <div className="toggle-mode-wrapper">
                                <div className="toggle-mode-container">
                                    <MdLightMode />
                                    <label>
                                        <input checked={darkMode} type="checkbox"/>
                                        <span onClick={() => setDarkMode(prevMode => !prevMode)} className="check"></span>
                                    </label>
                                    <MdNightlight />    
                                </div>    
                            </div>  
                        </div>
                    </div>
            <Sidebar ref={sideBarRef}/>
        </nav>
    )
}