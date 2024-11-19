import './App.css';
import Header from './component/Header';
import Contact from './pages/Contact';
import Education from './pages/Education';
import IntroSection from './pages/IntroSection';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <Header/>
  
      <IntroSection/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    
    </div>
  );
}

export default App;
