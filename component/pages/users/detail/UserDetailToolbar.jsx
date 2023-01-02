import { BackIcon } from '@/component/shared/Icons'
import React from 'react'
import PropTypes from 'prop-types'

function UserDetailToolbar({
  router
}) {
  return (
    <div className='inline-flex gap-5 cursor-pointer' onClick={() => { router.back() }}>
      <BackIcon />
      <span
        className='font-display'
      >
        Back to Users
      </span>
    </div>
  )
}

UserDetailToolbar.propTypes = {
  router: PropTypes.object
}

export default UserDetailToolbar