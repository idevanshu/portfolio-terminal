import React from 'react';

const Hero = () => {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
    { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  ];

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1QLbOpeWxc3czybv2Vuz5qB3YeY8NKdd7/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto text-center relative">
      {/* Hero */}
      <h1 className="text-6xl font-bold text-green-400 mb-6 font-mono">
        <span className="mr-2">{'>'}</span>I'm Devanshu Panigrahi
      </h1>
      
      <p className="text-2xl text-white font-mono mb-4">
        <span className="text-green-400">AIML Engineer</span> | <span className="text-green-400">DevOps Engineer</span>
      </p>
      
      <p className="text-lg text-gray-300 font-mono max-w-3xl mx-auto mb-3">
        I'm into fast networking, computers, and building innovative solutions. Currently exploring <span className="text-green-400">web3</span>, <span className="text-green-400">AI agents</span>, and automated AI-driven IoT systems.
      </p>
      
      <p className="text-lg text-gray-300 font-mono mb-8">
        I love solving complex problems and turning ideas into reality.
      </p>
      
      <button 
        onClick={handleDownloadResume} 
        className="px-6 py-3 bg-green-500/10 border-2 border-green-400 text-green-400 font-mono rounded hover:bg-green-400 hover:text-gray-900 transition-all"
      >
        <span className="mr-2"></span>Resume ⬇
      </button>

      {/* Skills */}
      <h2 className="text-3xl font-bold text-green-400 mt-20 mb-8 font-mono">
        <span className="mr-2">$</span>ls ./Skills
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-20">
        {skills.map((skill, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center min-w-[100px] group"
          >
            <div className="w-20 h-20 p-3 bg-gray-800/50 border-2 border-green-400/30 rounded-lg hover:border-green-400 hover:bg-gray-800/80 hover:scale-110 transition-all duration-300">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110" 
              />
            </div>
            <span className="mt-3 text-sm text-green-400 font-mono group-hover:text-green-300 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="flex flex-col items-center gap-3 cursor-pointer animate-bounce mt-16"
        onClick={scrollToNext}
      >
        <span className="text-green-400 font-mono text-sm tracking-wider">
          SCROLL DOWN
        </span>
        <svg 
          className="w-6 h-6 text-green-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-green-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
