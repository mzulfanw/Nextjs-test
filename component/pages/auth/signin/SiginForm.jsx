import React from 'react'
import PropTypes from 'prop-types'
import Input from '@/component/shared/Input'

function SiginForm({
  values,
  errors,
  onChange = () => { }
}) {
  return (
    <div className='flex flex-col'>
      <div className='mb-5'>
        <Input
          value={values.email}
          name='email'
          error={errors.email}
          onChange={onChange}
          label='Email'
          placeholder='Enter Email'
        />
      </div>
      <div className='mb-5'>
        <Input
          value={values.password}
          name='password'
          error={errors.password}
          onChange={onChange}
          label='Password'
          placeholder='Enter Password'
          type='password'
        />
      </div>
    </div>
  )
}

SiginForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
}

export default SiginForm