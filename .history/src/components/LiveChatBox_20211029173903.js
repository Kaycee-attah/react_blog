import React, { useContext } from 'react';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";

export default function LiveChatBox() {
    const { darkMode } = useContext(usersSelectedModeContext);
    return (
        <div className={`chat-box-container ${darkMode && "active"}`}>
                
        </div>
    )
}
