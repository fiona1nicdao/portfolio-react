import './assets/css/reset.css'
import './assets/css/App.css'
import Aboutme from './components/aboutme/Aboutme'

function App() {
  return (
    <div className="App">
      <header>
      <h1 className="name">Fiona Nicdao</h1>
        <nav className="col-md-6">
            <ul>
                <li>
                    <a href="#About-Me">About Me</a>
                </li>
                <li>
                    <a href="#Work">Work</a>
                </li>
                <li>
                    <a href="#Contact-Me">Contact Me</a>
                </li>
                <li>
                    <a href="#Resume">Resume</a>
                </li>
            </ul>
        </nav>
      </header>
      <main>
        <h1>Hello</h1>
        <Aboutme/>
      </main>
      <footer id="Contact-Me">
      <h3 className="Me">
            Contact Me
        </h3>
        <ul className="contact">
            <li>
                <a href="https://www.linkedin.com/in/fiona-nicdao221513175luc/">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/fiona1nicdao">
                GitHub
                </a>
            </li>
            <li>
                <a href="https://stackoverflow.com/users/story/16901383?newreg=75f0e74564eb459091c31304de659394&_=1">
                Stack Overflow
                </a>
            </li>
            <li id="Resume">
                <a href="https://drive.google.com/file/d/1TqaHmgJwhzWoQlenXV5DLSzH1KAmOZvA/preview">Resume</a>
            </li>
            <li className="email">fiona.nicdao@northwestern.edu</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
