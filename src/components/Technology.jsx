import React from 'react'

const Technology = ({image}) => {
  return (
    <div className="technology">
      <img src={`images/${image}`} alt="" />
    </div>
  );
}

export default Technology
