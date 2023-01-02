import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/component/core/Layout'
import { useRouter } from 'next/router'
import Picture from '@/component/shared/Picture'
import UserDetailToolbar from './UserDetailToolbar'
import { ThumbsDownIcon, ThumbsUpIcon } from '@/component/shared/Icons'
import withAuth from 'hoc/withAuth'
import Button from '@/component/shared/Button'

function UserDetailComponent({
  detail,
  token
}) {
  const router = useRouter()
  return (
    <Layout>
      <section>
        <UserDetailToolbar
          router={router}
        />
        <div className={`mt-10 text-center ${typeof token !== 'undefined' ? 'mb-10' : 'mb-5'} `}>
          <Picture
            src={detail?.avatar}
            alt={`${detail?.first_name} ${detail?.last_name}`}
            size={250}
            className='block mx-auto'
          />
          <h1 className='font-display text-xl mt-10'>{`${detail?.first_name} ${detail?.last_name}`}</h1>
          <p className='font-display'>{detail?.email}</p>
        </div>
        <div className='flex justify-center gap-10 items-center'>
          {
            typeof token !== 'undefined' && (
              <>
                <div className='cursor-pointer'>
                  <ThumbsUpIcon />
                </div>
                <div className='cursor-pointer'>
                  <ThumbsDownIcon />
                </div>
              </>
            )
          }
          {
            typeof token === 'undefined' && (
              <div>
                <Button
                  title='Like / Dislike is protected : ('
                  className='mb-5'
                />
                <p className='font-display'>Note: to unlock this feature you need to login</p>
              </div>
            )
          }

        </div>
      </section>
    </Layout>
  )
}

UserDetailComponent.propTypes = {
  detail: PropTypes.object,
  token: PropTypes.string
}

export default withAuth(UserDetailComponent)