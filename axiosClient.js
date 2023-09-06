import axios from 'axios'

const axiosClient = axios.create({
  baseURL: "https://to-do-api-9d3q.onrender.com",
});


export default axiosClient;