import React from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import AuthContainer from '@/containers/auth/AuthContainer'

function index({
  router
}) {
  return (
    <AuthContainer
      router={router}
    />
  )
}

index.propTypes = {
  router: PropTypes.object
}

export default withRouter(index)