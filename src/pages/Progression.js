import {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleArrowRight,faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons"
import portfoliodata from '../assets/data/portfoliodata'
// import projectdata from '../assets/data/projectdata';
import OnePortfolio from '../components/progress/OnePortfolio'
import "./progress.css"

export default function Progression(){
    const [current,setCurrent] = useState(0)
    let length = portfoliodata.length
    // let navigate = useNavigate();

    function goForward(){
       setCurrent(current === length - 1 ? 0 :current + 1) 
    }
    function goBackward(){
        setCurrent(current === 0 ? length - 1  :current - 1)
    }

    return(
        <div className='background'>
            <div className='Me'>Hello! Welcome to My Secret Page about My Progress as a Web Developer</div>

            <div className='progressPortfolio'>My Progression for my Portfolio</div>
            <div className='buttons'>
                <button  className='onebutton' onClick={goBackward}>
                    <FontAwesomeIcon className='arrows'  icon={faCircleArrowLeft}/>
                </button>
                <button className='onebutton' onClick={goForward}>
                    <FontAwesomeIcon className='arrows'  icon={faCircleArrowRight}/>
                </button>
            </div>
            <div className='portfolios'>
                {portfoliodata.map((portfolio, index)=>{
                    return(
                        <div className={index ===current?'active':'hidden'} key={index}>
                            {index === current && (<OnePortfolio portfolio={portfolio}/>)
                        }</div>
                    )
                })}
            </div>                 
        </div>
    )
}