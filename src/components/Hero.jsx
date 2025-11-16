import React from 'react';
import { Link } from 'react-router-dom';
import TerminalWidget from './TerminalWidget';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[#0a0e27]">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Left side: Hero content */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="w-full font-mono text-slate-100">
            <div className="mb-8">
              <span className="text-emerald-400 text-2xl sm:text-3xl lg:text-4xl">{'> '}</span>
              <span className="text-emerald-400 text-2xl sm:text-3xl lg:text-4xl font-bold">I'm Devanshu Panigrahi</span>
            </div>

            <div className="mb-6 text-base sm:text-lg lg:text-xl">
              <span className="text-emerald-400">AIML Engineer</span>
              <span className="text-slate-400"> | </span>
              <span className="text-emerald-400">DevOps Engineer</span>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-slate-300 mb-8">
              <p>I'm into <span className="text-white">fast networking</span>, <span className="text-white">computers</span>, and building innovative solutions.</p>
              <p>Currently exploring <span className="text-emerald-400">web3</span>, <span className="text-emerald-400">AI agents</span>, and automated AI-driven IoT systems.</p>
              <p>I love solving <span className="text-white">complex problems</span> and turning ideas into reality.</p>
            </div>

            <div className="mb-8">
              <a href="https://drive.google.com/file/d/1QLbOpeWxc3czybv2Vuz5qB3YeY8NKdd7/view" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all rounded font-bold">
                Resume
              </a>
            </div>

            <div className="mb-6">
              <div className="text-emerald-400 text-xl mb-3">
                <span className="text-cyan-400">$</span> ls ./Skills
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg"
                    alt="Rust"
                    title="Rust"
                    className="w-6 h-6 transition-transform group-hover:scale-110 brightness-0 invert"
                  />
                </div>

                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C/C++" title="C/C++" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" className="w-6 h-6 transition-transform group-hover:scale-110 invert" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" title="Django" className="w-6 h-6 transition-transform group-hover:scale-110 invert" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" title="PyTorch" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="SQL" title="SQL" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div className="group p-2 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm mb-6">
              <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 transition">→ Projects</Link>
              <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition">→ Contact</Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://github.com/idevanshu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">→ GitHub</a>
              <a href="https://linkedin.com/in/idevanshu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">→ LinkedIn</a>
              <a href="https://x.com/iamdevanshu04" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">→ X</a>
              <a href="mailto:devanshupanigrahi@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition">→ Email</a>
            </div>
          </div>
        </div>

        <TerminalWidget />
      </div>
    </div>
  );
};

export default Hero;
