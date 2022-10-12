import "./resume.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faNodeJs,} from "@fortawesome/free-brands-svg-icons"
// import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons"

export default function Resume() {
    return(
        <div className="resume background">
            <h1 className="resume-name">Resume</h1>
            <section className="resume-section">
                {/* I hid my resume and email b/c not looking for jobs  */}
                <h3 className="spacing">Download my <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1O1zMRN-RM3JT4z5RauKPegcdZsTyiDyV/view?usp=sharing">Resume</a> </h3>
                <h3 className="spacing">Email:fionanicdao8374@gmail.com </h3>
                <div>
                <FontAwesomeIcon className="icons" icon={faHtml5}/>
                <FontAwesomeIcon className="icons" icon={faCss3Alt}/>
                <FontAwesomeIcon className="icons" icon={faJsSquare}/>
                <FontAwesomeIcon className="icons" icon={faReact}/>
                <FontAwesomeIcon className="icons" icon={faBootstrap}/>
                <FontAwesomeIcon className="icons" icon={faNodeJs}/>
                <img className="sizeImgMongodb"src="https://user-images.githubusercontent.com/50216349/74248780-cb022980-4cf0-11ea-93fb-724342358f0f.png"/>
                <img className="sizeImgSQL" src="https://camo.githubusercontent.com/3d0e496c6660afe5b12402e0d29e9b8f9cb8b39da511b3eadf2f3650b47a4c85/687474703a2f2f74616e6b77732e636f6d2f696d616765732f6d7973716c2e706e67"/>
                <img className="sizeImgGraphql" src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"/>
                </div>
                <div className="proficiency">
                    <div>
                        <h2 className="spacing">Front-end Proficiencies</h2>
                        <ul className="spacing-left">
                            <li className="dot">HTML</li>
                            <li className="dot">CSS</li>
                            <li className="dot">JavaScript</li>
                            <li className="dot">jQuery</li>
                            <li className="dot">responsive design</li>
                            <li className="dot">React.js</li>
                            <li className="dot">Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="spacing">Back-end Proficiencies</h2>
                        <ul className="spacing-left">
                            <li className="dot">API</li>
                            <li className="dot">Node</li>
                            <li className="dot">Express</li>
                            <li className="dot">MySQL, Squelize</li>
                            <li className="dot">MongoDB, Mongoose</li>
                            <li className="dot">REST</li>
                            <li className="dot">GraphQL</li>
                            <li className="dot">Apollo</li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}