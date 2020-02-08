import React, { ReactElement } from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Form: React.FunctionComponent<Props> = (props) => {

  const hasAside: () => void | string = () => {
    if ((props.children as Array<ReactElement>).length) {
      console.log(props.children);
      const hasAside = (props.children as Array<ReactElement>).reduce((result, node) => {
        return result || node.type === "span"
      }, false)

      return hasAside ? "hasAside" : undefined
    }
    return 
  }

  return (
    <div>
      <h1 style={{ border: "1px solid red" }} className={`layout ${hasAside()}`}>
        {props.children}
      </h1>
    </div>
  )
}

export default Form