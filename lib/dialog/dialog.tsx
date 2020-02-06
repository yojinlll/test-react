import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from '../helpers/classes'
import './dialog.scss'

interface Props {
  visible: boolean;
  title?: string | number;
  className?: string;
  onHide: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

// 自定义功能，待实现
// interface DialogChildren extends React.FunctionComponent<Props> {
//   header: React.FunctionComponent;
//   main: React.FunctionComponent;
//   footer: React.FunctionComponent;
// }


const Dialog: React.FunctionComponent<Props> = (props) => {

  // onOpenCallback
  const onOpenCallback = () => {
    if (props.visible && props.onOpen) {
      props.onOpen()
    }
  }
  onOpenCallback()

  const onCloseCallback = () => {
    props.onHide()
    props.onClose && props.onClose()
  }

  const dialog = props.visible &&
    <Fragment>
      <div className="miro-dialog-mask"></div>

      <div className={classes('miro-dialog', props.className)}>

        {
          props.title ?
            <div className="miro-dialog-header">{props.title}</div> :
            null
        }

        <div className="miro-dialog-main">
          {props.children}
        </div>

        <div className="miro-dialog-footer">
          <button className="miro-button" onClick={onCloseCallback}>cancel</button>
          <button className="miro-button" onClick={onCloseCallback}>ok</button>
        </div>
      </div>
    </Fragment>

  return (
    ReactDOM.createPortal(dialog, document.body)
  )
}

// 自定义功能，待实现
// const DialogHeader: React.FunctionComponent<Props> = (props) => {
//   return (
//     <div>{props.children}</div>
//   )
// }
// const DialogMain: React.FunctionComponent<Props> = (props) => {
//   return (
//     <div>{props.children}</div>
//   )
// }
// const DialogFooter: React.FunctionComponent<Props> = (props) => {
//   return (
//     <div>{props.children}</div>
//   )
// }

// Dialog.header = DialogHeader
// Dialog.main = DialogMain
// Dialog.footer = DialogFooter

export default Dialog