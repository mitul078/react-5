import axios from 'axios'
const instance = axios.create({
    baseURL : 'https://backend-1vk9.onrender.com/'
})

export default instance;