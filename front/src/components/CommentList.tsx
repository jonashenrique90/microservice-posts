import React, { useState, useEffect } from 'react'
import apiComments from '../services/apiComments'

interface CommentProps {
    postId: string;
}
const CommentList:React.FC<CommentProps> = ({ postId }) => {

    const [comments, setComments] = useState([])


    useEffect( () => {
        const fetchData = async () => {
            const response = await apiComments.get(`posts/${postId}/comments`)
            setComments(response.data)
        }
        
        fetchData()
    },[postId])

    const renderCommentsList = comments.map((comment: any) => {
        return (
            <li key={comment.id}>{comment.content}</li>
        )
    })
    return (
        <div>
            {renderCommentsList}
        </div>
    )
}

export default CommentList