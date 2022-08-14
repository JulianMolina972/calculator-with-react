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
    <div 
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
    >
      {props.children}
    </div>
  )
}
