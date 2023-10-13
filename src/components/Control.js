import React from 'react'

const Control = ({name, icon, clickAction, isActive}) => {
  
  return (
    <button className={`control ${isActive ? "active" : ""}`} onClick={clickAction}>
      <img src={`images/${icon}`} alt={name} />
      <div className="tooltip">{name}</div>
    </button>
  )
}

export default Control
