import React, { useContext } from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

export default function LiveChatIcon() {
    const { darkMode } = useContext(usersSelectedModeContext);
    return(
        <div className="live-chat-icon-container">
            <RiChat1Fill size="50px" color={`${darkMode ? "#34515c" : "#294d8d"}`}/>
        </div>
    )
}
