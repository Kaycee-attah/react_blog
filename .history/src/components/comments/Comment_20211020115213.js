import React from 'react'

export default function Comment({ comment }) {
    return (
        <div className="comment">
            <div className="comment-image-container">

            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-content">{comment.username}</div>
                    <div>{comment.createdAt}</div>
                    <div className="comment-text">{comment.body}</div>
                </div>
            </div>
        </div>
    )
}
