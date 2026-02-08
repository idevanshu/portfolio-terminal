import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerminalWidget from './TerminalWidget';
import ContactFormModal from './ContactFormModal';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (  
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#0a0e27] via-[#0b2031] to-[#0a0e29] relative overflow-hidden">

      {/* Om Logo - Centered and Smaller */}
      <Link 
        to="/hanuman-chalisa"
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-2xl text-orange-500 hover:text-orange-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]"
        title="Hanuman Chalisa Typing Test"
        aria-label="Hanuman Chalisa Typing Test"
      >
        ॐ
      </Link>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0b2031]/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        {/* Left side: Hero content */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="w-full font-mono text-slate-100 animate-fade-in">
            <div className="mb-8">
              <span className="text-cyan-400 text-2xl sm:text-3xl lg:text-4xl">{'> '}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 text-2xl sm:text-3xl lg:text-4xl font-bold">I'm Devanshu Panigrahi</span>
            </div>

            <div className="mb-6 text-base sm:text-lg lg:text-xl">
  <span className="text-cyan-400">AIML Engineer</span>
  <span className="text-slate-400"> | </span>
  <span className="text-cyan-400">DevOps Architect</span>
  <span className="text-slate-400"> | </span>
  <span className="text-cyan-400">MLOps Engineer</span>
</div>

<div className="space-y-3 text-sm sm:text-base text-slate-300 mb-8">
  <p>I'm obsessed with <span className="text-cyan-300">lightning-fast networks</span>, <span className="text-cyan-300">high-performance computing</span>, and crafting solutions that push boundaries.</p>
  <p>Deep-diving into <span className="text-cyan-400">web3 infrastructure</span>, <span className="text-cyan-400">autonomous AI agents</span>, and intelligent IoT ecosystems that think for themselves.</p>
  <p>I thrive on cracking tough problems and shipping ideas from concept to production—fast.</p>
</div>


            <div className="mb-8">
              <a
                href="https://drive.google.com/file/d/1OOB4yEdA0FJ51XXf8JIfrsNi6N1EcKA2/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/70 text-cyan-400 hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 transition-all rounded font-bold backdrop-blur-sm"
              >
                Resume
              </a>
            </div>

            <div className="mb-6">
              <div className="text-cyan-400 text-xl mb-3">
                <span className="text-teal-400">$</span> ls ./Skills
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg"
                    alt="Rust"
                    title="Rust"
                    className="w-6 h-6 transition-transform group-hover:scale-110 brightness-0 invert"
                  />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C/C++" title="C/C++" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" className="w-6 h-6 transition-transform group-hover:scale-110 invert" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" title="Django" className="w-6 h-6 transition-transform group-hover:scale-110 invert" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" title="PyTorch" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="SQL" title="SQL" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md rounded-lg border border-[#38404d]/50 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm mb-6">
              <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 hover:translate-x-1 transition-all duration-200">→ Projects</Link>
              <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 hover:translate-x-1 transition-all duration-200">→ Contact</Link>
            </div>
          </div>
        </div>

        <TerminalWidget setShowForm={setShowForm} />
      </div>

      <ContactFormModal showForm={showForm} setShowForm={setShowForm} />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;