import React from 'react'
import PropTypes from 'prop-types'

/**
 * Button Props 
 *  
 * @param {string} title  
 * @param {string} className
 * @param {string} type 
 * @param {void} onClick
 */

function Button({
  title,
  className,
  type = 'button',
  onClick = () => { }
}) {
  return (
    <button
      className={`px-5 py-2 bg-slate-800 rounded-md hover:border-b-lime-300 hover:border-r-lime-300 hover:border-b-2 hover:border-r-2 hover:text-white text-white font-display ${className} w-full`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button >
  )
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button