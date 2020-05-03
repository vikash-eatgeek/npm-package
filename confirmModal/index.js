import React from 'react'

import './styles.css'

const ConfirmModal = (props) => {
  const {
    text='',
    backgroundClass='',
    className='',
    titleClass='',
    closeClass='',
    closeText='',
    okClass='',
    okText='',
    onCancel,
    onOk,
  } = props

  return (
    <div className={`react-confirm-modal ${backgroundClass}}`}>
      <div className={className ? className : 'container'}>
        <div className={titleClass ? titleClass : 'title'}>
          { text }
        </div>
        <div className='footer'>
          <div className={closeClass ? closeClass : 'cancel'} onClick={onCancel}>
            { closeText ? closeText : 'CANCEL' }
          </div>
          <div className={okClass ? okClass : 'ok'} onClick={onOk}>
            { okText ? okText : 'OK' }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
