import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {

  const { onResetForm, username, email, password, onInputChange } = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const { username, email, password } = formState;

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
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        className="mt-2"
        value={password}
        onChange={onInputChange}
      />

      <button className="button is-primary mt-2" onClick={ onResetForm }>Borrar</button>
    </>
  )
}
