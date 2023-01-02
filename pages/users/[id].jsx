import UserDetailContainer from '@/containers/users/UserDetailContainer'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { getDetailUser } from 'api/user'
import { withCsr } from 'hoc/withCsr'
import React from 'react'

function index({
  isError
}) {
  if (isError) return <p>Error</p>
  return <UserDetailContainer />
}

export const getServerSideProps = withCsr(async (ctx) => {
  const { id } = ctx.params
  const queryClient = new QueryClient()

  let isError = false

  try {
    await queryClient.fetchQuery(['user', id], () => getDetailUser(id))
  } catch (error) {
    isError = true
    ctx.res.statusCode = error.response.status
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient)
    }
  }
})

export default index