import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import portfoliodata from '../assets/data/portfoliodata'
import OnePortfolio from '../components/progress/OnePortfolio'

export default function Progression(){
    const [current,setCurrent] = useState(0)
    let length = portfoliodata.length
    let navigate = useNavigate();

    function goHome(){
        navigate(`/`);
    }
    function goToWork(){
        navigate('/work')
    }
    function goForward(){
       setCurrent(current === length -1 ? 0:current + 1) 
    }
    function goBackward(){
        setCurrent(current === length -1 ? 0:current -1)
    }

    return(
        <div className='background'>
            <div>Hello this is a the secret page about my progess as a web developer</div>
            <button onClick={goHome}>click here to Go Back to the Home page</button>
            <button onClick={goToWork}>Click here to see some more work I am proud of</button>
            <div>My progression for my portfolio</div>
                <button onClick={goBackward}>backward</button>
                <button onClick={goForward}>forward</button>
                <div>
                    {portfoliodata.map((portfolio, index)=>{
                        return(
                            // write out data 
                            <div className={index ===current?'activePortfolio':'hidden'} key={index}>{index === current && (<OnePortfolio portfolio={portfolio}/>)}</div>
                        )
                    })}
                </div>
            <div>My progression for my projects </div>
            {/* make a caresel of my portfolios and projects have an if else to switch from showing portoflios and projects  */}
        </div>
    )
}