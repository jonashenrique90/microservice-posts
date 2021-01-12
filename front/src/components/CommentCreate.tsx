import React, {useState } from 'react'
import apiComments from '../services/apiComments'

interface CommentProps {
    postID: string;
}

const CommentCreate:React.FC<CommentProps> = ({ postID }) => {
    const [content, setContent] = useState('')

    const onSubmit = async (event: any) => {
        event?.preventDefault()

        await apiComments.post(`/posts/${postID}/comments`, {
            content
        })
        setContent('')

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="content">Novo Comentatio</label>
                    <input 
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="form-control"
                        type="text"
                        name="content" />
                </div>
                <button className="btn btn-primary">Comentar</button>
            </form>
        </div>
    )
}

export default CommentCreate