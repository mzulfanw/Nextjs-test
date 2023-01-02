import React from 'react'
import PropTypes from 'prop-types'

function Input({
  value,
  error,
  label,
  name,
  onChange = () => { },
  ...otherProps
}) {
  return (
    <>
      <span className='block font-display text-lg mb-2'>{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`px-2 py-2 border-2 ${error ? 'border-red-700' : 'border-gray-700'} focus:outline-none w-full rounded-md font-display mb-2`}
        {...otherProps}
      />
      {
        error && (
          <span className='font-display text-red-700'>{error}</span>
        )
      }
    </>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  error: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Input