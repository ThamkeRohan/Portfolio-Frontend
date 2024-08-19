import React from 'react'

const Control = ({name, icon, navigateTo}) => {
  
  return (
    <a className={`control`} href={`#${navigateTo}`}>
      <img src={`images/${icon}`} alt={name} />
      <div className="tooltip">{name}</div>
    </a>
  )
}

export default Control
