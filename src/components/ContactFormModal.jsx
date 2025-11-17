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
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipOnly = await ipResponse.json();
        setIpData({ ip: ipOnly.ip });
      } catch (err) {
        setIpData(null);
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(event.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!name || name.length < 2) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(''), 5000);
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(''), 5000);
      return;
    }
    if (!message || message.length < 10) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(''), 5000);
      return;
    }

    const emailText = `
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
      ${ipData ? `
      IPv4: ${ipData.ip || 'N/A'}
      Country: ${ipData.country_name || 'N/A'} (${ipData.country_code || 'N/A'})
      Region: ${ipData.region || 'N/A'}
      City: ${ipData.city || 'N/A'}
      Postal: ${ipData.postal || 'N/A'}
      Coordinates: ${ipData.latitude || 'N/A'}, ${ipData.longitude || 'N/A'}
      Timezone: ${ipData.timezone || 'N/A'}
      ISP: ${ipData.org || 'N/A'}
      ASN: ${ipData.asn || 'N/A'}
      Network: ${ipData.network || 'N/A'}
      Currency: ${ipData.currency || 'N/A'}
      Languages: ${ipData.languages || 'N/A'}
      ` : 'Metadata unavailable'}
      Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      UTC: ${new Date().toUTCString()}
      User Agent: ${navigator.userAgent}
      Platform: ${navigator.platform}
      Language: ${navigator.language}
      Screen: ${window.screen.width}x${window.screen.height}
      Viewport: ${window.innerWidth}x${window.innerHeight}
      Color Depth: ${window.screen.colorDepth}-bit
      Timezone Offset: UTC${new Date().getTimezoneOffset() / -60}
      Referrer: ${document.referrer || 'Direct visit'}
      This message was sent from idevanshu.com contact form
    `;

    const submitData = new FormData();
    submitData.append("access_key", "bffafb83-da24-4d2a-81d1-37342519f5f1");
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
        }, 1500);
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
        className="bg-gradient-to-br from-[#0a0e27] via-[#0b2031] to-[#0a0e29] border-2 border-cyan-400 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-cyan-400 text-2xl flex items-center gap-2 font-bold">
            <span className="text-teal-400">$</span> send_message.sh
          </h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-slate-400 hover:text-cyan-400 text-2xl transition"
          >
            ✕
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <input type="checkbox" name="botcheck" className="hidden" />
          <div>
            <label className="block text-cyan-400 text-sm mb-2 font-semibold">
              <span className="text-teal-400">{'$'}</span> Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              minLength="2"
              disabled={formStatus === 'sending'}
              className="w-full bg-[#0b2031] border border-[#38404d] rounded px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-cyan-400 text-sm mb-2 font-semibold">
              <span className="text-teal-400">{'$'}</span> Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              disabled={formStatus === 'sending'}
              className="w-full bg-[#0b2031] border border-[#38404d] rounded px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-cyan-400 text-sm mb-2 font-semibold">
              <span className="text-teal-400">{'$'}</span> Message
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="6"
              required
              minLength="10"
              disabled={formStatus === 'sending'}
              className="w-full bg-[#0b2031] border border-[#38404d] rounded px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600 resize-y disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400 text-cyan-400 py-3 rounded font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-teal-400 hover:text-teal-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            {formStatus === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-cyan-400/30 border-t-teal-400 rounded-full animate-spin"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>$ ./send</span>
                <span>→</span>
              </>
            )}
          </button>
          {formStatus === 'success' && (
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded px-4 py-3 flex items-center gap-3 text-cyan-400 text-sm animate-fade-in font-semibold">
              <span>✓</span>
              <span>Message sent! I'll respond within {availability?.response || '24-48 hours'}.</span>
            </div>
          )}
          {formStatus === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded px-4 py-3 flex items-center gap-3 text-red-400 text-sm animate-fade-in font-semibold">
              <span>✗</span>
              <span>Error sending message. Please check your inputs and try again.</span>
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
