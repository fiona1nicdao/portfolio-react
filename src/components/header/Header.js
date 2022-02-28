import {NavLink} from 'react-router-dom'


export default function Header(){
    return(

        <header>
            <h1 className="name">Fiona Nicdao</h1>
            <nav>
                <ul>
                <NavLink to='/'>About Me</NavLink>
                <NavLink to='/work'>Portfolio</NavLink>
                 <NavLink to='/contact'>Contact Me</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
                </ul>

            </nav>
        </header>



    )
}