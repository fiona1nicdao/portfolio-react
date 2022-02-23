import {NavLink, Routes, Route} from 'react-router-dom'
import Aboutme from '../aboutme/Aboutme'

import Contact from '../contact/Contact'
import Work from '../work/Work'


export default function Header(){
    return(
        <div>
            <header>
            <h1 className="name">Fiona Nicdao</h1>
                <nav className="col-md-6">
                    <ul>
                        <li>
                                <NavLink to='/'>About Me</NavLink>
                            {/* <a href="#About-Me">About Me</a> */}
                        </li>
                        <li>
                                <NavLink to='/work'>Work</NavLink>
                            {/* <a href="#Work">Work</a> */}
                        </li>
                        <li>
                                <NavLink to='/contact'>Contact Me</NavLink>
                            {/* <a href="#Contact-Me">Contact Me</a> */}
                        </li>
                        <li>
                            <NavLink to='/resume'>Resume</NavLink>
                            {/* <a href="#Resume">Resume</a> */}
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path='/'element={<Aboutme/>}/>
                    <Route path='/work'element={<Work/>}/>
                    <Route path='/contact'element={<Contact/>}/>
                </Routes> 
            </main>
        </div>


    )
}