import axios from 'axios'

export const services = axios.create({
  baseURL: 'https://reqres.in/api'
})

// /**
//  * Interceptors
//  */
// services.interceptors.response.use(function (res) {
//   return res
// }, function (error) {
//   console.log(error)
//   return Promise.reject(error)
// })

// export const getServices = (url, params) => {
//   return services.get(`${url}`, { params })
// }