import React, { useContext, useState} from "react";
import { IoIosMenu } from "react-icons/io";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { Sidebar } from "./Sidebar";


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
    const [menuActive, setMenuActive] = useState(false);

    function handleSettings() {
        setSettingsMenu(!settingsMenu);
    };
    return(
        
        <nav className='Blog-Navigation'>
            <span className="menu-title">My React Blog</span>
            <Sidebar />
            <span onClick={() => setMenuActive(!menuActive)} className="menu-icon">
                <IoIosMenu />
            </span>
        </nav>
    )
}