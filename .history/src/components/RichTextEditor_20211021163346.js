import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichTextEditor() {
    const [text, setText] = useState('');
    return (
        <div className="text-editor-container">
            <div className="text-editor-header">
                RichTextEditor
            </div>
            <div className="text-editor-wrapper">
                <div className="text-editor">
                   <ReactQuill 
                        value={text}
                        onChange={() => console.log('')}
                        theme='snow'
                        // modules={} 
                        // formats={}
                   />
                </div>
            </div>
        </div>
    )
}
