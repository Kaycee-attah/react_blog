import React, { Fragment, useContext, useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { usersSelectedModeContext } from "../contexts/usersSelectedModeContext";
import { useLiveChat } from '../contexts/liveChatContext';

export default function LiveChatBox() {
    const { darkMode } = useContext(usersSelectedModeContext);
    const { liveChatBoxActive } = useLiveChat();
    const { setLiveChatBoxActive } = useLiveChat();
    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const styles = {
        
    }

    const el = document.querySelector(".chat-box-container");

    function mousedown(e) {
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        let prevX = e.screenX;
        let prevY = e.screenY;

        function mousemove(e) {
            let newX = prevX - e.screenX;
            let newY = prevY - e.screenY;

            const rect = el.getBoundingClientRect();

            el.style.left = rect.left - newX + "px";
            el.style.top = rect.top - newY + "px";

            prevX = e.screenX;
            prevY = e.screenY;
        };

        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        };
    }
    
    useEffect(() => {
        if(el) {
            el.addEventListener("mousedown", mousedown);
        }   
    })

    return (
       <Fragment>
            {liveChatBoxActive && <IoIosClose style={{
                    position:"absolute",
                    bottom: "548px",
                    right: "-9px",
                    transition: 'all 3000ms ease-in-out'
                }} onClick={() => {setLiveChatBoxActive(false)}} color={`${darkMode ? "#34515c" : "#294d8d"}`} size="40px" />}
           {liveChatBoxActive &&  <div className={`chat-box-container ${darkMode && "active"}`}>
                
                </div>}
       </Fragment>
    )
}
