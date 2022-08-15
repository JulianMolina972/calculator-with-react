import React from 'react'
import '../styles/ButtonClear.css'

export const ButtonClear = (props) => {
  console.log(props)
  return (
    <button 
      className='button-clear' onClick={props.handleClear}
    >
      {props.children}
    </button>
  )
}
