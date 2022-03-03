import './work.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import image from '../../assets/images/probros.png'


export default function Card({item}){
    // const {id, title, app, github, proficiency, img} = item

    return(
        // <div className="manycards">
            <div className='cards'>
                <img className='image' alt={item.title}src={image}/>
                <div className='overlay'>
                    <div className='textCard'>
                        <a className='paddingright' href={item.app}>{item.title}</a>
                        <a href={item.github}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    <p className='proficiency'>{item.proficiency}</p>
                </div>
            </div>
        // </div>

    )
}
