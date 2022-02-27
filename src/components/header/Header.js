import {NavLink} from 'react-router-dom'

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
        </div>


    )
}