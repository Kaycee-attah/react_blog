import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdNightlight, MdSettings } from "react-icons/md";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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

export default function Navigation(){
    const [settingsMenu, setSettingsMenu] = useState(getInitialMode());
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        // return () => {
        //     cleanup
        // }
    }, [darkMode])

    function handleSettings() {
        setSettingsMenu(!settingsMenu);
    };

    function getInitialMode() {
        const savedMode = JSON.parse(localStorage.getItem('darkMode'));
        return savedMode;
    };
    return(
        
        <nav className='Blog-Navigation'>
            <span className="menu-title">My React Blog</span>
            <ul>
                {
                    navigation_links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                }
                <span onClick={handleSettings}>
                    <MdSettings />
                </span>
                <div className={`settings-dropDown-Menu-Card-${settingsMenu}`}>
                    <div className="settings-dropDown-Menu">
                        <div className="users-avatar">
                            <Avatar icon={<UserOutlined />} />    
                        </div>  
                        <div className="toggle-mode-wrapper">
                            <MdLightMode />
                            <label>
                                <input type="checkbox"/>
                                <span onClick={() => setDarkMode(prevMode => !prevMode)} className={darkMode ? "check-dark" : "check-light"}></span>
                            </label>
                            {/* <button onClick={() => setDarkMode(!darkMode)}>change</button> */}
                            <MdNightlight />    
                        </div>  
                    </div>
                </div>
            </ul>
            
        </nav>
    )
}