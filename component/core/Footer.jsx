import React from 'react'

function Footer() {
  return (
    <footer
      className='text-center font-display text-lg absolute left-0 right-0 bottom-0'
    >Next JS Test - {new Date().getFullYear()}</footer>
  )
}

export default Footer