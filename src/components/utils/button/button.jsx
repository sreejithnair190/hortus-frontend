import React from 'react'
import './button.css';

const Button = ({label, ...buttonProps}) => {
  return (
    <button {...buttonProps}>{label}</button>
  )
}

export default Button;