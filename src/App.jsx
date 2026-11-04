import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
      <Footer />
    </>
  );
}

export default App;
