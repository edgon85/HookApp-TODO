import { useContext } from "react"
import { UserContext } from "./context/UseContext"


export const LoginPage = () => {

  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <pre>
        {
          JSON.stringify(user, null, 2)
        }
      </pre>

    </>
  )
}
