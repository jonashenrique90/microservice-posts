import axios from 'axios'

const apiPosts = axios.create({
    baseURL: 'http://localhost:4001'
})

export default apiPosts