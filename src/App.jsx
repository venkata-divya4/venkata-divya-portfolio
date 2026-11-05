// Existing components — always rendered
import SplashCursor from './components/SplashCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data arrays — used to conditionally render Internships and Leadership
import { internshipsList, leadershipList } from './data/portfolioData';

// Components not yet built (IntroVideo)
// will be imported here in later steps.

/**
 * Root App component
 * Composes all portfolio sections in the required order.
 * Sections that depend on data arrays are skipped when those arrays are empty.
 * Optional components (IntroVideo, Contact) are added in later steps.
 */
function App() {
  return (
    <>
      <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      {/* IntroVideo — added in a later step */}
      <TechnicalSkills />
      <Services />
      <Projects />
      {internshipsList.length > 0 && <Internships />}
      {leadershipList.length > 0 && <Leadership />}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
