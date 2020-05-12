import axios from 'axios'
import config from '../config'
// import { getToken, queryStringify } from '@/libs/utils'

class Http {
  constructor (baseUrl) {
    this.baseUrl = baseUrl || config.API_BASE_URL
  }

  request (options) {
    // const token = getToken()
    const instance = axios.create()
    // instance.defaults.withCredentials = true
    instance.defaults.baseURL = this.baseUrl
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      const url = config.url.split('/wp-json/wp/v2')
      config.url = url[url.length - 1]
      // console.log(url)
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res, 'resss')
      const totalPage = res.headers['x-wp-totalpages']
      if (totalPage) {
        let r = {}
        r.totalPage = totalPage
        r.list = res.data
        return r
      } else {
        return res.data
      }
    }, (error) => {
      return Promise.reject(error)
    })

    return instance(options)
  }

  /**
   * 根据返回数据进行错误处理
   */
  _errorHandel (res, status = 500) {
    let msg = res && res.message

    if (status >= 200 && status < 300) return
    if (status === 401 && !msg) msg = '您没有权限进行此操作'
    if (status === 404 && !msg) msg = '您访问的资源未找到'
    // if (status === -1) {
    //   location.href = './index.html#/login'
    //   return
    // }
  }
}

export default new Http()
