import { QueryClient, dehydrate } from '@tanstack/react-query'
import { getUsers } from '../../api/user'
import { withCsr } from 'hoc/withCsr'
import PropTypes from 'prop-types'
import React from 'react'
import UsersContainer from '@/containers/users/UsersContainer'

function index({
  isError
}) {
  if (isError) return <p>Error</p>
  return <UsersContainer />
}

export const getServerSideProps = withCsr(async (ctx) => {
  const { page } = ctx.query
  const queryClient = new QueryClient()

  let isError = false

  try {
    await queryClient.fetchQuery(['user', page], () => getUsers(page))
  } catch (err) {
    isError = true
    // ctx.res.statusCode = err.response.status
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient)
    }
  }
})

index.propTypes = {
  isError: PropTypes.any
}

export default index