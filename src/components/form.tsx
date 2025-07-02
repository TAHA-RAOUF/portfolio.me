import { useState } from 'react';
import FloatingCard from './FloatingCard';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <FloatingCard delay={0.4}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6 p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm"
      >
        {/* Hidden inputs required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div>
          <label className="block text-sm font-medium mb-2 text-cyan-400">Identity</label>
          <input
            type="text"
            name="identity"
            required
            className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-600 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
            placeholder="Your designation"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-purple-400">Communication Channel</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-600 focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
            placeholder="your@email.quantum"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-pink-400">Mission Brief</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-600 focus:border-pink-400 focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
            placeholder="Describe your quantum project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group"
        >
          <span className="relative z-10">TRANSMIT MESSAGE</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {success && (
          <p className="text-green-400 font-semibold text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </FloatingCard>
  );
}
