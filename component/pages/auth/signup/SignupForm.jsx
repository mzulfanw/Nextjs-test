import React from 'react'
import PropTypes from 'prop-types'
import Input from '@/component/shared/Input'

function SignupForm({
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
          placeholder='Masukan Email'
        />
      </div>
      <div className='mb-5'>
        <Input
          value={values.password}
          name='password'
          error={errors.password}
          onChange={onChange}
          label='Password'
          placeholder='Masukan Password'
          type='password'
        />
      </div>
    </div>
  )
}

SignupForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
}

export default SignupForm