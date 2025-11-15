import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "P2P File Transfer (Rust)",
      description: "A sophisticated file transfer application built with Rust and Tokio library for seamless peer-to-peer file exchange over TCP connections. Features secure, encrypted transfers with dual operational modes for efficient file sharing across networks.",
      tags: ["Rust", "Tokio", "TCP", "P2P", "Networking"],
      link: "https://github.com/idevanshu/p2pfiletransferRust",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Cloudflare DDNS + WireGuard VPN",
      description: "Dynamic DNS solution integrated with WireGuard VPN and AdGuard Home. Automatically updates Cloudflare DNS records based on WireGuard endpoint changes, enabling secure remote access with ad-blocking capabilities for enhanced privacy and network control.",
      tags: ["WireGuard", "Cloudflare", "DDNS", "VPN", "AdGuard", "Networking"],
      link: "https://github.com/idevanshu/Cloudflare-ddns-and-wireguard-vpn",
      secondaryLink: "https://github.com/idevanshu/AdGuard-Home-with-WireGuard",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Counter-Strike 2 Server Setup",
      description: "Complete infrastructure setup for hosting a dedicated Counter-Strike 2 game server. Includes configuration management, network optimization, and server deployment scripts for running a production-ready CS2 server with custom settings and mods.",
      tags: ["CS2", "Game Server", "DevOps", "Docker", "Linux"],
      link: "https://github.com/idevanshu/Counter-Strike-2-Server-Setup",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  const handleViewAllProjects = () => {
    window.open('https://github.com/idevanshu', '_blank');
  };

  return (
    <div className="max-w-6xl w-full px-6 md:px-10">
      <h2 className="text-5xl font-extrabold text-white mb-4 text-center relative">
        My Projects
        <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded"></div>
      </h2>
      <p className="text-white/70 text-center mb-12 text-lg">
        Featured projects showcasing my work in systems programming, networking, and infrastructure
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-white/80 group-hover:text-white transition-colors">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white flex-1 leading-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4 min-h-[120px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-white/30 hover:border-white/50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Repository
              </a>
              {project.secondaryLink && (
                <a
                  href={project.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-2 text-xs font-medium rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                >
                  + Related Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleViewAllProjects}
          className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 text-lg font-semibold rounded-full hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View All Projects on GitHub
        </button>
      </div>
    </div>
  );
};

export default Projects;
