import './work.css'
import {useState} from 'react'
import workData from'../../assets/data/workdata'
import {NavLink, Outlet} from 'react-router-dom'
import probros from "../../assets/images/polari.png"
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
                <a className='paddingright' target="_blank" rel="noopener noreferrer" href="https://polari-attachments.herokuapp.com/">Polari Dating App</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/polari-2022">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
            <p className='work-proficiency'>REACT.JS</p>
            <p className='work-proficiency'>Polari is a dating website caterd to the LGBTQ community with an emphasis to educate users of their attachment styles.</p>

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