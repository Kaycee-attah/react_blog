import React, { Fragment, useContext, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { useLiveChat } from '../contexts/liveChatContext';

export default function LiveChatBox() {
    const { darkMode } = useContext(usersSelectedModeContext);
    const { liveChatBoxActive } = useLiveChat();
    const { setLiveChatBoxActive } = useLiveChat();

    const el = document.querySelector(".chat-box-container");

    function mousedown(e) {
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        let prevX = e.clientX;
        let prevY = e.clientY;

        function mousemove(e) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = el.getBoundingClientRect();

            el.style.left = rect.left - newX + "px";
            el.style.top = rect.top - newY + "px";

            prevX = e.clientX;
            prevY = e.clientY;
        };

        function mouseup() {

        };
    }
    
    useEffect(() => {
        el.addEventListener("mousedown", mousedown);   
    })

    return (
       <Fragment>
            {liveChatBoxActive && <IoIosClose style={{
                    position:"absolute",
                    bottom: "548px",
                    right: "-9px",
                    transition: 'all 3000ms ease-in-out'
                }} onClick={() => {setLiveChatBoxActive(false)}} color={`${darkMode ? "#34515c" : "#294d8d"}`} size="40px" />}
           {liveChatBoxActive &&  <div className={`chat-box-container`}>
                
                </div>}
       </Fragment>
    )
}
