import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { deleteComment, updateComment } from '../../api';
import CommentForm from './CommentForm';
import moment from 'moment'

export default function Comment({ comment, replies, currentUserId, deleteComment, addComment, updateComment, activeComment, setActiveComment, parentId = null }) {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = moment(comment.createdAt).format('MMMM DD, YYYY');
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    const [repliesActive, setRepliesActive] = useState(false);
    // const text = "";
    
    return (
        <div className="comment">
            <div className="comment-image-container">
                <Avatar icon={<UserOutlined />} size={38}/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-header">
                        <div className="comment-author">{comment.username}</div>
                        <div className="comment-date">{createdAt}</div>
                    </div>
                    { !isEditing && <div className="comment-text">{comment.body}</div>}
                    { isEditing && (
                        <CommentForm 
                            submitLabel="Update" 
                            hasCancelButton 
                            initialText={comment.body} 
                            handleSubmit={(text) => {updateComment(text, comment.id)}} 
                            handleCancel={() => setActiveComment(null)} 
                        />
                    ) }
                    <div className="comment-actions">
                        {canReply && (<div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: "replying" })}>Reply</div>)}
                        {canEdit && (<div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}>Edit</div>)}
                        {canDelete && (<div className="comment-action" onClick={() => deleteComment(comment.id)} >Delete</div>)}
                    </div>
                    { isReplying && (
                        <CommentForm submitLabel="Reply" handleSubmit={(text) => addComment(text, replyId)} />
                    ) }
                    <div className="replies-toggler">
                        1
                    </div>
                    {/* {replies.length > 0 && (
                        <div className="replies">
                            {replies.map(reply => (
                                <Comment 
                                    comment={reply} 
                                    key={reply.id} 
                                    replies={[]}
                                    currentUserId={currentUserId}
                                    deleteComment={deleteComment}
                                    addComment={addComment}
                                    updateComment={updateComment}
                                    parentId={comment.id}
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                />
                            ))}
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}
