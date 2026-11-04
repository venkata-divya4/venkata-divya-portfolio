import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

/**
 * Root App component
 * Composes portfolio sections in order
 */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <Internships />
      <Leadership />
      <Footer />
    </>
  );
}

export default App;
