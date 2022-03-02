import './assets/css/reset.css'
import './assets/css/App.css'

import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Aboutme from './components/aboutme/Aboutme'
import Contact from './components/contact/Contact'
import Work from './components/work/Portfolio'
import Resume from './components/resume/Resume'

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme'element={<Aboutme/>}/>
        <Route path='/work'element={<Work/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/resume'element={<Resume/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
