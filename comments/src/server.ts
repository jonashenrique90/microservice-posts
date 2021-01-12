import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const port = 4002
const app = express()

app.use(bodyParser.json())
app.use(cors())

const commentsByPosts = {}

app.post('/posts/:id/comments', (request, response) => {

})
app.get('/posts/:id/comments', (request, response) => {
    return response.json({message: 'Hello World 🇧🇷'})
})

app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port} 🤡 `);
})