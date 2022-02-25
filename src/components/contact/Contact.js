export default function(){
    return(
        <div>
            <h1>Contact Page </h1>
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email"/>
                </div>
                <div>
                    <label for="messsage-box">Message:</label>
                    <input type="text" id="message-box"/>
                </div>
                <div>
                    <button type="sumbit">Submit</button>
                </div>
            </form>
        </div>
    )
}