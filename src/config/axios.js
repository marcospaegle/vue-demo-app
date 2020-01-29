import axios from 'axios'

const instance = axios.create()
instance.defaults.baseURL = process.env.API_URL

export default instance
