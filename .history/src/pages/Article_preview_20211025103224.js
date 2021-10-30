import React, { useContext } from 'react';
import { TextEditorInputValueContext } from '../contexts/textEditorInputValueContext';

export default function Article_preview() {
    const { textEditorInputValue } = useContext(TextEditorInputValueContext);
    
    return (
        <div className="Article-Preview-Container">
            { textEditorInputValue }
        </div>
    )
}
