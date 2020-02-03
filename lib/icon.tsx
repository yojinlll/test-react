import React from 'react'
import './importIcons'
import './icons.scss'

interface IconProps{
  name?: string;
}

const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return (
    <svg className='miro-icons'>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon