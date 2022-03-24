import { useNavigate } from 'react-router-dom';


export default function Progression(){
    let navigate = useNavigate();

    function goBack(){
        navigate(`/`);

    }
    return(
        <>
            <div>Hello this is a the secret page about my progess as a web developer</div>
            <button onClick={goBack}>click here to Go Back to the Home page</button>
        </>
    )
}