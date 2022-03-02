
import './work.css'

import probros from '../../assets/images/probros.png'
import weather from '../../assets/images/weather.png'
import quiz from '../../assets/images/quiztimer.png'
import techblog from '../../assets/images/techblogs.png'
import food from '../../assets/images/foodweather.png'

export default function Work(){
    return(
        <section id="Work"className="Work background">
        <h3 className="Me">Portfolio</h3>
        <div className="workinfo">
                <div className="bigsample">
                    <div className="container">
                        <p className="bigtitle">ProBonoPals</p>
                        <p className="bigphrase">This is my main work I am most proud of.</p>
                        <p className="bigphrase">The meat of my contribution was in the </p>
                        <p className="bigphrase">backend JavaScript pretaining the</p>
                        <p className="lastbigphrase">routes and data structures</p>
                        <p className="github"><a href="https://github.com/pro-bono-pals/pro-bono-pals">GitHub</a></p>
                    </div>
                    <div>
                        <a href = "https://pro-bono-pals.herokuapp.com/">
                            <img className='bigimage'alt='probonobros website' src={probros}/>
                        </a>
                    </div>

                </div>
            <section className="smallwork">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <p className="titlebox">Weather Website</p>
                            <a href="https://fiona1nicdao.github.io/Homework_06/">
                                <img className='smimage'src={weather} alt='weather dashboard website'/>
                            </a>
                            <p className="github"><a href="https://github.com/fiona1nicdao/Homework_06">GitHub</a></p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p className="titlebox">Quiz Website</p>
                            <a href="https://fiona1nicdao.github.io/Homework_04/">
                                <img className='smimage' src={quiz} alt='timed quiz website'/>
                            </a>
                            <p className="github"><a href="https://github.com/fiona1nicdao/Homework_04">GitHub</a></p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p className="titlebox">Tech Blog</p>
                            <a href="https://tech-blog-fionanicdao.herokuapp.com/">
                                <img className='smimage' src={techblog} alt='tech blog website'/>
                            </a>
                            <p className="github"><a href="https://github.com/fiona1nicdao/Tech_Blog_MVC">GitHub</a></p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p className="titlebox">What's your Food Temp?</p>
                            <a href = "https://seasons-of-food.github.io/whats-your-food-temp/">
                                <img className='smimage' src={food} alt='good food and weather website'/>
                            </a>
                            <p className="github"><a href="https://github.com/seasons-of-food/whats-your-food-temp">GitHub</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
    )
}