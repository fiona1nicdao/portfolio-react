import './progress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons"

export default function OnePortfolio({portfolio}){
    return(
        <>
        <h1 className='title'>{portfolio.title}</h1>

        <div className="flex">
            <img className="imagePortfolio"src={portfolio.image} alt={portfolio.title}/>
            <div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href={portfolio.website} className='webbtn'>
                    <FontAwesomeIcon icon={faWindowMaximize}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={portfolio.github} className='webbtn'>
                    <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
                <p className='description'>{portfolio.description}</p>

            </div>
        </div>
           
        </>
    )
}