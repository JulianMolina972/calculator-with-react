import React from 'react'
import '../styles/Button.css'

export const Button = (props) => {

  const isOperator = () => {
    return  props.children === '+' || 
            props.children === '-' || 
            props.children === '*' || 
            props.children === '/'
  }

  return (
    <button 
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  )
}
