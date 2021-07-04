import { useState } from "react";

const AddContact = ({ onAddContact, showAddContactForm}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [facebook, setFacebook] = useState('')
    const [id, setId] = useState(0)


    const createContact = (e) => {
        e.preventDefault();

        if(name =='' || number =='') return;

        setId(Math.floor(Math.random()*999))

        onAddContact({name,number,email,facebook,id})

        setName('')
        setNumber('')
        setEmail('')
        setFacebook('')

        showAddContactForm();
    }

    return (  
        <form className="contact-form">
            <label>Name:</label>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <label>Number:</label>
            <input type="text" value={number} placeholder="Number" onChange={(e) => setNumber(e.target.value)}/>
            <label>Email:</label>
            <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <label>Facebook:</label>
            <input type="text" value={facebook} placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)}/>
            <button className="btn-save" onClick={(createContact)}>Save</button>
        </form>
    );
}
 
export default AddContact;