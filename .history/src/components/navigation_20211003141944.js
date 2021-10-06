import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    const [settingsMenu, setSettingsMenu] = useState(false);

    function handleSettings() {
        setSettingsMenu(!settingsMenu);
        console.log(settingsMenu);
    };

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return(
        
        <nav className='Blog-Navigation'>
            <span>My React Blog</span>
            <ul>
                {
                    navigation_links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                }
                <span onClick={handleSettings}>Settings</span>
                <div style={settingsMenu ? {display: "flex"} : {display: "none"}} className={`settings-dropDown-Menu-Card-${settingsMenu}`}>
                    <div className="settings-dropDown-Menu">
                        hi!!!!!1
                    </div>
                </div>
            </ul>
            
        </nav>
    )
}