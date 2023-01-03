import React from 'react'
import PropTypes from 'prop-types'
import Picture from './Picture'

function Card({
  name,
  path,
  id,
  onClickPath = () => { }
}) {
  return (
    <div
      className='px-10 py-5 rounded-md border-2 border-gray-500 transition hover:transition-all ease-in-out hover:-translate-y-1 hover:scale-110'
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
        <p
          className='font-display text-center hover:text-lime-700'
          onClick={() => { onClickPath(id) }}
        >
          See more detail
        </p>
      </div>
    </div >
  )
}

Card.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  id: PropTypes.number,
  onClickPath: PropTypes.func
}

export default Card