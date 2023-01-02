import React, { useState } from 'react'
import Layout from '@/component/core/Layout'
import SignupForm from './SignupForm'
import { useForm } from 'hooks'
import PropTypes from 'prop-types'
import Button from '@/component/shared/Button'
import { formatEmail } from '@/lib/helper'

function SignupComponent({
  register = () => { }
}) {
  const [initialState] = useState({
    email: '',
    password: ''
  })

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('email' in fieldOfValues)
      temp.email = fieldOfValues.email
        ? (
          formatEmail(fieldOfValues.email)
            ? ''
            : 'Format email tidak sesuai, xxxx@gmail.com'
        )
        : 'email tidak boleh kosong'

    if ('password' in fieldOfValues)
      temp.password = fieldOfValues.password ? '' : 'Password tidak boleh kosong'

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialState, true, validate)

  const onSubmit = () => {
    const payload = {
      email: values.email,
      password: values.password
    }
    register(payload)
  }

  return (
    <Layout>
      <section className='w-full md:max-w-lg block mx-auto'>
        <SignupForm
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
        <div className='mb-5'>
          <Button
            title='Register'
            onClick={onSubmit}
          />
        </div>
      </section>
    </Layout>
  )
}

SignupComponent.propTypes = {
  register: PropTypes.func
}

export default SignupComponent