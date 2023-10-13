import React from 'react'

const ContactItem = ({icon, type, value}) => {
  return (
    <div className="contact-item">
      <div>
        <span className="icon">
          <img src={icon} alt="" />
        </span>
        <span className="type">{type}</span>
      </div>
      <div className="value">{value}</div>
    </div>
  );
}

export default ContactItem
