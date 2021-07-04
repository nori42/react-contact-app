const ContactDetails = ({number, email, facebook, id , showContact}) => {
    return (
        <div className="contact-details" key={id}>
            <p className="number"><span className="contact-label">Number:</span> {number}</p>
            <p className="email"><span className="contact-label">Email:</span> {email}</p>
            <p className="facebook"><span className="contact-label">Facebook:</span> {facebook}</p>
        </div>
    );
}
 
export default ContactDetails;