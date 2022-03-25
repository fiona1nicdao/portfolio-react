import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import portfoliodata from '../assets/data/portfoliodata'
import projectdata from '../assets/data/projectdata';
import OnePortfolio from '../components/progress/OnePortfolio'
import OneProject from '../components/progress/OneProject'

export default function Progression(){
    const [current,setCurrent] = useState(0)
    console.log("current",current)
    const [pcurrent,setpCurrent] = useState(0)
    console.log("project",pcurrent)
    let length = portfoliodata.length
    console.log("length", length)
    let plength = projectdata.length 
    console.log("project length", plength)
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
    function goToPrevious(){
        setpCurrent(pcurrent === plength -1 ? 0:pcurrent-1)
    }
    function goforward(){
        setpCurrent(pcurrent === plength -1 ? 0: pcurrent+1)
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
                            <div className={index ===current?'active':'hidden'} key={index}>{index === current && (<OnePortfolio portfolio={portfolio}/>)}</div>
                        )
                    })}
                </div>
            <div>My progression for my projects </div>
                    <button onClick={goToPrevious}>previous</button>
                    <button onClick={goforward}>next</button>
                    <div>
                        {projectdata.map((project, index)=>{
                            return(
                               <div className={index ===pcurrent ?'active':'hidden'} key={index}>
                                {index === pcurrent && (<OneProject project={project}/>)}
                               </div> 
                            )
                            
                        })}
                    </div>
            {/* make a caresel of my portfolios and projects have an if else to switch from showing portoflios and projects  */}
        </div>
    )
}