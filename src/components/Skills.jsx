import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  return (
    <div className="max-w-6xl w-full px-10">
      <h2 className="text-5xl font-extrabold text-white text-center mb-12 relative">
        Skills & Technologies
        <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded"></div>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in-scale"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
            <span className="text-white font-semibold text-base text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// IMPORTANT: Default export at the end
export default Skills;
