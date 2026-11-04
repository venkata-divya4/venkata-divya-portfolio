import Navbar from './components/Navbar';
import Hero from './components/Hero';

/**
 * Root App component
 * Composes portfolio sections in order
 */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
