import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdNightlight, MdSettings } from "react-icons/md";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

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
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    console.log(darkMode)

    function handleSettings() {
        setSettingsMenu(!settingsMenu);
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
                <span onClick={handleSettings}>
                    <MdSettings />
                </span>
                <div className={`settings-dropDown-Menu-Card-${settingsMenu}`}>
                    <div className="settings-dropDown-Menu">
                        <MdLightMode />
                        <label onClick={() => setDarkMode(!darkMode)} >
                            <input type="checkbox"/>
                            <span className="check"></span>
                        </label>
                        {/* <button onClick={() => setDarkMode(!darkMode)}>change</button> */}
                        <MdNightlight />
                    </div>
                </div>
            </ul>
            
        </nav>
    )
}