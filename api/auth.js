import { services } from '@/lib/interceptors'

export const authentication = async (payload) => {
  const { data } = await services.post(`/login`, payload)

  return data
}

export const register = async (payload) => {
  const { data } = await services.post(`/register`, payload)

  return data
}