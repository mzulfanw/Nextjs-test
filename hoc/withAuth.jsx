/* eslint-disable react/display-name */
import { getCookie } from 'cookies-next'
import React from 'react'

const withAuth = (WrappedComponent) => {
  return (props) => {
    const token = getCookie('ftoken')

    return <WrappedComponent {...props} token={token} />
  }
}

export default withAuth