import React from 'react'

const Toast = ({showToast, message, icon}) => {
    if(showToast == false) return null
  return (
    <div className='toast'>
      <div className="icon">
        <img src={`/images/${icon}`} alt="" />
      </div>
      <p>
        {message}
      </p>
    </div>
  )
}

export default Toast
