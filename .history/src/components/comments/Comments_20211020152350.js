import React, { useEffect, useState } from 'react';
import { getComments as getCommentsApi, createComment as createCommentApi, deleteComment, deleteComment as deleteCommentApi } from '../../api';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default function Comments({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter((backendComments) => backendComments.parentId === null);
    const getReplies = commentId => {
        return backendComments.filter(backendComments => backendComments.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };
    const addComment = (text, parentId)  => {
        console.log("addComment", text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
        })
    };

    const deleteComment = (commentId) => {
        if(window.confirm('Are you sure that you want to remove comment?')) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(backendComments => backendComments.id !== commentId);
                setBackendComments(updatedBackendComments);
            })
        }
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    }, [])
    return (
        <div className="comments ">
           <h3 className="comments-title">Comments</h3>
           <div className="comment-form-title">Write Comment</div>
           <CommentForm submitLabel="Write" handleSubmit={addComment} />
           <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        currentUserId={currentUserId}
                        addComment={addComment()}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                    ></Comment>
                ))}
           </div>
        </div>
    )
}
