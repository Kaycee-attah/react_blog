import React, { useEffect, useState } from 'react';
import { getComments as getCommentsApi, createComment as createCommentApi, updateComment as updateCommentApi, deleteComment as deleteCommentApi, updateLikeStatus as updateLikeStatusApi, updateNo_Of_LikesStatus as updateNo_Of_LikesStatusApi, updateDislikeStatus as updateDislikeStatusApi } from '../../api';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default function Comments({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [repliedUserName, setRepliedUserName] = useState('')
    
    const rootComments = backendComments.filter((backendComments) => backendComments.parentId === null );
    const getReplies = commentId => {
        return backendComments.filter(backendComments => backendComments.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    };
    const addComment = (text, parentId)  => {
        console.log("addComment", text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null)
        })
    };

    const updateNo_Of_LikesStatus = (commentId)  => {
        updateNo_Of_LikesStatusApi(commentId).then(() => {
            // console.log(rootComments)
            const updatedBackendComments = backendComments.map(backendComment => {
                // console.log(commentId)
                if(backendComment.id === commentId) {
                    // const prop = 'liked';

                    if(backendComment.liked === true) {
                        backendComment["no_of_likes"] = backendComment.no_of_likes + 1
                    };
                    
                    console.log(backendComment.no_of_likes)
                    // console.log(backendComment)
                        
                };
                return backendComment
            })
            setBackendComments(updatedBackendComments);
            // // setActiveComment(null);
        })
    };

    const updateLikeStatus = (commentId)  => {
        updateLikeStatusApi(commentId).then(() => {
            // console.log(rootComments)
            const updatedBackendComments = backendComments.map(backendComment => {
                // console.log(commentId)
                if(backendComment.id === commentId) {
                    // const prop = 'liked';

                    backendComment["liked"] = !backendComment.liked
                    // console.log(backendComment.liked)
                    // console.log(backendComment)
                        
                };
                return backendComment
            })
            setBackendComments(updatedBackendComments);
            // // setActiveComment(null);
        })
    };

    const updateDislkeStatus = (commentId)  => {
        updateDislikeStatusApi(commentId).then(() => {
            // console.log(rootComments)
            const updatedBackendComments = backendComments.map(backendComment => {
                // console.log(commentId)
                if(backendComment.id === commentId) {
                    // const prop = 'disliked';

                    backendComment["disliked"] = !backendComment.disliked
                    // console.log(backendComment.liked)
                    // console.log(backendComment)
                        
                };
                return backendComment
            })
            setBackendComments(updatedBackendComments);
            // // setActiveComment(null);
        })
    };



    const updateComment = (text, commentId)  => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if(backendComment.id === commentId) {
                    return { ...backendComment, body: text }
                }
                return backendComment
            })
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
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
                        addComment={addComment}
                        repliedUserName={repliedUserName}
                        setRepliedUserName={setRepliedUserName}
                        updateLikeStatus={updateLikeStatus}
                        updateDislkeStatus={updateDislkeStatus}
                        updateNo_Of_LikesStatus={updateNo_Of_LikesStatus}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                    ></Comment>
                ))}
           </div>
        </div>
    )
}
