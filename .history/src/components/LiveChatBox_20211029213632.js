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

           {liveChatBoxActive &&  <div className={`chat-box-container ${darkMode && "active"}`}>
                <IoIosClose style={{
                    position:"absolute",
                    top: "300px"
                }}/>
                </div>}
       </Fragment>
    )
}
