import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '@/component/core/Layout'
import SiginForm from './SiginForm'
import { useForm } from 'hooks'
import Button from '@/component/shared/Button'
import { formatEmail } from '@/lib/helper'

function SigninComponent({
  authentication = () => { }
}) {
  // eslint-disable-next-line no-unused-vars
  const [initialState, setInitialState] = useState({
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
        <div className='mb-5'>
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