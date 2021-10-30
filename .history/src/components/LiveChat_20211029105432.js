import React, { useContext } from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

export default function LiveChat() {
    const { darkMode } = useContext(usersSelectedModeContext);
    return(
        <div className="live-chat-main-container">
            <RiChat1Fill size="29px" color={`${darkMode ? "#012633" : "#4481eb"}`}/>
        </div>
    )
}
