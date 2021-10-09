import React, { useContext, useState} from "react";
import { IoIosMenu } from "react-icons/io";
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { Sidebar } from "./Sidebar";

export default function Navigation(){
    const [menuActive, setMenuActive] = useState(false);

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