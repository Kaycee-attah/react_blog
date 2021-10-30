import React from 'react';
import { useTextEditorInputValue } from '../contexts/textEditorInputValueContext';
import { useHistory } from 'react-router-dom';

export default function Article_preview() {
    const { textEditorInputValue } = useTextEditorInputValue();
    const history = useHistory();
    
    return (
        <div className="Article-Preview-Container">
            <div className="Article-Preview-Action-Button-Container">
                <button onClick={() => {history.push('./CreateContent')}}>Edit</button>
            </div>
            
            <div className="Article-Preview-Wrapper" dangerouslySetInnerHTML={{__html: textEditorInputValue}}>

            </div>
        </div>
    )
}
