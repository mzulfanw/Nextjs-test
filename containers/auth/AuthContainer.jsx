/* eslint-disable indent */
import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import SigninComponent from '@/component/pages/auth/signin/SigninComponent'
import SignupComponent from '@/component/pages/auth/signup/SignupComponent'
import { useAuthentication, useRegister } from 'hooks/api/useAuth'

function AuthContainer({
  router
}) {
  useEffect(() => {
    if (!router.isReady) return
  }, [router])

  const { mutate: mutateAuth } = useAuthentication()

  const { mutate: mutateRegist } = useRegister()

  const renderContent = useCallback(() => {
    switch (router.query.path) {
      case 'sign-in':
        return <SigninComponent authentication={mutateAuth} />
      case 'sign-up':
        return <SignupComponent register={mutateRegist} />
      default:
        return null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])
  return (
    <>
      {renderContent()}
    </>
  )
}

AuthContainer.propTypes = {
  router: PropTypes.object
}

export default AuthContainer