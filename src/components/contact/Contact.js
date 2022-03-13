import React,  { useRef } from 'react';
import './contact.css'
import ValidateForm from '../../hooks/validateForm';
import emailjs from '@emailjs/browser';
// import {send} from 'emailjs-com'

export default function Contact(){
    const service = process.env.SERVICE
    const template = process.env.TEMPLATE
    const user = process.env.USER
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(service, template, form.current, user)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        alert("email sent")
        window.location.reload(false)
    };

    // final sumbit function
    const formSubmit = () =>{
        console.log("callback function when form is submitted!");
        console.log('form values', values);
    }
    // custom hook call
    const{values, errors, handleChange,handleSumbit} = ValidateForm(formSubmit)

    return(
        <div className="contact background">
            <h1 className='contact-name'>Contact</h1>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input  className='form-input' minLength='2'type="text"name="name" id="name" onChange={handleChange} />
                    {errors.contactname && <h3 className='red'>{errors.contactname}</h3>}
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input className='form-input'  type="email" name="email" id="email"onChange={handleChange}/>
                    {errors.email && <h3 className='red'>{errors.email}</h3>}
                </div>
                <div className='form-group'>
                    <label htmlFor="messsage">Message:</label>
                    <input className='form-input message' minLength='2'type="text" name="message" id="message" onChange={handleChange}/>
                    {errors.message && <h3 className='red'>{errors.message}</h3>}
                </div>
                <div>
                    <button className='btn btn-primary' type="sumbit">Submit</button>
                </div>
            </form>
        </div>
    )
}