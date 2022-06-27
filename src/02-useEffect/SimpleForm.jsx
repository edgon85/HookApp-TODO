import { useEffect, useState } from "react"


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'asoka',
    email: 'asokatano@starwars.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    })
  };



  useEffect(() => {
    console.log('form change')


  }, [formState]);

  useEffect(() => {
    console.log('email change')


  }, [email]);


  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        placeholder="username"
        name="username"
        className="mt-2"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        placeholder="example@email.com"
        name="email"
        className="mt-2"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}
