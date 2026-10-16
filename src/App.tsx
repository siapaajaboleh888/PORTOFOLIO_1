import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
