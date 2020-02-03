import React from 'react'
import './importIcons'
import './icons.scss'
import classes from './helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...resetProps } = props
  return (
    <svg className={classes('miro-icon', className)} {...resetProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon