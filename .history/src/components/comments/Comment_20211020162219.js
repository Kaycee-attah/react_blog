import React from 'react'
import { deleteComment } from '../../api';
import CommentForm from './CommentForm';

export default function Comment({ comment, replies, currentUserId, deleteComment, addComment, activeComment, setActiveComment, parentId = null }) {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    // const text = "";
    
    return (
        <div className="comment">
            <div className="comment-image-container">

            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                    <div className="comment-text">{comment.body}</div>
                    <div className="comment-actions">
                        {canReply && (<div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: "replying" })}>Reply</div>)}
                        {canEdit && (<div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}>Edit</div>)}
                        {canDelete && (<div className="comment-action" onClick={() => deleteComment(comment.id)} >Delete</div>)}
                    </div>
                    { isReplying && (
                        <CommentForm submitLabel="Reply" handleSubmit={() => addComment(text, replyId)} />
                    ) }
                    {replies.length > 0 && (
                        <div className="replies">
                            {replies.map(reply => (
                                <Comment 
                                    comment={reply} 
                                    key={reply.id} 
                                    replies={[]}
                                    currentUserId={currentUserId}
                                    deleteComment={deleteComment}
                                    addComment={addComment}
                                    parentId={comment.id}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
