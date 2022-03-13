import './work.css';
import { useOutletContext} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"


export default function Portfolio(){
    const [selectedProject, setSelectedProject] = useOutletContext();

    const work = selectedProject;
    console.log(work)
    const display = selectedProject ? (
        <section className='Work background'>
            <div className='cards'>
                    <img className='image' alt={work.title}src={work.imageSrc}/>
                    <div className='overlay'>
                        <div className='textCard'>
                            <a className='paddingright' target="_blank" rel="noopener noreferrer" href={work.app}>{work.title}</a>
                            <a target="_blank" rel="noopener noreferrer" href={work.github} className='work-github'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className='work-proficiency'>{work.proficiency}</p>
                        <p className='work-proficiency'>{work.description}</p>
                    </div>
            </div>
        </section>
    ) : <h1>Please Select a Project</h1>

    return display

}