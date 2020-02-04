import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('Icon', ()=>{
  it('render svg ', ()=>{
    const json = renderer.create(<Icon name='github'/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick ', ()=>{
    const fn = jest.fn()
    const component = mount(<Icon name='github' onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled
  })
})