import axios from 'axios'
import { domain } from './config'

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err.response)
  }
)

const _axios = (method: string, url: string, params: any) => {
  method = method.toUpperCase()
  interface Options {
    method: any
    url: string
    data?: any
    params?: any
  }
  let options: Options = {
    method: method,
    url: domain + url,
  }
  if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
    if (params) {
      options.data = params
    }
  }

  if (method === 'GET' || method === 'DELETE') {
    if (params) {
      options.params = params
    }
  }
  
  return axios(options).then(
    (res) => {
      return res
    },
    (error) => {
      return error
    }
  )
}

export { _axios }
