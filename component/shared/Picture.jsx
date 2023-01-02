import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

function Picture({
  src,
  alt,
  size = 500,
  className,
  ...otherProps
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      {...otherProps}
    />
  )
}

Picture.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string
}

export default Picture