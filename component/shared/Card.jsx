import React from 'react'
import PropTypes from 'prop-types'
import Picture from './Picture'

function Card({
  name,
  path
}) {
  return (
    <div
      className='border-black border-4 hover:border-lime-700 px-10 py-5 rounded-tl-3xl rounded-br-3xl'
    >
      <div className='block mx-auto'>
        <Picture
          alt={name}
          src={path}
          priority
          size={120}
          className='object-cover block mx-auto mb-5'
        />
        <p className='font-display text-center'>{name}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string
}

export default Card