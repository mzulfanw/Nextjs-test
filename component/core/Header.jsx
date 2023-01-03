import React, { useState } from 'react'
import { navigation } from '@/lib/navigation'
import { HamburgerIcon, CloseIcon } from '../shared/Icons'
import { useRouter } from 'next/router'
import withAuth from 'hoc/withAuth'
import PropTypes from 'prop-types'
import { useDestroySession } from 'hooks/api/useAuth'

function Header({
  token
}) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  let currentRoute = router.asPath
  const { mutate } = useDestroySession()

  const handleChangeRouter = (item) => {
    if (item.type === 'func') {
      mutate()
    } else {
      router.push(item.route, null, { shallow: true })
    }
  }

  return (
    <header className='fixed top-0 px-10 py-5 bg-white/30 backdrop-blur-md w-full z-50'>
      <nav className='flex justify-between'>
        <h1 className='font-display text-2xl basis-1/5'>Freelance.</h1>
        <ul className='flex items-center justify-between md:basis-1/4'>
          {
            navigation?.filter(item => item.requireAuth === false && typeof token === 'undefined').map((item, index) => (
              <div
                className='hidden md:block cursor-pointer'
                key={index}
                onClick={() => { handleChangeRouter(item) }}
              >
                <li
                  className={`font-display ${currentRoute === item.route ? 'border-b-2 border-black' : ''}`}
                >
                  {item.name}
                </li>
              </div>
            ))
          }
          {
            navigation?.filter(item => item.requireAuth === true && typeof token !== 'undefined').map((item, index) => (
              <div
                className='hidden md:block cursor-pointer'
                key={index}
                onClick={() => { handleChangeRouter(item) }}
              >
                <li
                  className={`font-display ${currentRoute === item.route ? 'border-b-2 border-black' : ''}`}
                >
                  {item.name}
                </li>
              </div>
            ))
          }
          <div
            className='block md:hidden cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            {
              isOpen ? (
                <CloseIcon />
              ) : (
                <HamburgerIcon />
              )
            }
          </div>
        </ul>
      </nav>
      {
        isOpen && (
          <div className='flex-col justify-between items-center'>
            {
              navigation?.filter(item => item.requireAuth === false && typeof token === 'undefined').map((item, index) => (
                <div
                  className='my-5 cursor-pointer'
                  key={index}
                  onClick={() => { handleChangeRouter(item) }}
                >
                  <li
                    className={`font-display list-none text-center text-xl ${currentRoute === item.route ? 'border-b-2 border-black' : ''}`}
                  >
                    {item.name}
                  </li>
                </div>
              ))
            }
            {
              navigation?.filter(item => item.requireAuth === true && typeof token !== 'undefined').map((item, index) => (
                <div
                  className='my-5 cursor-pointer'
                  key={index}
                  onClick={() => { handleChangeRouter(item) }}
                >
                  <li
                    className={`font-display list-none text-center text-xl ${currentRoute === item.route ? 'border-b-2 border-black' : ''}`}
                  >
                    {item.name}
                  </li>
                </div>
              ))
            }
          </div>
        )
      }
    </header>
  )
}

Header.propTypes = {
  token: PropTypes.string
}

export default withAuth(Header)