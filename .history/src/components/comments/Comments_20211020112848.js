import React, { useEffect, useState } from 'react';
import { getComments as getCommentsApi } from '../../api';

export default function Comments({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([]);
    console.log('backend comments', backendComments)

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    }, [])
    return (
        <div>
           Comments 
        </div>
    )
}
