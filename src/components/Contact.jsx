import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/devanshu-panigrahi-507097362/',
      // handle: '@devanshu-panigrahi',
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://x.com/iamdevanshu04',
      // handle: '@idevanshu04',
      color: 'from-sky-400 to-blue-500',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/idevanshu',
      // handle: '@idevanshu',
      color: 'from-gray-400 to-gray-600',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:devanshupanigrahi@gmail.com',
      // handle: 'devanshupanigrahi@gmail.com',
      color: 'from-purple-400 to-pink-500',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-6xl w-full px-6 md:px-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-7xl font-black text-white mb-6 relative inline-block">
          Let's Connect
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
        </h2>
        <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mt-8">
          Always open to <span className="text-white font-semibold">cool opportunities</span>, 
          fun <span className="text-white font-semibold">collaborations</span>, 
          or just chatting about <span className="text-white font-semibold">tech</span>.
        </p>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 flex flex-col items-center gap-4 hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
            aria-label={link.name}
          >
            {/* Gradient Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
            
            {/* Icon Container with Animation */}
            <div className="relative z-10 w-16 h-16 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {link.icon}
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 text-center">
              <span className="text-white font-bold text-xl mb-1 block group-hover:text-white/90 transition-colors">
                {link.name}
              </span>
              <span className="text-white/60 text-sm font-mono group-hover:text-white/80 transition-colors">
                {link.handle}
              </span>
            </div>

            {/* Hover Arrow Indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got a Project in Mind?
          </h3>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Whether it's building something amazing together, discussing tech, 
            or just saying hi — I'm all ears. Drop me a message on any platform above!
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:devanshupanigrahi@gmail.com"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 text-base font-semibold rounded-full hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a
              href="https://github.com/idevanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white/90 px-8 py-4 text-base font-semibold rounded-full hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12">
        <p className="text-white/40 text-sm font-mono">
          Open to opportunities
        </p>
      </div>
    </div>
  );
};

export default Contact;
