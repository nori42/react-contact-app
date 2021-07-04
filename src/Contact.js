import React, { useState } from 'react';
import ContactDetails from './ContactDetails';

const Contact = ({contacts}) => {
  const [showContactDetail, setShowContactDetail] = useState(false)
    
  const toggleContactDetail = () => {
    setShowContactDetail(!showContactDetail)
  }

    return (
        <>
          {contacts.map((contact) => (
            <div className ="contact" key = {contact.id}>
              <h2 className="name">{contact.name}</h2>
              {!showContactDetail && <button className="btn-show-contact" onClick={toggleContactDetail}>...</button>}

              {showContactDetail &&
                <div className="contact-details">
                  <p><span class="contact-label">Number</span>: {contact.number}</p>
                  <p><span class="contact-label">Email:</span> {contact.email}</p>
                  <p><span class="contact-label">Facebook:</span> {contact.facebook}</p>
                  <button className="btn-show-contact" onClick={toggleContactDetail}>...</button>
                </div>  
              }
          </div>
          ))}
        </> 
    );
}
 
export default Contact;