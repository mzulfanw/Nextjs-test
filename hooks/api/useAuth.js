import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCookie, setCookie } from 'cookies-next'
import Router from 'next/router'
import { toast } from 'react-hot-toast'
import * as api from '../../api/auth'

export const useAuthentication = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(api.authentication, {
    onSuccess: data => {
      setCookie('ftoken', data.token)
      Router.back()
      toast.success('Successfully login', {
        duration: 4000
      })
    },
    onError: (error) => {
      toast.error(`${error.response.data.error}`, {
        duration: 4000
      })
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
      setCookie('ftoken', data.token)
      Router.back()
      toast.success('Successfully register', {
        duration: 4000
      })
    },
    onError: (error) => {
      toast.error(`${error.response.data.error}`, {
        duration: 4000
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries('register')
    }
  })

  return {
    mutate
  }
}

export const useDestroySession = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(api.logout, {
    onSuccess: () => {
      deleteCookie('ftoken')
      toast.success('Successfully Logout', {
        duration: 4000
      })
      deleteCookie('like')
      Router.reload()
    },
    onError: (error) => {
      console.log(error, 'error')
    },
    onSettled: () => {
      queryClient.invalidateQueries('logout')
    }
  })

  return {
    mutate
  }
}