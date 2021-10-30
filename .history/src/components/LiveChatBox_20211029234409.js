import React, { Fragment, useContext } from 'react';
import { IoIosClose } from 'react-icons/io';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { useLiveChat } from '../contexts/liveChatContext';

export default function LiveChatBox() {
    const { darkMode } = useContext(usersSelectedModeContext);
    const { liveChatBoxActive } = useLiveChat();
    const { setLiveChatBoxActive } = useLiveChat();

    return (
       <Fragment>
            {liveChatBoxActive && <IoIosClose style={{
                    position:"absolute",
                    bottom: "548px",
                    right: "4%",
                    transition: 'all 3000ms ease-in-out'
                }} onClick={() => {setLiveChatBoxActive(false)}} color={`${darkMode ? "#34515c" : "#294d8d"}`} size="40px" />}
           {liveChatBoxActive &&  <div className={`chat-box-container ${darkMode && "active"}`}>
                
                </div>}
       </Fragment>
    )
}
