import React from 'react'
import classes from '../helpers/classes'
import Input from '../input/input'
import './form.scss'


interface Props extends React.HTMLAttributes<HTMLElement> {
  value: { [key: string]: any },
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: React.ReactFragment,
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: Props["value"]) => void
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value
  const className = props.className
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit(e)
  }
  const onInputChaneg = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData, [name]: event.target.value }
    props.onChange(newFormData)
  }

  return (
    <form onSubmit={onSubmit} className={classes('miro-form', className)}>
      <table className="miro-form-table">
        <tbody>
          {
            props.fields.map((item, index) => {
              return (
                <tr key={index} className="miro-form-tr">
                  <td className="miro-form-td">
                    <span className="miro-form-label">
                      {item.label}
                    </span>
                  </td>
                  <td className="miro-form-td">
                    <Input
                      type={item.input.type}
                      value={formData[item.name]}
                      // onChange={e => onInputChaneg(item.name, e.target.value)}
                      onChange={onInputChaneg.bind(null, item.name)}
                    />
                  </td>
                </tr>
              )
            })
          }
          <tr className="miro-form-tr">
            <td className="miro-form-td"/>
            <td className="miro-form-td">
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {props.buttons}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default Form