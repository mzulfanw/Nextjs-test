import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '@/component/core/Layout'
import SiginForm from './SiginForm'
import { useForm } from 'hooks'
import Button from '@/component/shared/Button'
import { formatEmail } from '@/lib/helper'
import Link from 'next/link'

function SigninComponent({
  authentication = () => { }
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

    if (validate()) {
      authentication(payload)
    }
  }

  return (
    <Layout>
      <section className='w-full md:max-w-lg block mx-auto'>
        <SiginForm
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
        <div className='text-center hover:text-sky-600'>
          <Link
            href='/auth/sign-up'
            shallow
            className='border-b-2 border-black'
          >
            {`Don't have an account? you can make it here`}
          </Link>
        </div>
        <div className='mt-5'>
          <Button
            title='Login'
            onClick={onSubmit}
          />
        </div>
      </section>
    </Layout>
  )
}

SigninComponent.propTypes = {
  authentication: PropTypes.func
}

export default SigninComponent