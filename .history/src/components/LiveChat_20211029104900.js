import React, { useContext } from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

export default function LiveChat() {
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    return(
        <div className="live-chat-main-container">
            <RiChat1Fill color={`${darkMode ? "linear-gradient(-45deg, #0e1a2f, #012633)" : "linear-gradient(-45deg, #4481eb, #04befe);"}`}/>
        </div>
    )
}
