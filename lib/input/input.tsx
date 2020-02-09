import React, { InputHTMLAttributes } from 'react'
import classes from '../helpers/classes'
import './input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...resetProps } = props
  
  return (
    <input className={classes('miro-input', className)} {...resetProps}/>
  )
}

export default Input