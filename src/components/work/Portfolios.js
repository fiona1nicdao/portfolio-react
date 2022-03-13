import './work.css'
import {useState} from 'react'
import workData from'../../assets/data/workdata'
import {NavLink, Outlet} from 'react-router-dom'
import probros from "../../assets/images/probros.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"


export default function Portfolios(){
    const [selectedProject, setSelectedProject] = useState()

    const workLinks = workData.map(work => {
        return (
            <li key={work.id} onClick={()=>{setSelectedProject(work)} }>
                <NavLink to={`/work/${work.id}`}>
                    <img className='nav-image nav-cards' alt={work.title}src={work.imageSrc}/>
                </NavLink>
            </li>
        )
    })
    const display = selectedProject ?(
        <Outlet context={[selectedProject, setSelectedProject]}/>
    ):(
        <div className='cards'>
        <img className='image' alt="ProBonoPals"src={probros}/>
        <div className='overlay'>
            <div className='textCard'>
                <a className='paddingright' target="_blank" rel="noopener noreferrer" href="https://pro-bono-pals.herokuapp.com/">ProBonoPals</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/pro-bono-pals/pro-bono-pals">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
            <p className='work-proficiency'>Model View Controller</p>
            <p className='work-proficiency'>Service to match entry level professionals willing to donate their time with local community members who needs help in their respective fields.</p>

        </div>
        </div>
    )               


    return(
        <section className='Work background'>
            <h1 className='Me'>Portfolio</h1>
            <div className='flex-container'>
                <div className='work-nav'>
                    <ul className='nav-flex'>{workLinks}</ul>
                </div>
                <div className='work-main'>
                {display}
                </div>

            </div>
        </section>

    )
}