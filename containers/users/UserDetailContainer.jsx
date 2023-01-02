import React from 'react'
import { useDetailUser } from 'hooks/api/useUser'
import { useRouter } from 'next/router'
import UserDetailComponent from '@/component/pages/users/detail/UserDetailComponent'

function UserDetailContainer() {
  const { query: { id } } = useRouter()
  const { data, isLoading } = useDetailUser(id)

  if (isLoading) return <p>Loading...</p>
  return (
    <UserDetailComponent
      detail={data?.data}
    />
  )
}

export default UserDetailContainer