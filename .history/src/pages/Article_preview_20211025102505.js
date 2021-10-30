import React, { useContext } from 'react';
import { TextEditorInputValueContext } from '../contexts/textEditorInputValueContext';

export default function Article_preview() {
    const { TextEditorInputValueContext } = useContext(TextEditorInputValueContext);
    return (
        <div className="Article-Preview-Container">
            {TextEditorInputValueContext}
        </div>
    )
}
