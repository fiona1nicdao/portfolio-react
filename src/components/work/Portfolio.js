import './work.css';
import { useOutletContext, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import social from '../../assets/images/social.png'


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
                            <a className='paddingright' href={work.app}>{work.title}</a>
                            <a href={work.github}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <p className='proficiency'>{work.proficiency}</p>
                    </div>
                </div>
        </section>
    ) : <p>Please Select a Project</p>

    return display

}