import React, { Fragment, useContext } from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { useLiveChat } from '../contexts/liveChatContext';

export default function LiveChatIcon() {
    const { darkMode } = useContext(usersSelectedModeContext);
    const { liveChatBoxActive } = useLiveChat();
    const { setLiveChatBoxActive } = useLiveChat();

    return(
        <Fragment>
            {liveChatBoxActive && <div className="live-chat-icon-container" onClick={() => {setLiveChatBoxActive(true)}}>
        <RiChat1Fill size="50px" color={`${darkMode ? "#34515c" : "#294d8d"}`}/>
    </div>}
        </Fragment>
    )
}
