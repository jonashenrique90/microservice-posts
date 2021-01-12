import axios from 'axios'

const apiComments = axios.create({
    baseURL: 'http://localhost:4002'
})

export default apiComments