import { services } from '@/lib/interceptors'

export const getUsers = async page => {
  const { data } = await services.get(`/users?page=${page}&per_page=${4}`)
  return data
}

export const getDetailUser = async id => {
  const { data } = await services.get(`/users/${id}`)
  return data
}