import './assets/css/reset.css'
import './assets/css/App.css'

import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Aboutme from './components/aboutme/Aboutme'
import Contact from './components/contact/Contact'
import Works from './components/work/Portfolios'
import Resume from './components/resume/Resume'
import Work from './components/work/Portfolio'
import Progression from './pages/Progression'


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme'element={<Aboutme/>}/>
        <Route path='/work'element={<Works/>}>
          <Route path=":id" element={<Work/>}/>
        </Route>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/resume'element={<Resume/>}/>
        <Route path='/progress'element={<Progression/>}/>
      </Routes>
  
      <Footer/>
    </div>
  );
  }
export default App;
