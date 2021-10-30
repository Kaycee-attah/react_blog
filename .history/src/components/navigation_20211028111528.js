import React, { useContext } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import { sidebarContext } from "../contexts/sidebarContext";
import { useSwipe } from "../contexts/swipeContext";
import { useClick } from "../contexts/outsideCliksContext";
import { AiOutlineMore } from "react-icons/ai";
import { settingsContext } from "../contexts/settingsContext";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdLightMode, MdNightlight } from "react-icons/md";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

export default function Navigation(){
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const {moreIconSettingsMenu, setMoreIconSettingsMenu} = useContext(settingsContext);
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    const { handleTouchStart } = useSwipe();
    const { handleTouchEnd } = useSwipe();
    const { handleTouchMove } = useSwipe();
    const { dropDownMenuRef } = useClick();
    const { menuIconRef } = useClick();
    const { moreIconRef } = useClick();

    function handleMore() {
        setMoreIconSettingsMenu(!moreIconSettingsMenu);
    };

    return(
        
        <nav onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className={`Blog-Navigation`}>
            <span ref={menuIconRef} onClick={() => setMenuActive(!menuActive)} className={`menu-icon ${!menuActive && 'active'}`}>
                <IoIosMenu color={`${darkMode ? '#e8eaed' : "#000000"}`} style={{display: !menuActive ? "flex" : "none"}}/>
                <IoIosClose color={`${darkMode ? '#e8eaed' : "#000000"}`} style={{display: menuActive ? "flex" : "none", color: menuActive ? "#e8eaed" : "null"}}/>
            </span>
            <span className="menu-title">My React Blog</span>
            <span ref={moreIconRef} className={`more-icon`} onClick={handleMore}>
                <AiOutlineMore color={`${darkMode ? '#e8eaed' : "#000000"}`}/>
            </span>
            <div className={`more-icon-dropDown-Menu-Card-${moreIconSettingsMenu}`}>
                        <div ref={dropDownMenuRef} className="more-icon-dropDown-Menu">
                            <div className="users-avatar">
                                <Avatar icon={<UserOutlined />} size={38}/>
                                <span className="users-avatar-name">Attah Kelechi</span>    
                            </div>  
                            <div className="toggle-mode-wrapper">
                                <div className="toggle-mode-container">
                                    <MdLightMode color={`${darkMode ? '#e8eaed' : "#000000"}`}/>
                                    <label>
                                        <input checked={darkMode} type="checkbox"/>
                                        <span onClick={() => setDarkMode(prevMode => !prevMode)} className="check"></span>
                                    </label>
                                    <MdNightlight color={`${darkMode ? '#e8eaed' : "#000000"}`}/>    
                                </div>    
                            </div>  
                        </div>
                    </div>
            <Sidebar darkMode={darkMode}/>
        </nav>
    )
}