import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { uuid } from 'uuidv4'

const port = 4001
const app = express()
app.use(cors())
app.use(bodyParser.json())

const posts: any = {}

app.get('/posts', (request, response) => {
    return response.send(posts)
})

app.post('/posts', (request, response) => {
    const id = uuid()
    const { title } = request.body

    posts[id] = {
        id,
        title
    }
    
    return response.status(201).send(posts[id])
})

app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port} 🤡 `);
})