import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 添加请求头等前置处理
    // config.headers['Authorization'] = 'Bearer' + ' ' + localStorage.getItem('token')
    return config
  },
  error => {
    // 请求错误处理
    console.log('Request Error:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 响应后处理
    if (response.status === 200 && response.data.code === 200) {
      return Promise.resolve(response.data.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    console.log('Response Error:', error)
    return Promise.reject(error)
  }
)

export default request
