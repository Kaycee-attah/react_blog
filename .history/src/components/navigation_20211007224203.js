import React, {useContext} from "react";
import { IoIosMenu } from "react-icons/io"
import { Sidebar } from "./Sidebar";
import {sidebarContext} from "../contexts/sidebarContext";
import SwipeableDrawer from "@mui/material/SwipeableDrawer"

export default function Navigation(){
    const {menuActive, setMenuActive} = useContext(sidebarContext);

    return(
        
        <nav className='Blog-Navigation'>
            <span className="menu-title">My React Blog</span>
            <SwipeableDrawer 
            anchor="left"
            open={false}
            onClose={() => {}}
            onOpen={() => {}}>
                <Sidebar />
            </SwipeableDrawer>
            <span onClick={() => setMenuActive(!menuActive)} className="menu-icon">
                <IoIosMenu />
            </span>
        </nav>
    )
}