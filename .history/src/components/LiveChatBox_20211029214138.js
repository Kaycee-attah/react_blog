import React, { Fragment, useContext } from 'react';
import { IoIosClose } from 'react-icons/io';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { useLiveChat } from '../contexts/liveChatContext';

export default function LiveChatBox() {
    const { darkMode } = useContext(usersSelectedModeContext);
    const { liveChatBoxActive } = useLiveChat();
    // const { setLiveChatBoxActive } = useLiveChat();
    return (
       <Fragment>
            <IoIosClose style={{
                    position:"absolute",
                    top: "0"
                }} color={`${darkMode ? "#34515c" : "#294d8d"}`} />
           {liveChatBoxActive &&  <div className={`chat-box-container ${darkMode && "active"}`}>
                
                </div>}
       </Fragment>
    )
}
