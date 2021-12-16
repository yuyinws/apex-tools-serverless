const axios = require('axios')
const { domain } = require('./config')

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err.response)
  }
)

const _axios = (method, url, params) => {
  method = method.toUpperCase()
  let options = {
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
