import React, { useState } from 'react'

const defaultFormValues = {
  name: { value: '', error: '' },
  age: { value: '', error: '' },
  mobile: { value: '', error: '' },
  email: { value: '', error: '' },
}

export const Form = () => {
  const [formState, setFormState] = useState(defaultFormValues)

  const changeHandler = (fieldName: string, value: string) => {
    setFormState((prev) => ({ ...prev, [fieldName]: { value, error: '' } }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const hasSomeError = checkValidations()
    console.log(hasSomeError, 'some error')
    if (hasSomeError) {
      console.log('it has some errors')
    } else {
      console.log('ready to submit')
    }
  }

  const checkValidations = () => {
    if (!formState.name.value) {
      setFormState((prev) => ({
        ...prev,
        ['name']: { ...formState.name, error: 'Name is required' },
      }))
    }

    if (!formState.age.value) {
      setFormState((prev) => ({
        ...prev,
        ['age']: { ...formState.age, error: 'Age is required' },
      }))
    }

    if (!formState.email.value) {
      setFormState((prev) => ({
        ...prev,
        ['email']: { ...formState.email, error: 'Email is required' },
      }))
    }

    if (!formState.mobile.value) {
      setFormState((prev) => ({
        ...prev,
        ['mobile']: { ...formState.mobile, error: 'Mobile is required' },
      }))
    }

    const hasError = Object.keys(formState).some(
      (field) => !formState[field].value
    )
    return hasError
  }

  console.log(formState, 'state')

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <input
          value={formState['name'].value}
          name='name'
          type='text'
          onChange={({ target: { name, value } }) => changeHandler(name, value)}
        />
        {formState['name'].error && <p>{formState['name'].error}</p>}
        <input
          value={formState['age'].value}
          name='age'
          type='number'
          onChange={({ target: { name, value } }) => changeHandler(name, value)}
        />
        {formState['age'].error && <p>{formState['age'].error}</p>}
        <input
          value={formState['mobile'].value}
          name='mobile'
          type='number'
          onChange={({ target: { name, value } }) => changeHandler(name, value)}
        />
        {formState['mobile'].error && <p>{formState['mobile'].error}</p>}
        <input
          value={formState['email'].value}
          name='email'
          type='email'
          onChange={({ target: { name, value } }) => changeHandler(name, value)}
        />
        {formState['email'].error && <p>{formState['email'].error}</p>}
        <button>Submit</button>
      </form>
    </div>
  )
}
