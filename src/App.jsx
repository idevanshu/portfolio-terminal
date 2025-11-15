import React from 'react';
import Terminal from './components/Terminal';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="min-h-screen w-full snap-section flex justify-center items-center p-5 bg-gradient-to-br from-gray-900 to-blue-900">
        <Terminal />
      </section>
      
      <section className="min-h-screen w-full snap-section flex justify-center items-center p-10 bg-gradient-to-br from-gray-900 to-blue-900">
        <Hero />
      </section>
      
      <section className="min-h-screen w-full snap-section flex justify-center items-center p-10 bg-gradient-to-br from-gray-900 to-blue-900">
        <Projects />
      </section>
      
      <section className="min-h-screen w-full snap-section flex justify-center items-center p-10 bg-gradient-to-br from-gray-900 to-blue-900">
        <Contact />
      </section>
    </div>
  );
}

export default App;
