import './work.css'
// import probros from '../../assets/images/probros.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import Card from './Card'
import Workdata from '../../assets/data/workdata'


export default function Portfolio(){
    const data = Workdata.map(work => {
        return(
            <Card key={work.id} item={work}/>
        )
    })
    var image = require('../../assets/images/probros.png')



    return(
        <section className='Work background'>
            <h1 className='Me'>Portfolio</h1>
            <div>
                {data}
            </div>
            <div className='cards'>
                <img className='image' alt='probonopals'src={image}/>
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