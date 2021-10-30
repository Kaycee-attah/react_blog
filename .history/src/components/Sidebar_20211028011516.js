import React,{ useContext } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdLightMode, MdNightlight, MdSettings } from "react-icons/md";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import {sidebarContext} from "../contexts/sidebarContext";
import { settingsContext } from '../contexts/settingsContext';
import { useClick } from "../contexts/outsideCliksContext";

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

export function Sidebar({ darkMode }) {
    const {settingsMenu, setSettingsMenu} = useContext(settingsContext);
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    const {menuActive} = useContext(sidebarContext);
    const  { sideBarRef } = useClick();
    const  { settingsIconRef } = useClick();
    const  { settingsDropdownRef } = useClick();

    function handleSettings() {
        setSettingsMenu(!settingsMenu);
    };
    return (
        <div ref={sideBarRef} className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {
                        navigation_links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                    <span ref={settingsIconRef} className="settings-icon" onClick={handleSettings}>
                        <MdSettings color="#e8eaed"/>
                        
                    </span>
                    <div ref={settingsDropdownRef} className={`settings-dropDown-Menu-Card-${settingsMenu}`}>
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
            </div>
    )
}
