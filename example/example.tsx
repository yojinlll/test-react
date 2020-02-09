import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import IconExample from './examples/icon.example'
import DialogExample from './examples/dialog/dialog.example'
import FormExample from './examples/form/form.example'
import InputExample from './examples/input/input.example'

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
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/input">Input</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path='/icon' component={IconExample} />
          <Route path='/dialog' component={DialogExample} />
          <Route path='/form' component={FormExample} />
          <Route path='/input' component={InputExample} />
        </main>
      </div>
    </div>
  </Router>
, document.getElementById('root'))