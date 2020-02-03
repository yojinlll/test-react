import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

const fn:React.MouseEventHandler = (e)=>{
  console.log('fn', e.target);
}

ReactDOM.render(<div>
  <Icon name='github' onClick={fn} className='hi' />
</div>, document.getElementById('root'))