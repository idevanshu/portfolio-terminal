import React, { useState, useEffect, useRef } from 'react';

const TerminalWidget = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [fullHistory, setFullHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const terminalRef = useRef(null);
  const hiddenInputRef = useRef(null);
  const modalInputRef = useRef(null);

  const downloadResume = () => {
    const fileId = '1QLbOpeWxc3czybv2Vuz5qB3YeY8NKdd7';
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement('a');
    link.href = directDownloadUrl;
    link.setAttribute('download', 'Devanshu_Resume.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return {
      output: `Connecting to drive.google.com...
Connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [application/pdf]
Saving to: 'Devanshu_Resume.pdf'

Devanshu_Resume.pdf   100%[===================>]

✓ Successfully downloaded 'Devanshu_Resume.pdf'`,
    };
  };

  const commands = {
    help: () => ({
      output: `Available commands:
  about      - Learn about me
  projects   - See my projects
  education  - View my education
  experience - See my work experience
  contact    - Get my contact information
  resume     - Download my resume
  repo       - View GitHub repository
  clear      - Clear terminal
  help       - Show this help message`,
    }),

    about: () => ({
      output: `Hello, I'm Devanshu, a Computer Science undergraduate from India.
I'm into fast networking, computers, and building innovative solutions.
Currently exploring web3, AI agents, and automated AI-driven IoT systems.
I love solving complex problems and turning ideas into reality.`,
    }),

    projects: () => ({
      output: `Featured Projects:

1. Video Chat Application
   • Real-time video streaming with AV1 codec
   • 4K streaming optimization
   • Tech: React, FFmpeg, WebRTC

2. p2pfiletransferRust
   • Lightweight P2P file sharing over TCP
   • Async Rust backend with send/receive modes
   • Works behind NAT using port-forwarding/ngrok
   • Tech: Rust, Tokio, Clap

3. Portfolio Website
   • Linux terminal-style interface
   • Interactive CLI experience
   • Tech: React.js, Tailwind CSS

4. Quotation Generation System
   • PDF export functionality
   • Automated document generation
   • Tech: Python, PDF processing

Type 'repo' to view the GitHub repository.`,
    }),

    education: () => ({
      output: `Education:

Bachelor of Technology in Computer Science (AI/ML Specialization)
  • Core Focus: Artificial Intelligence & Machine Learning
  • Availability: Open to Work
  • Location: India`,
    }),

    experience: () => ({
      output: `Work Experience:

Full-Stack Developer (Personal Projects)
  • Built multiple production-ready web applications
  • Implemented video streaming with advanced codec optimization
  • Developed educational technology platforms
  • Created automated document generation systems

AI/ML Development
  • Prompt engineering and LLM integration
  • NLP and language processing applications
  • Test automation and mock test creation

Skills: React.js, Python, Flask, Streamlit, FFmpeg, Docker, API Development`,
    }),

    contact: () => ({
      output: `Contact Information:
  GitHub:   github.com/idevanshu
  X:        x.com/iamdevanshu04
  LinkedIn: www.linkedin.com/in/idevanshu
  Location: India

Feel free to reach out for collaboration or opportunities!`,
    }),

    repo: () => ({
      output: `GitHub Repository:
github.com/idevanshu

Star ⭐ the repo if you like it!`,
    }),

    resume: downloadResume,
    clear: () => ({ clear: true }),

    ls: () => ({
      output: `about.txt
projects.txt
education.txt
experience.txt
contact.txt
resume.pdf`,
    }),

    whoami: () => ({
      output: `Devanshu Panigrahi — a developer driven by passion.`,
    }),
  };

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMsg = {
      type: 'output',
      content: `Welcome to Portfolio Terminal! 🚀
Type 'help' to see list of available commands.
Type 'repo' to check out the GitHub.
Type 'resume' to download my resume.
--`,
    };
    setHistory([welcomeMsg]);
    setFullHistory([welcomeMsg]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Handle maximize/minimize - update visible history
  useEffect(() => {
    if (isMaximized) {
      // When maximized, show full history
      setHistory(fullHistory);
    } else {
      // When minimized, show only last 2 conversations
      const welcomeMessage = fullHistory[0];
      const recentEntries = fullHistory.slice(-4);

      if (fullHistory.length > 5) {
        setHistory([welcomeMessage, ...recentEntries]);
      } else {
        setHistory(fullHistory);
      }
    }
  }, [isMaximized, fullHistory]);

  // Focus management
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMaximized && modalInputRef.current) {
        modalInputRef.current.focus();
      } else if (!isMaximized && hiddenInputRef.current) {
        hiddenInputRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isMaximized]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newCommandEntry = { type: 'command', content: cmd };

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();

      if (result.clear) {
        const welcomeMsg = {
          type: 'output',
          content: ``,
        };
        setHistory([welcomeMsg]);
        setFullHistory([welcomeMsg]);
      } else {
        const newOutputEntry = { type: 'output', content: result.output };
        setFullHistory((prev) => [...prev, newCommandEntry, newOutputEntry]);
      }
    } else {
      const errorEntry = {
        type: 'error',
        content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
      };
      setFullHistory((prev) => [...prev, newCommandEntry, errorEntry]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
      setInput('');
    }
  };

  const focusTerminal = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.focus();
    }
  };

  const focusModalTerminal = () => {
    if (modalInputRef.current) {
      modalInputRef.current.focus();
    }
  };

  return (
    <>
      {/* Regular Terminal */}
      <div className="w-full lg:w-1/2">
        <div className="rounded-xl border border-slate-700 bg-black shadow-lg overflow-hidden">
          <div className="flex items-center justify-center px-4 py-2 border-b border-slate-700 bg-[#323232] relative">
            <div className="absolute left-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <button
                type="button"
                onClick={() => setIsMaximized(true)}
                className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-400 transition"
                aria-label="Maximize terminal"
              />
            </div>

            <div className="text-xs text-red-400 font-mono">
              Terminal you can hack in
            </div>
          </div>

          <div
            ref={terminalRef}
            onClick={focusTerminal}
            className="px-4 py-4 font-mono text-sm text-slate-100 bg-black h-[450px] overflow-y-auto cursor-text"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-1 whitespace-pre-wrap">
                {entry.type === 'command' && (
                  <div>
                    <span className="text-emerald-400">Dev@hackit</span>
                    <span className="text-sky-400">:$ </span>
                    <span>{entry.content}</span>
                  </div>
                )}

                {entry.type === 'output' && (
                  <div className="text-slate-100">{entry.content}</div>
                )}

                {entry.type === 'error' && (
                  <div className="text-red-400">{entry.content}</div>
                )}
              </div>
            ))}

            <div className="flex items-center">
              <span className="text-emerald-400">Dev@hackit</span>
              <span className="text-sky-400">:$ </span>
              <span className="text-slate-100">{input}</span>
              <span className="animate-pulse text-slate-100">|</span>
            </div>

            <input
              ref={hiddenInputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute opacity-0 pointer-events-none"
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Modal: Maximized terminal */}
      {isMaximized && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl rounded-xl border border-slate-700 bg-black shadow-2xl overflow-hidden">
            <div className="flex items-center justify-center px-4 py-2 border-b border-slate-700 bg-[#323232] relative">
              <div className="absolute left-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMaximized(false)}
                  className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 transition"
                  aria-label="Close terminal"
                />
                <button
                  type="button"
                  onClick={() => setIsMaximized(false)}
                  className="h-3 w-3 rounded-full bg-yellow-400 hover:bg-yellow-300 transition"
                  aria-label="Minimize terminal"
                />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="text-sm text-red-400 font-mono">
                Terminal you can hack in
              </div>
            </div>

            <div
              onClick={focusModalTerminal}
              className="px-4 py-4 font-mono text-sm text-slate-100 bg-black h-96 sm:h-[36rem] overflow-y-auto cursor-text relative"
            >
              {history.map((entry, index) => (
                <div key={index} className="mb-1 whitespace-pre-wrap">
                  {entry.type === 'command' && (
                    <div>
                      <span className="text-emerald-400">Dev@hackit</span>
                      <span className="text-sky-400">:$ </span>
                      <span>{entry.content}</span>
                    </div>
                  )}

                  {entry.type === 'output' && (
                    <div className="text-slate-100">{entry.content}</div>
                  )}

                  {entry.type === 'error' && (
                    <div className="text-red-400">{entry.content}</div>
                  )}
                </div>
              ))}

              <div className="flex items-center">
                <span className="text-emerald-400">Dev@hackit</span>
                <span className="text-sky-400">:$ </span>
                <span className="text-slate-100">{input}</span>
                <span className="animate-pulse text-slate-100">|</span>
              </div>

              <input
                ref={modalInputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute opacity-0 pointer-events-none"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalWidget;
