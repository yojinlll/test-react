import React, { useState, Fragment } from 'react'
import Form from '../../../lib/form/form'
// import Validator from '../../../lib/form/validator'
import { Button } from '../../../lib/index'

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({
    username: '',
    password: ''
  })
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])
  const onSubmit = (e: React.FormEvent) => {
    console.log(formData);
    // const errors = Validator(formData, rules)
    // console.log(errors, 'error');
  }

  return (
    <div>
      <div>
        <p>username: {formData.username}</p>
        <p>password: {formData.password}</p>
      </div>
      <Form value={formData}
        fields={fields}
        onSubmit={onSubmit}
        onChange={(newData) => { setFormData(newData) }}
        buttons={
          <Fragment>
            <Button type="submit" level="primary">提交</Button>
            <Button>返回</Button>
          </Fragment>
        }
      />
    </div>
  )
}

export default FormExample