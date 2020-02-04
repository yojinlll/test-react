import React from 'react'
import ReactDOM from 'react-dom'
import IconExample from './examples/icon.example'
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// const fn:React.MouseEventHandler = (e)=>{
//   console.log('fn', e.target);
// }

// ReactDOM.render(<div>
//   <Icon name='github' onClick={fn} className='hi' />
// </div>, document.getElementById('root'))

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          miro-react
        </div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path='/icon' component={IconExample} />
        </main>
      </div>
    </div>
  </Router>
, document.getElementById('root'))