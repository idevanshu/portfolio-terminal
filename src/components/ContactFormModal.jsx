import React, { useState, useEffect } from 'react';

const ContactFormModal = ({ showForm, setShowForm, availability }) => {
  const [formStatus, setFormStatus] = useState('');
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    if (showForm && !ipData) {
      fetchIPData();
    }
  }, [showForm]);

  const fetchIPData = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
      // Fallback to ipify if ipapi.co fails
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipOnly = await ipResponse.json();
        setIpData({ ip: ipOnly.ip });
      } catch (err) {
        console.error('Error fetching IP:', err);
        setIpData(null);
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(event.target);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create formatted email with metadata (user won't see this)
    const emailHTML = `
      <div style="font-family: 'Courier New', monospace; background: #0a0e27; color: #00ff00; padding: 20px; border-radius: 8px;">
        <h2 style="color: #00ff00; border-bottom: 2px solid #00ff00; padding-bottom: 10px;">
          📧 New Contact Form Submission
        </h2>
        
        <!-- Contact Information -->
        <div style="margin: 20px 0; padding: 15px; background: #000; border: 1px solid #00ff00; border-radius: 5px;">
          <h3 style="color: #22d3ee; margin-top: 0;">📋 Contact Details</h3>
          <p><strong style="color: #00ff00;">Name:</strong> ${name}</p>
          <p><strong style="color: #00ff00;">Email:</strong> ${email}</p>
          <p><strong style="color: #00ff00;">Message:</strong></p>
          <p style="background: #1a1a1a; padding: 10px; border-left: 3px solid #00ff00;">${message}</p>
        </div>

        <!-- Metadata Section (Hidden from user) -->
        <div style="margin: 20px 0; padding: 15px; background: #000; border: 1px solid #22d3ee; border-radius: 5px;">
          <h3 style="color: #22d3ee; margin-top: 0;">🌐 Sender Metadata</h3>
          
          ${ipData ? `
            <p><strong style="color: #00ff00;">IPv4 Address:</strong> ${ipData.ip || 'N/A'}</p>
            ${ipData.version === 'IPv6' ? `<p><strong style="color: #00ff00;">IPv6 Address:</strong> ${ipData.ip}</p>` : ''}
            
            <h4 style="color: #22d3ee; margin-top: 15px;">📍 Location Information</h4>
            <p><strong style="color: #00ff00;">Country:</strong> ${ipData.country_name || 'N/A'} (${ipData.country_code || 'N/A'})</p>
            <p><strong style="color: #00ff00;">Region:</strong> ${ipData.region || 'N/A'}</p>
            <p><strong style="color: #00ff00;">City:</strong> ${ipData.city || 'N/A'}</p>
            <p><strong style="color: #00ff00;">Postal Code:</strong> ${ipData.postal || 'N/A'}</p>
            <p><strong style="color: #00ff00;">Coordinates:</strong> ${ipData.latitude || 'N/A'}, ${ipData.longitude || 'N/A'}</p>
            <p><strong style="color: #00ff00;">Timezone:</strong> ${ipData.timezone || 'N/A'}</p>
            
            <h4 style="color: #22d3ee; margin-top: 15px;">🌍 Network Information</h4>
            <p><strong style="color: #00ff00;">ISP:</strong> ${ipData.org || 'N/A'}</p>
            <p><strong style="color: #00ff00;">ASN:</strong> ${ipData.asn || 'N/A'}</p>
            <p><strong style="color: #00ff00;">Network:</strong> ${ipData.network || 'N/A'}</p>
            <p><strong style="color: #00ff00;">Currency:</strong> ${ipData.currency || 'N/A'} (${ipData.currency_name || 'N/A'})</p>
            <p><strong style="color: #00ff00;">Languages:</strong> ${ipData.languages || 'N/A'}</p>
          ` : '<p style="color: #888;">Metadata unavailable</p>'}
          
          <h4 style="color: #22d3ee; margin-top: 15px;">🕐 Timestamp</h4>
          <p><strong style="color: #00ff00;">Sent at:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          <p><strong style="color: #00ff00;">UTC:</strong> ${new Date().toUTCString()}</p>
        </div>

        <!-- Device Information -->
        <div style="margin: 20px 0; padding: 15px; background: #000; border: 1px solid #a855f7; border-radius: 5px;">
          <h3 style="color: #a855f7; margin-top: 0;">💻 Device & Browser Info</h3>
          <p><strong style="color: #00ff00;">User Agent:</strong> ${navigator.userAgent}</p>
          <p><strong style="color: #00ff00;">Platform:</strong> ${navigator.platform}</p>
          <p><strong style="color: #00ff00;">Language:</strong> ${navigator.language}</p>
          <p><strong style="color: #00ff00;">Screen Resolution:</strong> ${window.screen.width}x${window.screen.height}</p>
          <p><strong style="color: #00ff00;">Viewport:</strong> ${window.innerWidth}x${window.innerHeight}</p>
          <p><strong style="color: #00ff00;">Color Depth:</strong> ${window.screen.colorDepth}-bit</p>
          <p><strong style="color: #00ff00;">Timezone Offset:</strong> UTC${new Date().getTimezoneOffset() / -60}</p>
          <p><strong style="color: #00ff00;">Referrer:</strong> ${document.referrer || 'Direct visit'}</p>
        </div>

        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          📨 This message was sent from idevanshu.com contact form
        </p>
      </div>
    `;

    // Plain text version
    const emailText = `
═══════════════════════════════════════
📧 NEW CONTACT FORM SUBMISSION
═══════════════════════════════════════

📋 CONTACT DETAILS
─────────────────────────────────────
Name: ${name}
Email: ${email}

Message:
${message}

🌐 SENDER METADATA
─────────────────────────────────────
${ipData ? `
IPv4: ${ipData.ip || 'N/A'}
${ipData.version === 'IPv6' ? `IPv6: ${ipData.ip}` : ''}

📍 LOCATION:
Country: ${ipData.country_name || 'N/A'} (${ipData.country_code || 'N/A'})
Region: ${ipData.region || 'N/A'}
City: ${ipData.city || 'N/A'}
Postal: ${ipData.postal || 'N/A'}
Coordinates: ${ipData.latitude || 'N/A'}, ${ipData.longitude || 'N/A'}
Timezone: ${ipData.timezone || 'N/A'}

🌍 NETWORK:
ISP: ${ipData.org || 'N/A'}
ASN: ${ipData.asn || 'N/A'}
Network: ${ipData.network || 'N/A'}
Currency: ${ipData.currency || 'N/A'}
` : 'Metadata unavailable'}

💻 DEVICE INFO:
User Agent: ${navigator.userAgent}
Platform: ${navigator.platform}
Language: ${navigator.language}
Screen: ${window.screen.width}x${window.screen.height}
Viewport: ${window.innerWidth}x${window.innerHeight}
Referrer: ${document.referrer || 'Direct visit'}

🕐 TIMESTAMP:
IST: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
UTC: ${new Date().toUTCString()}

═══════════════════════════════════════
Sent from idevanshu.com contact form
    `;

    // Prepare form data for Web3Forms
    const submitData = new FormData();
    submitData.append("access_key", "bffafb83-da24-4d2a-81d1-37342519f5f1"); // ← REPLACE WITH YOUR KEY
    submitData.append("name", name);
    submitData.append("email", email);
    submitData.append("message", emailText);
    submitData.append("subject", `🔔 New Contact from ${name}`);
    submitData.append("from_name", "idevanshu.com Portfolio");
    submitData.append("replyto", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        event.target.reset();
        setTimeout(() => {
          setFormStatus('');
          setShowForm(false);
          setIpData(null);
        }, 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  if (!showForm) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={() => setShowForm(false)}
    >
      <div 
        className="bg-[#0a0e27] border-2 border-emerald-400 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Form Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-emerald-400 text-2xl font-mono flex items-center gap-2">
            <span className="text-sky-400">$</span> send_message.sh
          </h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-slate-400 hover:text-emerald-400 text-2xl transition"
          >
            ✕
          </button>
        </div>

        {/* Form - NO VISIBLE METADATA */}
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Honeypot for spam prevention */}
          <input type="checkbox" name="botcheck" className="hidden" />

          {/* Name Field */}
          <div>
            <label className="block text-emerald-400 font-mono text-sm mb-2">
              <span className="text-sky-400">{'>'}</span> name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              disabled={formStatus === 'sending'}
              className="w-full bg-black border border-slate-700 rounded px-4 py-3 text-slate-300 font-mono focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-emerald-400 font-mono text-sm mb-2">
              <span className="text-sky-400">{'>'}</span> email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              disabled={formStatus === 'sending'}
              className="w-full bg-black border border-slate-700 rounded px-4 py-3 text-slate-300 font-mono focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-emerald-400 font-mono text-sm mb-2">
              <span className="text-sky-400">{'>'}</span> message:
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="6"
              required
              disabled={formStatus === 'sending'}
              className="w-full bg-black border border-slate-700 rounded px-4 py-3 text-slate-300 font-mono focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 resize-y disabled:opacity-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 py-3 font-mono rounded transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {formStatus === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>$ ./send</span>
                <span>→</span>
              </>
            )}
          </button>

          {/* Success Message */}
          {formStatus === 'success' && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded px-4 py-3 flex items-center gap-3 text-emerald-400 font-mono text-sm animate-fade-in">
              <span>✓</span>
              <span>Message sent! I'll respond within {availability.response}.</span>
            </div>
          )}

          {/* Error Message */}
          {formStatus === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded px-4 py-3 flex items-center gap-3 text-red-400 font-mono text-sm animate-fade-in">
              <span>✗</span>
              <span>Error sending message. Please try again.</span>
            </div>
          )}
        </form>
      </div>

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

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactFormModal;
