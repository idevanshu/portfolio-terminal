import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Resume download function
  const downloadResume = () => {
    const fileId = '1QLbOpeWxc3czybv2Vuz5qB3YeY8NKdd7';
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create a temporary anchor element to trigger download
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

Devanshu_Resume.pdf    100%[===================>]  

✓ Successfully downloaded 'Devanshu_Resume.pdf'`,
    };
  };

  const commands = {
    help: () => ({
      output: `Available commands:
  about       - Learn about me
  skills      - View my technical skills
  projects    - See my projects
  education   - View my education
  experience  - See my work experience
  contact     - Get my contact information
  resume      - Download my resume
  repo        - View GitHub repository
  clear       - Clear terminal
  help        - Show this help message`,
    }),
    
    about: () => ({
      output: `Hello, I'm Devanshu, a Computer Science undergraduate from India.
      
I'm into fast networking, computers, and building innovative solutions.
Currently exploring web3, AI agents, and automated AI-driven IoT systems.

I love solving complex problems and turning ideas into reality.`,
    }),

    skills: () => ({
      output: `Technical Skills:
Languages:
  • Python
  • C/C++, RUST
  • Javascript/NodeJS
  
Frontend:
  • React.js, JavaScript, HTML/CSS
  • Responsive Design, UI/UX
  
Backend:
  • Python (Flask, Streamlit)
  • Node.js, API Development
  
AI/ML:
  • Machine Learning, Deep Learning
  • PyTorch, NLP
  • Prompt Engineering
  
DevOps & Tools:
  • Git, Docker
  • FFmpeg, Video Processing
  • Linux, Network Programming`,
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

Email: [devanshupanigrahi@gmail.com](mailto:devanshupanigrahi@gmail.com)
GitHub: github.com/idevanshu
x.com(twitter): x.com/iamdevanshu04
LinkedIn: [https://www.linkedin.com/in/devanshu-panigrahi-507097362/](https://www.linkedin.com/in/devanshu-panigrahi-507097362/)
Location: India

Feel free to reach out for collaboration or opportunities!`,
    }),

    repo: () => ({
      output: `GitHub Repository: github.com/idevanshu
Star ⭐ the repo if you like it!`,
    }),

    // Resume download command
    resume: downloadResume,

    clear: () => ({ clear: true }),

    ls: () => ({
      output: `about.txt  skills.txt  projects.txt  education.txt  experience.txt  contact.txt  resume.pdf`,
    }),

    whoami: () => ({
      output: `Devanshu Panigrahi — a developer driven by passion.`,
    }),
  };

  useEffect(() => {
    setHistory([
      {
        type: 'output',
        content: `Welcome to Portfolio Terminal! 🚀
Type 'help' to see list of available commands.
Type 'repo' to check out the github.
Type 'resume' to download my resume.
--`,
      },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
    setHistory([...history, { type: 'command', content: cmd }]);

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      
      if (result.clear) {
        setHistory([]);
      } else {
        setHistory((prev) => [...prev, { type: 'output', content: result.output }]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: 'error',
          content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
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
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6">
      <div 
        className="w-full max-w-5xl h-[70vh] md:h-[75vh] lg:h-[80vh] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden flex flex-col"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="bg-[#323232] px-4 py-2.5 flex items-center border-b border-[#444]">
          <div className="flex gap-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer"></span>
          </div>
          <div className="flex-1 text-center text-[#f30909] text-xs md:text-sm select-none">
            Terminal you can hack in
          </div>
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="flex-1 p-4 md:p-5 lg:p-6 overflow-y-auto text-[#d4d4d4] text-sm md:text-base leading-relaxed cursor-text font-mono scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-[#1e1e1e]"
        >
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.type === 'command' && (
                <div className="flex">
                  <span className="text-green-500 font-bold select-none">Dev@hackit:$ </span>
                  <span className="text-white ml-1">{entry.content}</span>
                </div>
              )}
              {entry.type === 'output' && (
                <pre className="text-[#d4d4d4] my-2 whitespace-pre-wrap font-mono">
                  {entry.content}
                </pre>
              )}
              {entry.type === 'error' && (
                <span className="block text-red-500 my-1">{entry.content}</span>
              )}
            </div>
          ))}
          
          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center mt-1">
            <span className="text-green-500 font-bold select-none">Dev@hackit:$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm md:text-base ml-1 caret-green-500"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="flex flex-col items-center gap-3 cursor-pointer animate-bounce mt-8 md:mt-12 lg:mt-16"
        onClick={scrollToNext}
      >
        <span className="text-green-400 font-mono text-xs md:text-sm tracking-wider">
          SCROLL DOWN
        </span>
        <svg 
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-400" 
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
        <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-green-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 md:w-2 md:h-3 bg-green-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
