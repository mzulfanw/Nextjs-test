/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Layout from '@/component/core/Layout'
import Picture from '@/component/shared/Picture'
import Button from '@/component/shared/Button'
import withAuth from 'hoc/withAuth'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

function HomeComponent({
  token
}) {
  const router = useRouter()

  const handleRouteChange = (path) => {
    router.push(path, null, { shallow: true })
  }
  return (
    <Layout>
      <section
        className='flex flex-col justify-between items-center md:flex-row '>
        <div
          className='basis-1/2 px-10 py-10'>
          <h1
            className='font-display text-6xl'>We're hiring partner for freelancer
          </h1>
          <p className='font-display text-xl my-10'>Make yourself a priority. Fill yourself up so that you can give more to others.
            <br />
            — Oprah Winfrey
          </p>
          <div className='flex gap-x-5'>
            {
              typeof token === 'undefined' && (
                <Button
                  title='Sign in'
                  className='mt-5 w-full md:w-1/3'
                  onClick={() => { handleRouteChange('/auth/sign-in') }}
                />
              )
            }
            {
              typeof token !== 'undefined' && (
                <Button
                  title='View User'
                  className='mt-5 w-full md:w-1/3'
                  onClick={() => { handleRouteChange('/users?page=1&per_page=4') }}
                />
              )
            }
          </div>
        </div>
        <div className='basis-1/2 px-10 py-10 bg-lime-200 border-l-2 border-l-black border-b-2 border-b-black'>
          <Picture
            src='/assets/image/hero-image.jpg'
            alt='hero-image'
            size={350}
            priority
            className='object-cover border-r-2 border-lime-800 border-b-2 block mx-auto'
          />
        </div>
      </section>
    </Layout >
  )
}

HomeComponent.propTypes = {
  token: PropTypes.string
}

export default withAuth(HomeComponent)