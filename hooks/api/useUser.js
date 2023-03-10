import { useQuery } from '@tanstack/react-query'

import * as api from '../../api/user'

export const useUser = (page) => {
  return useQuery(['user', page], () => api.getUsers(page), { refetchOnMount: 'always' })
}

export const useDetailUser = (id) => {
  return useQuery(['user', id], () => api.getDetailUser(id), { refetchOnMount: 'always' })
}