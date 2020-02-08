import React, { useState } from 'react'
import Dialog from '../../../lib/dialog/dialog'

const DialogExample: React.FunctionComponent = () => {
  const [test1, setTest1] = useState(false)
  const [test2, setTest2] = useState(false)

  return (
    <div>
      <div>
        <button onClick={() => { setTest1(!test1) }}>click</button>
        <Dialog visible={test1} onHide={()=>{setTest1(false)}} title="tips" className="test">
          example1: 设置 visibel ， onHide， title， className
        </Dialog>
      </div>
      <div>
        <button onClick={() => { setTest2(!test2) }}>click</button>
        <Dialog visible={test2} onHide={()=>{setTest2(false)}} title="tips" className="test"
                onClose={()=>console.log('close 回调')}
                onOpen={()=>console.log('open 回调')}
        >
          example2: 可传 open 回调 和 close 回调 
        </Dialog>
      </div>
    </div>
  )
}

export default DialogExample