import './work.css'
import Card from './Card'
import {useState} from 'react'
import workData from'../../assets/data/workdata'
import {NavLink, Outlet} from 'react-router-dom'
// import Portfolio from './Portfolio'

export default function Portfolios(){
    const [selectedProject, setSelectedProject] = useState()

    const workLinks = workData.map(work => {
        return (
            <li key={work.id} onClick={()=> setSelectedProject(work)}>
                <NavLink to={`/work/${work.id}`}>
                    {work.title}
                </NavLink>
            </li>
        )
    })

    return(
        <section className='Work background'>
            <h1 className='Me'>Portfolio</h1>
            <ul>
                {workLinks}
            </ul>
            <div>
                <Outlet context={[selectedProject, setSelectedProject]}/>
            </div>
            <div>
                {/* <Portfolio/> */}
            </div>
            <div>
                <Card/>
            </div>
        </section>

    )
}