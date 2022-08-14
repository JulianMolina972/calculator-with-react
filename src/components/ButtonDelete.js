import React from 'react'

export const ButtonDelete = (props) => {
  return (
    <div 
      className='button-container'
      onClick={() => props.handleDelete(props.children)}
    >
      {props.children}
    </div>
  )
}
