import "./resume.css"

export default function Resume() {
    return(
        <div className="resume background">
            <h1 className="resume-name">Resume</h1>
            <section className="resume-section">
                <h3 className="spacing">Download my <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/u/0/folders/1YtW9TudY6MJt8B6x3GK1YEEF1RJN6EwE">Resume</a> </h3>
                <h3 className="spacing">Email: fiona.nicdao@northwestern.edu</h3>
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
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}