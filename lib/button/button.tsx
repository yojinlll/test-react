import React, { ButtonHTMLAttributes } from 'react'
import classes from '../helpers/classes'
import './button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  level?: 'default' | 'primary' | 'danger'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, ...resetProps } = props
  return (
    <button
      className={
        classes(
          'miro-button',
          `miro-button--${level}`,
          className
        )
      }
      {...resetProps}
    >
      { children }
    </button>
  )
}

Button.defaultProps = {
  level: 'default'
}

export default Button