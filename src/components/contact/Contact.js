import './contact.css'
import React, {useState} from 'react'

export default function Contact(){
    const [isValid, setIsValid] = useState(false)
    const [message, setMessage] = useState('')
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;
    const validEmail = (event)=>{
        const email = event.target.value;
        if(emailRegex.test(email)){
            setIsValid(true);
            console.log('user entered a valid email')
        }else {
            setIsValid(false);
            setMessage('Please enter a valid email.');
        }
    };
    return(
        <div className="contact background">
            <h1 className='contact-name'>Contact</h1>
            <form className='form'>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    {/* <input  className='form-input' type="text" id="name" /> */}

                    <input  className='form-input' type="text" id="name" onChange={validEmail}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input className='form-input'  type="text" id="email"/>
                </div>
                <div className='form-group'>
                    <label htmlFor="messsage-box">Message:</label>
                    <input className='form-input message' type="text" id="message-box"/>
                </div>
                <div>
                    <button className='btn btn-primary' type="sumbit">Submit</button>
                </div>
            </form>
            <h3 className={`message ${isValid} ? 'success' : 'error'`}>{message}</h3>
        </div>
    )
}