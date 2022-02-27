import './assets/css/reset.css'
import './assets/css/App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faFutbol, faNewspaper, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
// import { fa-github-square} from '@fortawesome/free-solid-svg-icons';

import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Aboutme from './components/aboutme/Aboutme'
import Contact from './components/contact/Contact'
import Work from './components/work/Work'
import Resume from './components/resume/Resume'

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/'element={<Aboutme/>}/>
        <Route path='/work'element={<Work/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/resume'element={<Resume/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
