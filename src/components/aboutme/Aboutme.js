import '../../assets/css/App.css'
export default function Aboutme(){
    return(
        <div>
            <section id="About-Me"className="AboutMe">
            <h3 className="Me">About Me</h3>
            <div className="textpic">
                <div className="">
                    <div className="Paragraph">
                        <p className="large">Hello! I am</p>
                        <p className="large">Fiona Nicdao</p>
                        <p className="textcoder">I am a web developer</p>
                        <p className="textme"> I'm a Chicagoan.I graduated from </p>
                        <p className="textme">Loyola Univeristy at Chicago with </p>
                        <p className="textme">a Bachelor Degree in Biology.</p>
                        <p className="textme">Coding languages that I am </p>
                        <p className="textme">knowledgeable is HTML, CSS, and </p>
                        <p className="textme">JavaScript.</p>
                    </div> 
                </div>
                {/* need to figure out how to add pictures!! */}
                <div className="pictureme"><img className="me"src="../../assets/imgages/me.png"/></div>        
            </div>
        </section>
        </div>
    )
}