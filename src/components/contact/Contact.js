import './contact.css'
import ValidateForm from '../../hooks/validateForm';

export default function Contact(){
    // const [isValid, setIsValid] = useState(false)
    // const [message, setMessage] = useState('')
    // const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;
    // const validEmail = (event)=>{
    //     const email = event.target.value;
    //     if(emailRegex.test(email)){
    //         setIsValid(true);
    //         console.log('user entered a valid email')
    //     }else {
    //         setIsValid(false);
    //         setMessage('Please enter a valid email.');
    //     }
    // };

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
            <form className='form' onSubmit={handleSumbit}>
                <div className='form-group'>
                    <label htmlFor="contactname">Name:</label>
                    <input  className='form-input' minLength='2'type="text"name="contactname" id="name" onChange={handleChange} />
                    {errors.contactname && <h3 className='red'>{errors.contactname}</h3>}

                    {/* <input  className='form-input' type="text" id="name" onChange={validEmail}/> */}
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
            {/* <h3 className={`message ${isValid} ? 'success' : 'error'`}>{message}</h3> */}
        </div>
    )
}