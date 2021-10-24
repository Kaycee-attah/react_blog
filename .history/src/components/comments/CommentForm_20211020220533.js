import React, { useState } from 'react'

export default function CommentForm({ handleSubmit, submitLabel, username, handleCancel, initialText = '', hasCancelButton = false }) {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text);
        setText("");
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea className="comment-form-textarea" value={text} onChange={(e) => {

                if(initialText.slice(1) === username) {
                    document.write(initialText.fontcolor("black"));
                    setText(e.target.value)
                };
                return setText(e.target.value)
                
                }} />
            <button className="comment-form-button" disabled={isTextareaDisabled}>{submitLabel}</button>
            {hasCancelButton && (
            <button type="button" className="comment-form-button comment-form-cancel-button" onClick={handleCancel}>Cancel</button>
            )}
        </form>
    )
}
