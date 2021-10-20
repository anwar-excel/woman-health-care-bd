import React from 'react';
import './Contact.css'


const ContactUs = () => {
    return (

        <div >
            <input className="input" type="text" name="" id="" placeholder="Enter your name" />
            <br />
            <input className="input" type="email" name="" id="" placeholder="Example abc@gmail.com" />
            <br />
            <input className="input" type="number" name="" id="" placeholder="Example +08817000000000" />
            <br />
            <input className="input" type="password" name="" id="" placeholder="Enter your password" />
            <br />
            <br />
            <input className="input" type="submit" value="Submit" />
        </div>

    );
};

export default ContactUs;