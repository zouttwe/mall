import axios from 'axios'

export function request(config){
    // 1.创建一个axios的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    // 2.axios的拦截器
    axios.interceptors.request.use(config=>{
        return config
    },err=>{
        // console.log(err)
    });

    // 响应response
    axios.interceptors.response.use(res=>{
        console.log(res)
    },err=>{
        console.log(err)
    });

    // 3.发送真正的网络请求
    return instance(config)
}