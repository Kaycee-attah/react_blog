import React, { useEffect } from 'react';
import { CgDanger } from 'react-icons/cg';

export default function DialogueBox({ dialogueBoxActive, setDialogueBoxActive }) {

    useEffect(() => {

        document.getElementById("cancel-popup-btn").addEventListener("click", function() {
            document.getElementsByClassName("popup")[0].classList.remove("active")
        })
    }, [])

    return (
        <div className={`popup ${dialogueBoxActive && 'active'}`}>
            <div className="icon">
                <CgDanger 
                    style={{
                        fontSize:'90px',
                        color: '#f35832',
                        width:'100%',
                        height:'100%'
                        }}
                />
            </div>
            <div className="title">
                Warning!!
            </div>
            <div className="description">
                Are you sure you want to delete this article?
            </div>
            <div className="popup-dismiss-btn">
                <button id="cancel-popup-btn" className="cancel-popup-btn" >No</button>
                <button id="confirm-popup-btn" className="confirm-popup-btn">Yes</button>
            </div>
        </div>
    )
}
