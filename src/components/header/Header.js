import {NavLink, Routes, Route} from 'react-router-dom'

import Aboutme from '../aboutme/Aboutme'
import Contact from '../contact/Contact'
import Work from '../work/Work'
import Resume from '../resume/Resume'


export default function Header(){
    return(
        <div>
            <header>
            <h1 className="name">Fiona Nicdao</h1>
                <nav className="col-md-6">
                    <ul>
                        <li>
                            <NavLink to='/'>About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to='/work'>Work</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact Me</NavLink>
                        </li>
                        <li>
                            <NavLink to='/resume'>Resume</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path='/'element={<Aboutme/>}/>
                    <Route path='/work'element={<Work/>}/>
                    <Route path='/contact'element={<Contact/>}/>
                    <Route path='/resume'element={<Resume/>}/>
                </Routes> 
            </main>
        </div>


    )
}