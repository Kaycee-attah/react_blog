import React, { useEffect } from 'react';
import { useTextEditorInputValue } from '../contexts/textEditorInputValueContext';
import { useHistory } from 'react-router-dom';
import DialogueBox from '../components/dialogueBox';

export default function Article_preview() {
    const { textEditorInputValue } = useTextEditorInputValue();
    const history = useHistory();

    useEffect(() => {
        document.getElementById("open-pop-up").addEventListener("click", function() {
            document.getElementsByClassName("popup")[0].classList.add("active")
        });

        document.getElementById("cancel-popup-btn").addEventListener("click", function() {
            document.getElementsByClassName("popup")[0].classList.remove("active")
        })
    }, [])
    
    return (
        <div className="Article-Preview-Container">
            <div className="Article-Preview-Action-Button-Container">
                <button onClick={() => {history.push('./CreateContent')}}>Edit</button>
                <button id="open-pop-up">Open PopUp</button>
            </div>
            <DialogueBox />
            <div className="Article-Preview-Wrapper" dangerouslySetInnerHTML={{__html: textEditorInputValue}}>

            </div>
        </div>
    )
}
