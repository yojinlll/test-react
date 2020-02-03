import classes from '../classes'

describe('classes', ()=>{
  it('接受 1 个 className', ()=>{
    const result = classes('test')
    expect(result).toEqual('test')
  })
  it('接受 2 个 className', ()=>{
    const result = classes('test1', 'test2')
    expect(result).toEqual('test1 test2')
  })
  it('可以忽略假值', ()=>{
    const result = classes('test1', undefined, '中文', false, null)
    expect(result).toEqual('test1 中文')
  })
  it('可以不传值', ()=>{
    const result = classes()
    expect(result).toEqual('')
  })
})