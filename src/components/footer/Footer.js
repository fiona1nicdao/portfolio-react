import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"


export default function Footer(){
    return(
        <footer id="Contact-Me">
            <ul className="contact">
              <li>
                  <a href="https://www.linkedin.com/in/fiona-nicdao221513175luc/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/fiona1nicdao">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
              </li>
              <li>
                  <a href="https://stackoverflow.com/users/story/16901383?newreg=75f0e74564eb459091c31304de659394&_=1">
                  <FontAwesomeIcon icon={faStackOverflow}/>
                  </a>
              </li>
          </ul>
        </footer>
    )
}