import './work.css'
import probros from '../../assets/images/probros.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"


export default function Portfolio(){
    return(
        <section className='Work background'>
            <h1 className='Me'>Portfolio</h1>
            <div className='cards'>
                <img className='image' alt='probonopals'src={probros}/>
                <div className='overlay'>
                    <div className='textCard'>
                        <a className='paddingright' href="https://pro-bono-pals.herokuapp.com/">ProBonoPals</a>
                        <a href="https://github.com/pro-bono-pals/pro-bono-pals">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    <p className='proficiency'>Model View Controller</p>
                </div>
            </div>
        </section>

    )
}