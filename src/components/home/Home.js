import {NavLink} from 'react-router-dom'

import '../../assets/css/App.css'
export default function Home(){
    return(
        <div className='homepage'>
            <h1 className="horizons">Coding to New Horizons </h1>
            <NavLink to='/progress'>
                <h1 className='water'>A Web Developer with A Fresh Prespective</h1>
            </NavLink>
            {/* <button className='buttonProgress'>
                <h1 className='water'>A Web Developer with A Fresh Prespective</h1>
            </button> */}
        </div>
    )
}