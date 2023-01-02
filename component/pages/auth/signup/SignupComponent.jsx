import React, { useState } from 'react'
import Layout from '@/component/core/Layout'
import SignupForm from './SignupForm'
import { useForm } from 'hooks'

function SignupComponent() {

  const [initialState, setInitialState] = useState({
    email: '',
    password: ''
  })

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('email' in fieldOfValues)
      temp.email = fieldOfValues.email ? '' : 'email tidak boleh kosong'

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

  return (
    <Layout>
      <section className='w-full md:max-w-lg block mx-auto'>
        <SignupForm
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
      </section>
    </Layout>
  )
}

export default SignupComponent