import {NavLink} from 'react-router-dom'


export default function Header(){
    return(

        <header>
            <NavLink className="name2" to='/'>
                <h1 className="name">Fiona Nicdao</h1>
            </NavLink>
            <nav>
                <ul>
    
                <NavLink to='/aboutme'>About Me</NavLink>
                <NavLink to='/work'>Portfolio</NavLink>
                 <NavLink to='/contact'>Contact Me</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
                </ul>

            </nav>
        </header>



    )
}