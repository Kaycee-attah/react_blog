import React,{ useCallback, useContext, useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdLightMode, MdNightlight, MdSettings } from "react-icons/md";
import { AiOutlineMore } from "react-icons/ai";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import {sidebarContext} from "../contexts/sidebarContext";

const navigation_links = [
    {
        title: 'Home',
        path: './'
    },
    {
        title: 'Blog',
        path: './blog'
    },
    {
        title: 'Login',
        path: './login'
    }
]

export function Sidebar() {
    const [settingsMenu, setSettingsMenu] = useState(false);
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const node = useRef();

    const handleClick = useCallback((e) => {
        if (node.current.contains(e.target)) {
            setMenuActive(true);
        };
      },[setMenuActive]);

    useEffect(() => {
        // add when mounted
        document.addEventListener("touchstart", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("touchend", handleClick);
        };
      }, [handleClick]);

    function handleSettings() {
        setSettingsMenu(!settingsMenu);
    };
    return (
        <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {
                        navigation_links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                    <span ref={node} className="settings-icon" onClick={handleSettings}>
                        <MdSettings />
                        
                    </span>
                    <div className={`settings-dropDown-Menu-Card-${settingsMenu}`}>
                        <div className="settings-dropDown-Menu">
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
                </ul>
                <span ref={node} className="more-icon" onClick={handleSettings}>
                    <AiOutlineMore />
                    
                </span>
            </div>
    )
}
