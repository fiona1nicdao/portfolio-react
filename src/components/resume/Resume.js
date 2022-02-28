import "./resume.css"

export default function Resume() {
    return(
        <div className="resume">
            <h1 className="resume-name">Resume</h1>
            <section className="resume-section">
                <h3 className="spacing">Download my <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1TqaHmgJwhzWoQlenXV5DLSzH1KAmOZvA/preview">Resume</a> </h3>
                <h3 className="spacing">Email: fiona.nicdao@northwestern.edu</h3>
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
            </section>


        </div>
    )
}