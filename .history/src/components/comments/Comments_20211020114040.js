import React, { useEffect, useState } from 'react';
import { getComments as getCommentsApi } from '../../api';
import Comment from './Comment';

export default function Comments({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter((backendComments) => backendComments.parentId === null)
    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    }, [])
    return (
        <div className="comments ">
           <h3 className="comments-title">Comments</h3>
           <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment key={rootComment.id} comment={rootComment}></Comment>
                ))}
           </div>
        </div>
    )
}
