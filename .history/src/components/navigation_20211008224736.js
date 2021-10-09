import React, { useContext } from "react";
import { IoIosMenu } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import { sidebarContext } from "../contexts/sidebarContext";
import { useSwipe } from "../contexts/swipeContext";
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

    function handleMore() {
        setSettingsMenu(!settingsMenu);
    };
    return(
        
        <nav onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} className='Blog-Navigation'>
            <span onClick={() => setMenuActive(!menuActive)} className={`menu-icon ${!menuActive && 'active'}`}>
                <IoIosMenu style={{display: !menuActive ? "flex" : "none"}}/>
                <MdOutlineMenuOpen style={{display: menuActive ? "flex" : "none"}}/>
            </span>
            <span className="menu-title">My React Blog</span>
            <span className={`more-icon`} onClick={handleMore}>
                <AiOutlineMore />
            </span>
            <div className={`more-icon-dropDown-Menu-Card-${settingsMenu}`}>
                        <div className="more-icon-dropDown-Menu">
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
            <Sidebar />
        </nav>
    )
}