import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button', ()=>{
  it('是个 div ', ()=>{
    const buttonJson = renderer.create(<Button/>).toJSON()
    console.log(buttonJson);
    expect(buttonJson).toMatchSnapshot()
  })
})