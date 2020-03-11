import React, { HtmlHTMLAttributes, UIEventHandler, useState, useEffect, useRef } from 'react'
import './scroll.scss'
import scrollbarWidth from './scrollbar-width';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  always?: Boolean
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, always, ...reset } = props
  const [barHeight, setBarHeight] = useState(0)
  const [barTop, setBarTop] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const onscroll:UIEventHandler = (e)=>{
    const { current } = containerRef
    const scrollHeight = current!.scrollHeight
    const viewHeight = current!.getBoundingClientRect().height
    const scrollTop = current!.scrollTop
    setBarTop( scrollTop * viewHeight / scrollHeight )
    setOpacity( scrollTop ? 1 : 0 )
  }

  const containerRef = useRef<HTMLDivElement>(null)

  // 生命周期
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    setBarHeight( viewHeight * viewHeight / scrollHeight )
  }, [])

  return (
    <div className='miro-scroll' {...reset}>
      <div
        ref={ containerRef }
        className='miro-scroll-inner'
        style={{ right: -scrollbarWidth() }}
        onScroll={onscroll}>
        { children }
      </div>
      <div
        className="miro-scroll-track"
        style={{
          opacity: always ? 1 : opacity,
        }}
      >
        <div className="miro-scroll-bar" style={{ height: barHeight, transform: `translateY(${barTop}px)` }} />
      </div>
    </div>
  )
}

Scroll.defaultProps = {
  always: true
}

export default Scroll