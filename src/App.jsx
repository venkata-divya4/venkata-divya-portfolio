// Existing components — always rendered
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import SoftSkills from './components/SoftSkills';
import Footer from './components/Footer';

// Data arrays — used to conditionally render Internships and Leadership
import { internshipsList, leadershipList } from './data/portfolioData';

// Components not yet built (Preloader, IntroVideo, Services, Contact)
// will be imported here in later steps.

/**
 * Root App component
 * Composes all portfolio sections in the required order.
 * Sections that depend on data arrays are skipped when those arrays are empty.
 * Optional components (Preloader, IntroVideo, Services, Contact) are added in later steps.
 */
function App() {
  return (
    <>
      {/* Step 1: Preloader — added in a later step */}
      <Navbar />
      <Hero />
      <About />
      {/* Step 2: IntroVideo — added in a later step */}
      <TechnicalSkills />
      {/* Step 3: Services — added in a later step */}
      <Projects />
      {internshipsList.length > 0 && <Internships />}
      {leadershipList.length > 0 && <Leadership />}
      <SoftSkills />
      {/* Step 4: Contact — added in a later step */}
      <Footer />
    </>
  );
}

export default App;
