import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-[#F4EEE6] border-b border-[#ECE8E2]">
      <div className="max-w-[900px] mx-auto px-6 text-center space-y-6 animate-fade-up">
        <span className="text-xs uppercase tracking-[0.35em] text-[#69705A] font-medium block">
          Private Sanctuary Circle
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B]">
          Receive Seasonal Interior Journal &amp; Private Previews
        </h2>

        <p className="text-sm text-[#666666] font-light leading-relaxed max-w-lg mx-auto">
          Subscribe for quiet architectural insights, limited rug releases, and invitations to private trunk shows in Copenhagen.
        </p>

        {submitted ? (
          <div className="bg-[#FAF8F5] border border-[#69705A] p-6 rounded-[4px] max-w-md mx-auto flex items-center justify-center gap-3 text-[#505744] font-medium text-sm">
            <Check size={18} className="text-[#69705A]" />
            <span>Welcome to the Levina Home Journal Circle.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="w-full bg-[#FAF8F5] border border-[#ECE8E2] focus:border-[#B96A3C] text-[#2B2B2B] placeholder-[#8B8B8B] px-5 py-4 text-xs font-light rounded-[4px] outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#B96A3C] hover:bg-[#A75D36] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-[4px] whitespace-nowrap transition-colors shadow-xs"
            >
              Subscribe
            </button>
          </form>
        )}

        <span className="text-[10px] text-[#8B8B8B] tracking-wider uppercase block pt-2">
          We respect your peace. Unsubscribe anytime with one click.
        </span>
      </div>
    </section>
  );
};
