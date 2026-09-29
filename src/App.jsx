import './App.css';

import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Spotlight from './components/Spotlight';

export default function App() {
  return (
    <>
      <Spotlight />
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <div className="shell">
        <Sidebar />
        <main className="main" id="content">
          <About />
          <Experience />
          <Skills />
          <Education />
        </main>
      </div>
    </>
  );
}
