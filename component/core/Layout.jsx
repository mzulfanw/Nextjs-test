import React, { Fragment } from 'react'
import Header from './Header'
import PropTypes from 'prop-types'
import Footer from './Footer'

function Layout({
  children
}) {
  return (
    <Fragment>
      <Header />
      <main className='mb-10 mt-28 px-10 py-10'>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout