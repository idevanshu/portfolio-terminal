import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'p2pfiletransferRust',
      description: 'Lightweight P2P file sharing over TCP with async Rust backend',
      fullDescription:
        'High-performance peer-to-peer file transfer system built with Rust. Features async TCP connections, NAT traversal, blazing-fast speeds, and minimal resource usage.',
      tech: ['Rust', 'Tokio', 'TCP', 'Async', 'P2P'],
      github: 'https://github.com/idevanshu/p2pfiletransferRust',
      demo: '#',
      features: [
        'Async Rust backend',
        'NAT traversal support',
        'High-speed transfers',
        'Low resource usage'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },

    {
      id: 2,
      name: 'Cloudflare-DDNS-WireGuard-VPN',
      description: 'Dynamic DNS + WireGuard VPN automation for secure remote network access',
      fullDescription:
        'Automatically updates Cloudflare DNS based on WireGuard endpoint changes. Integrates AdGuard Home for network-wide ad-blocking and enhanced privacy with a fully automated, secure remote access setup.',
      tech: ['WireGuard', 'Cloudflare', 'DDNS', 'VPN', 'AdGuard'],
      github: 'https://github.com/idevanshu/Cloudflare-ddns-and-wireguard-vpn',
      secondary: 'https://github.com/idevanshu/AdGuard-Home-with-WireGuard',
      demo: '#',
      features: [
        'Auto DNS updates',
        'Secure remote access',
        'AdGuard Home integration',
        'Privacy-focused network stack'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },

    {
      id: 3,
      name: 'Counter-Strike-2-Server',
      description: 'Production-ready CS2 dedicated server setup',
      fullDescription:
        'Complete deployment setup for hosting Counter-Strike 2 servers. Includes network optimization, configs, Dockerized scripts, and automation for hosting stable, low-latency CS2 game servers.',
      tech: ['CS2', 'Docker', 'Linux', 'DevOps', 'Networking'],
      github: 'https://github.com/idevanshu/Counter-Strike-2-Server-Setup',
      demo: '#',
      features: [
        'Automated server deployment',
        'Optimized configs',
        'Docker-based setup',
        'Production-ready environment'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0b2031] to-[#0a0e29] text-slate-100 px-4 py-10 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0b2031]/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition mb-6 font-mono group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:mr-3 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            cd ..
          </Link>

          <div className="font-mono">
            <h1 className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 mb-2 font-bold">
              <span className="text-cyan-400">$</span> ls ./Projects
            </h1>
            <p className="text-slate-400">
              {projects.length} directories, each representing a unique solution
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md border border-[#38404d]/50 rounded-lg p-6 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>

              {/* Project Name */}
              <h3 className="text-xl font-bold text-slate-100 mb-2 font-mono group-hover:text-cyan-300 transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#0b2031] border border-[#38404d] rounded text-xs text-teal-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-slate-400">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* View Details */}
              <div className="text-cyan-400 text-sm font-mono group-hover:text-cyan-300 transition flex items-center">
                → View Details
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub */}
        <div className="text-center font-mono animate-fade-in">
          <p className="text-slate-400 mb-4">
            <span className="text-teal-400">Dev@hackit:$</span> <a href="https://github.com/idevanshu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">https://github.com/idevanshu</a>
          </p>
          <a
            href="https://github.com/idevanshu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/70 text-cyan-400 hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 transition-all rounded font-bold backdrop-blur-sm"
          >
            View All on GitHub →
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-br from-[#0a0e27] to-[#0b2031] border-2 border-cyan-400/70 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#0a0e27] to-[#0b2031] border-b border-[#38404d] p-6 flex items-start justify-between backdrop-blur-md">
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-mono">
                  {selectedProject.name}
                </h2>
                <p className="text-slate-400">{selectedProject.description}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-[#0b2031] rounded"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3 font-mono flex items-center gap-2">
                  <span className="text-teal-400">$</span> cat README.md
                </h3>
                <p className="text-slate-300 leading-relaxed bg-[#0b2031]/30 border border-[#38404d]/50 rounded-lg p-4">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3 font-mono flex items-center gap-2">
                  <span className="text-teal-400">$</span> ls ./features
                </h3>
                <ul className="space-y-2 bg-[#0b2031]/30 border border-[#38404d]/50 rounded-lg p-4">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-300"
                    >
                      <span className="text-cyan-400 mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3 font-mono flex items-center gap-2">
                  <span className="text-teal-400">$</span> cat package.json
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#0b2031] border border-[#38404d] rounded text-teal-300 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/70 text-cyan-400 hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 transition-all rounded font-bold text-center backdrop-blur-sm"
                >
                  View on GitHub
                </a>
                {selectedProject.secondary && (
                  <a
                    href={selectedProject.secondary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border-2 border-teal-400/70 text-teal-400 hover:bg-teal-500/10 hover:border-teal-300 hover:text-teal-300 hover:shadow-lg hover:shadow-teal-500/30 transition-all rounded font-bold text-center backdrop-blur-sm"
                  >
                    Related Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Projects;
