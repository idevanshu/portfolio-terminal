import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

const Contact = () => {
  const [copied, setCopied] = useState('');
  const [showForm, setShowForm] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const contactMethods = [
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/idevanshu',
      link: 'https://github.com/idevanshu',
      username: '@idevanshu',
      description: 'Check out my code',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/idevanshu',
      link: 'https://linkedin.com/in/idevanshu',
      username: '@idevanshu',
      description: 'Professional network',
    },
    {
      icon: '✖️',
      label: 'X',
      value: 'x.com/iamdevanshu04',
      link: 'https://x.com/iamdevanshu04',
      username: '@iamdevanshu04',
      description: 'Follow for updates',
    },
  ];

  const availability = {
    status: 'Available',
    location: 'India',
    timezone: 'IST (GMT+5:30)',
    response: '< 24 hours',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0b2031] to-[#0a0e29] px-4 py-10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0b2031]/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all mb-6 font-mono group"
          >
            <span className="mr-2 group-hover:mr-3 transition-all">←</span> cd ~
          </Link>
          <div className="font-mono">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 text-3xl sm:text-5xl mb-4 font-bold">
              <span className="text-cyan-400 animate-pulse">$</span> ./connect.sh
            </div>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Let's build something amazing together
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full backdrop-blur-sm shadow-lg shadow-cyan-500/20">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-500" />
              <span className="text-cyan-400 text-sm font-mono">{availability.status}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="space-y-4 animate-fade-in">
              {contactMethods.map((contact, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md border border-[#38404d]/50 rounded-lg p-5 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">{contact.icon}</div>
                    <div className="flex-1 font-mono">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-cyan-400 font-bold">{contact.label}</h3>
                        <span className="text-xs text-teal-400/80">{contact.username}</span>
                      </div>
                      <p className="text-slate-400 text-xs mb-3">{contact.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(contact.value, contact.label)}
                          className={`px-4 py-2 bg-[#0b2031] border border-[#38404d] rounded text-xs text-cyan-300 transition hover:bg-cyan-950 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400 ${copied === contact.label ? 'border-cyan-400 bg-cyan-950 text-cyan-400' : ''
                            }`}
                        >
                          {copied === contact.label ? '✓ Copied' : 'Copy'}
                        </button>
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 border-2 border-cyan-400 text-cyan-300 rounded text-xs font-semibold shadow-cyan-500/30 hover:from-cyan-500/60 hover:to-teal-500/60 hover:border-teal-400 hover:text-teal-200 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                        >
                          Open
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-gradient-to-r from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md border border-[#38404d]/50 rounded-lg p-5 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <div className="font-mono">
                    <h3 className="text-cyan-400 font-bold mb-1">Send Direct Message</h3>
                    <p className="text-slate-400 text-xs">Get in touch via contact form</p>
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 border border-cyan-500/50 hover:border-cyan-400 rounded text-cyan-400 font-mono text-sm transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/40"
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md border border-[#38404d]/50 rounded-lg p-5 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-500/20 transition-all">
              <h3 className="text-cyan-400 font-mono font-bold mb-4 flex items-center gap-2">
                <span className="text-teal-400">$</span> status
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-cyan-400">{availability.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-100">{availability.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Timezone:</span>
                  <span className="text-slate-100">{availability.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Response:</span>
                  <span className="text-teal-400">{availability.response}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0b2031]/50 to-[#0a0e27]/50 backdrop-blur-md border border-[#38404d]/50 rounded-lg p-5 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-500/20 transition-all">
              <h3 className="text-cyan-400 font-mono font-bold mb-4 flex items-center gap-2">
                <span className="text-teal-400">$</span> quick_links
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <Link
                  to="/projects"
                  className="block text-teal-400 hover:text-teal-300 transition hover:translate-x-1 duration-200"
                >
                  → View Projects
                </Link>
                <a
                  href="https://drive.google.com/file/d/1QLbOpeWxc3czybv2Vuz5qB3YeY8NKdd7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal-400 hover:text-teal-300 transition hover:translate-x-1 duration-200"
                >
                  → View Resume
                </a>
                <a
                  href="https://github.com/idevanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal-400 hover:text-teal-300 transition hover:translate-x-1 duration-200"
                >
                  → GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal
        showForm={showForm}
        setShowForm={setShowForm}
        availability={availability}
      />
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
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
