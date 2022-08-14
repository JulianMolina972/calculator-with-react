import React from 'react'
import '../styles/ButtonClear.css'

export const ButtonClear = (props) => {
  return (
    <button className='button-clear' onClick={props.handleClear}>
      {props.children}
    </button>
  )
}
