import './contact.css'
import ValidateForm from '../../hooks/validateForm';
import {send} from 'emailjs-com'

function sendEmail(){
    const [toSend, setToSend] = useState({
        name:'',email:'',message:''
    });
    const layout = {}
    const handleInput = (name, value)=> {
        setToSend({...toSend, [name]:value});
        console.log(toSend)
    };
    const sendEmail = (e) =>{
        send(
            'gmail', 'template_FINISH',toSend,'FINISH'
        )
        .then((response)=>{
            console.log('success',response.status, response.text);
            window.location.reload(false)
        })
        .catch((err)=>{
            console.log('failed', err)
        })
    }
}

export default function Contact(){
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