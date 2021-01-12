import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { uuid } from 'uuidv4'

const port = 4002
const app = express()
app.use(cors())

app.use(bodyParser.json())

const commentsByPosts: any = {}

app.post('/posts/:id/comments', (request, response) => {
    const commentId = uuid()
    const { content } = request.body
    const comments = commentsByPosts[request.params.id] || [];

    comments.push({ id: commentId, content });

    commentsByPosts[request.params.id] = comments;

    return response.status(201).send(comments)
})

app.get('/posts/:id/comments', (request, response) => {
    return response.send(commentsByPosts[request.params.id] || [])
})

app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port} 🤡 `);
})