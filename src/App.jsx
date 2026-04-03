import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

const HanumanChalisaTyping = lazy(() => import('./components/HanumanChalisaTyping'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center">
    <span className="text-cyan-400 font-mono text-lg animate-pulse">loading...</span>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0e27] text-slate-100">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hanuman-chalisa" element={<HanumanChalisaTyping />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
