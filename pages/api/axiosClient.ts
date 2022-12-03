import axios from 'axios'
const axiosClient = axios.create({
  baseURL: 'https://6382adbd1ada9475c8f1636c.mockapi.io',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default axiosClient
