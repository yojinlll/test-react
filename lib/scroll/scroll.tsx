import React, { HtmlHTMLAttributes } from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbar-width';

interface Props extends HtmlHTMLAttributes<HTMLElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...reset } = props
  return (
    <div className='miro-scroll' {...reset}>
      <div className='miro-scroll-inner' style={{ right: -scrollbarWidth() }}>
        { children }
      </div>
    </div>
  )
}

export default Scroll