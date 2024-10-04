import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleInfo(e) {
        const text = e.target.value;
        const name = e.target.name;

        const copy = { ...info };
        copy[name] = text;
        setInfo(copy);
    }

    function send() {
        console.log(info);
    }

    return (
        <div className="contact page">
            <h1><b> Contact Us </b></h1>

            <div className='info'>
                <h3></h3>
                <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" className='form-control' onBlur={handleInfo} name="name" />
                </div>

                <div>
                    <label className="form-label">Email</label>
                    <input type="text" className='form-control' onBlur={handleInfo} name="email" />
                </div>

                <div>
                    <label className="form-label">Message</label>
                    <textarea type="text" rows="5" className='form-control' onBlur={handleInfo} name="message" />
                </div>

                <div className='controls'>
                    <button className='btn btn-outline-dark' onClick={send}>
                        Send <i className="fa-regular fa-paper-plane"></i></button>
                </div>
            </div>
        </div>

    );
}

export default Contact;