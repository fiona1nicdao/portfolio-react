import './contact.css'
export default function(){
    return(
        <div className='contact'>
            <h1 className='contact-name'>Contact</h1>
            <form className='form'>
                <div className='form-group'>
                    <label for="name">Name:</label>
                    <input  className='form-input' type="text" id="name"/>
                </div>
                <div className='form-group'>
                    <label for="email">Email:</label>
                    <input className='form-input'  type="text" id="email"/>
                </div>
                <div className='form-group'>
                    <label for="messsage-box">Message:</label>
                    <input className='form-input message' type="text" id="message-box"/>
                </div>
                <div>
                    <button className='btn btn-primary' type="sumbit">Submit</button>
                </div>
            </form>
        </div>
    )
}