import React, { FormEvent, useState } from 'react'
import apiPosts from '../services/apiPosts'

const PostCreate: React.FC = () => {
    const [title, setTitle] = useState('')

    const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    
    async function handlePostSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()       
        await apiPosts.post('/posts', { title } )
        setTitle('')
    }


    return(
        <>
        <form onSubmit={(event) => handlePostSubmit(event)}>
            <div className="form-group">
                <label htmlFor="title">Título</label>
                <input 
                    className="form-control"
                    value={title}
                    onChange={handleChangeTitle}
                    type="text"
                    name="title"/>                   
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </>
    )
}

export default PostCreate