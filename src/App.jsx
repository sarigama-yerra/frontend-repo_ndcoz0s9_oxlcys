import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Showcase, Contact, Footer } from './components/Sections';

function App() {
  return (
    <div className="font-inter bg-[#0a0f1c] text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
