import axios from 'axios'

const instance = axios.create({
  baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
  timeout:1000,  //超时
  headers:{

  }
})

export default instance  //axios官网可以了解更多 
