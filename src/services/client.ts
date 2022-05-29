import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

client.interceptors.request.use(
  (request) => {
    // Req interceptors
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
