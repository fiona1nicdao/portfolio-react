import './work.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import probros from '../../assets/images/probros.png'
import weather from '../../assets/images/weather.png'
import quiz from '../../assets/images/quiztimer.png'
import tech from '../../assets/images/techblogs.png'
import food from '../../assets/images/foodweather.png'
import social from '../../assets/images/sunrise.png'


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
function Redo(){
    return(
        <div>
            <div className='cards'>
                <img className='image' alt="ProBonoPals"src={probros}/>
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

            <div className='cards'>
                <img className='image' alt="Weather Website"src={weather}/>
                <div className='overlay'>
                    <div className='textCard'>
                        <a className='paddingright' href="https://fiona1nicdao.github.io/Homework_06/">Weather Website</a>
                        <a href="https://github.com/fiona1nicdao/Homework_06">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    <p className='proficiency'>Server Side APIs</p>
                </div>
            </div>

            <div className='cards'>
                <img className='image' alt="Quiz Website"src={quiz}/>
                <div className='overlay'>
                    <div className='textCard'>
                        <a className='paddingright' href=""></a>
                        <a href="">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    <p className='proficiency'></p>
                </div>
            </div>

            <div className='cards'>
                <img className='image' alt=""src={}/>
                <div className='overlay'>
                    <div className='textCard'>
                        <a className='paddingright' href=""></a>
                        <a href="">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    <p className='proficiency'></p>
                </div>
            </div>
        </div>
    )
}
