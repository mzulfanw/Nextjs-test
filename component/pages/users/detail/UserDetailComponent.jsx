import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/component/core/Layout'
import { BackIcon } from '@/component/shared/Icons'
import { useRouter } from 'next/router'
import Picture from '@/component/shared/Picture'

function UserDetailComponent({
  detail
}) {
  console.log(detail)

  const router = useRouter()

  return (
    <Layout>
      <section>
        <div className='inline-flex gap-5' onClick={() => { router.back() }}>
          <BackIcon />
          <span
            className='font-display'
          >
            Back to Users
          </span>
        </div>
        <div className='mt-10 text-center'>
          <Picture
            src={detail?.avatar}
            alt={`${detail?.first_name} ${detail?.last_name}`}
            size={250}
            className='block mx-auto'
          />
          <h1 className='font-display text-xl mt-10'>{`${detail?.first_name} ${detail?.last_name}`}</h1>
          <p className='font-display'>{detail?.email}</p>
        </div>
      </section>
    </Layout>
  )
}

UserDetailComponent.propTypes = {
  detail: PropTypes.object
}

export default UserDetailComponent