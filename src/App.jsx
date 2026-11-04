import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
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
      <Footer />
    </>
  );
}

export default App;
