import React from 'react'
import UserComponent from '@/component/pages/users/UserComponent'
import { useUser } from 'hooks/api/useUser'
import { useRouter } from 'next/router'

function UsersContainer() {
  const { query: { page } } = useRouter()
  const { data, isLoading } = useUser(page)

  if (isLoading) return <p>Loading....</p>

  return (
    <UserComponent
      data={data}
      pageActive={page}
    />
  )
}

export default UsersContainer