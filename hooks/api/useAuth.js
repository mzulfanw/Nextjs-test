import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import Router from 'next/router'
import * as api from '../../api/auth'

export const useAuthentication = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(api.authentication, {
    onSuccess: data => {
      setCookie('ftoken', data.token)
      Router.back()
    },
    onError: (error) => {
      console.log('error', error)
    },
    onSettled: () => {
      queryClient.invalidateQueries('login')
    }
  })

  return {
    mutate
  }
}

export const useRegister = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(api.register, {
    onSuccess: data => {
      console.log(data)
    },
    onError: (error) => {
      console.log('error', error)
    },
    onSettled: () => {
      queryClient.invalidateQueries('register')
    }
  })

  return {
    mutate
  }
}