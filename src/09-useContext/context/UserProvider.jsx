
import { UserContext } from './UseContext'

export const UserProvider = ({ children }) => {

  const user = {
    id: '123',
    name: 'obi one',
    email: 'obi@starwars.com',
  }
  return (
    <UserContext.Provider value={ {user: user} }>
      { children }
    </UserContext.Provider>
  )
}
