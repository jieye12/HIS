//进行axios的二次封装；使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from "element-plus"
//
// import useUserStore from '@/store/modules/user'
let request = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: {
        "username": localStorage.getItem("username"),
        "userId": localStorage.getItem("userId"),
        "token": localStorage.getItem("cookie")
    }
})
request.interceptors.request.use((config) => {
    // let useStore = useUserStore()
    // if (useStore.token) {
    //     config.headers.token = useStore.token
    // }
    return config
})
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    let message = ''
    let status = error.response.status
    switch (status) {
        case 401:
            message = "TOKEN过期"
            break
        case 403:
            message = "无权访问"
            break
        case 404:
            message = "请求地址错误"
            break
        case 500:
            message = "服务器出现了问题"
            break
        default:
            message = "网络出现了问题"
            break
    }
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})
export default request