import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl w-full px-10">
      <h2 className="text-5xl font-extrabold text-white text-center mb-12 relative">
        About Me
        <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded"></div>
      </h2>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-white/90 text-lg leading-relaxed space-y-6">
        <p>
          I'm a Computer Science undergraduate from India with a passion for building 
          innovative solutions that make a difference. My journey in tech has been driven 
          by curiosity and a love for solving complex problems.
        </p>
        <p>
          Currently specializing in AI/ML and full-stack web development, I've worked on 
          projects ranging from video streaming platforms with AV1 codec optimization to 
          AI-powered educational technology platforms. I believe in writing clean, 
          maintainable code and creating user experiences that truly matter.
        </p>
        <p>
          When I'm not coding, I'm exploring new technologies, contributing to open-source 
          projects, or preparing for competitive exams. I'm always eager to learn and take 
          on new challenges that push my boundaries.
        </p>
      </div>
    </div>
  );
};

export default About;
