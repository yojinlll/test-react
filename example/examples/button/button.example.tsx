import React from 'react'
import Button from '../../../lib/button/button'
import './button.example.scss'

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <div className="row">
        <Button>test</Button>
      </div>
      <div className="row">
        <Button level="primary">primary</Button>
      </div>
      <div className="row">
        <Button level="danger">danger</Button>
      </div>
    </div>
  )
}

export default ButtonExample