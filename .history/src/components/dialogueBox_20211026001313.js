import React from 'react';
import { CgDanger } from 'react-icons/cg';

export default function DialogueBox() {
    return (
        <div className="popup">
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
                <button id="cancel-popup-btn" className="cancel-popup-btn">No</button>
                <button id="confirm-popup-btn" className="confirm-popup-btn">Yes</button>
            </div>
        </div>
    )
}
