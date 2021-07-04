import React, { useState } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';
function App() {
  const [contacts,setContacts] = useState([])
  const [showAddContactForm,setshowAddContactForm] = useState(false);

  const toggleAddContactForm = () => setshowAddContactForm(!showAddContactForm)

  const onAddContact = (contact) => {
    setContacts([...contacts,contact]);
  }
  
  return (
    <div className="container">
      <h1 className="header">Contact</h1>
      <input type="text" placeholder="Search"/>

      <div class="contact-list">
          <Contact contacts={contacts}/>
      </div>

      {showAddContactForm && <AddContact onAddContact={onAddContact} showAddContactForm={toggleAddContactForm}/>}
      

      <button className="btn-add-contact" onClick={toggleAddContactForm}>+</button>
    </div>
  );
}

export default App;
