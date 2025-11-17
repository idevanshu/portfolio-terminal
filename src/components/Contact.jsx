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
      command: 'github@dev',
      description: 'Check out my code',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/idevanshu',
      link: 'https://linkedin.com/in/idevanshu',
      command: 'linkedin@dev',
      description: 'Professional network',
    },
    {
      icon: '✖️',
      label: 'X',
      value: 'x.com/iamdevanshu04',
      link: 'https://x.com/iamdevanshu04',
      command: 'x@dev',
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
    <div className="min-h-screen bg-[#0a0e27] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="mb-12 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-all mb-6 font-mono group"
          >
            <span className="mr-2 group-hover:mr-3 transition-all">←</span> cd ~
          </Link>

          <div className="font-mono">
            <div className="text-emerald-400 text-3xl sm:text-5xl mb-4">
              <span className="text-sky-400 animate-pulse">$</span> ./connect.sh
            </div>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Let's build something amazing together
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-mono">{availability.status}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Contact Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4 animate-fade-in">
              {contactMethods.map((contact, index) => (
                <div
                  key={index}
                  className="group bg-black border border-slate-700 rounded-lg p-5 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-3xl">{contact.icon}</div>

                    {/* Content */}
                    <div className="flex-1 font-mono">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-emerald-400 font-bold">{contact.label}</h3>
                        <span className="text-xs text-slate-500">{contact.command}</span>
                      </div>

                      <p className="text-slate-400 text-xs mb-2">{contact.description}</p>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(contact.value, contact.label)}
                          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded text-xs text-slate-300 transition"
                        >
                          {copied === contact.label ? '✓ Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Send Message Button */}
              <div className="bg-black border border-slate-700 rounded-lg p-5 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex items-center justify-between">
                  <div className="font-mono">
                    <h3 className="text-emerald-400 font-bold mb-1">Send Direct Message</h3>
                    <p className="text-slate-400 text-xs">Get in touch via contact form</p>
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 rounded text-emerald-400 font-mono text-sm transition-all"
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Availability Card */}
            <div className="bg-black border border-slate-700 rounded-lg p-5 hover:border-emerald-400 transition-all">
              <h3 className="text-emerald-400 font-mono font-bold mb-4 flex items-center gap-2">
                <span className="text-sky-400">$</span> status
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400">{availability.status}</span>
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
                  <span className="text-cyan-400">{availability.response}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-black border border-slate-700 rounded-lg p-5 hover:border-emerald-400 transition-all">
              <h3 className="text-emerald-400 font-mono font-bold mb-4 flex items-center gap-2">
                <span className="text-sky-400">$</span> quick_links
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <Link
                  to="/projects"
                  className="block text-cyan-400 hover:text-cyan-300 transition"
                >
                  → View Projects
                </Link>
                <a
                  href="https://drive.google.com/file/d/1QLbOpeWxc3czybv2Vuz5qB3YeY8NKdd7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition"
                >
                  → View Resume
                </a>
                <a
                  href="https://github.com/idevanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition"
                >
                  → GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal Component */}
      <ContactFormModal 
        showForm={showForm} 
        setShowForm={setShowForm} 
        availability={availability}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
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
