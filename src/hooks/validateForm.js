import {useState} from 'react'
import {omit} from 'lodash'

export default function ValidateForm(callback) {
    // form values
    const[values, setValues] = useState({});
    // errors
    const[errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        // function to valudate each input values

        switch(name) {
            case 'contactname':
                if(value.length < 2){
                    setErrors({
                        ...errors,
                        contactname:'please enter a name'
                    })
                }else{
                    let newObj = omit(errors, "contactname");
                    setErrors(newObj);
                }
                break;
            case 'email':
                if(!new RegExp( /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email'
                    })
                }else{
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;
            case 'message':
                if(value.length <=2){
                    setErrors({
                        ...errors,
                        message:'please enter a message'
                    })
                }else{
                    let newObj = omit(errors, "message");
                    setErrors(newObj)
                }
                break;
            default:
                break;
        }
    }

    // method to handle form inputs
    const handleChange = (event)=> {
        // To stop default events
        event.persist();
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        // Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })
    }
    const handleSubmit = (event)=>{
        if(event) event.preventDefault();
        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0){
            callback();
        }else{
            alert('There is an error')
        }
    }
    return{
        values,
        errors,
        handleChange,
        handleSubmit
    }
}