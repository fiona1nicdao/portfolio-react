import './work.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import probros from '../../assets/images/probros.png'
import weather from '../../assets/images/weather.png'
import quiz from '../../assets/images/quiztimer.png'
import tech from '../../assets/images/techblogs.png'
import food from '../../assets/images/foodweather.png'
import social from '../../assets/images/social.png'


export default function Card(){

    return(
        <>
            <div className='manycards'>
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
                    <img className='image' alt="What's your Food Temp"src={food}/>
                    <div className='overlay'>
                        <div className='textCard'>
                            <a className='paddingright' href="https://seasons-of-food.github.io/whats-your-food-temp/">What's your Food Temp</a>
                            <a href="https://github.com/seasons-of-food/whats-your-food-temp">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className='proficiency'>Third-Party APIs</p>
                    </div>
                </div>
            </div>

            <div className='manycards'>
                <div className='cards'>
                    <img className='image' alt="Quiz Website"src={quiz}/>
                    <div className='overlay'>
                        <div className='textCard'>
                            <a className='paddingright' href="https://fiona1nicdao.github.io/Homework_04/">Quiz Website</a>
                            <a href="https://github.com/fiona1nicdao/Homework_04">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className='proficiency'>Web APIs</p>
                    </div>
                </div>

                <div className='cards'>
                    <img className='image' alt="Tech Blogs"src={tech}/>
                    <div className='overlay'>
                        <div className='textCard'>
                            <a className='paddingright' href="https://tech-blog-fionanicdao.herokuapp.com/">Tech Blogs</a>
                            <a href="https://github.com/fiona1nicdao/Tech_Blog_MVC">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className='proficiency'>SQL</p>
                    </div>
                </div>

                <div className='cards'>
                    <img className='image' alt="Social Network API"src={social}/>
                    <div className='overlay'>
                        <div className='textCard'>
                            <a className='paddingright' href="https://github.com/fiona1nicdao/social_network_api">Social Network API</a>
                            <a href="https://github.com/fiona1nicdao/social_network_api">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className='proficiency'>MongoDB</p>
                    </div>
                </div>
            </div>
        </>

    )
}

