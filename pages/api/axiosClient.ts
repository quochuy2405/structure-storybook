import axios from 'axios'
const axiosClient = axios.create({
  baseURL: 'https://spring.ftisu.vn/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
export default axiosClient
