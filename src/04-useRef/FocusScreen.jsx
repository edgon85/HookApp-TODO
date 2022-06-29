import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();


  const handleClick = () => {
      inputRef.current.select();
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={ inputRef }
        type="text"
        placeholder='Ingrese su nombre'
      />

      <button
        className='button is-primary mt-2'
        onClick={ handleClick }
        >Focus</button>
    </>
  )
}
