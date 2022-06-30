import React, { useContext } from 'react'
import { UserContext } from './context/UseContext'

export const HomePage = () => {

const { user } = useContext(UserContext);

const { name, email } = user;
  return (
    <>
    <br />
      <h1>Home Page</h1>


     <p>name: {name}</p>
     <p>email: {email}</p>
    </>
  )
}
