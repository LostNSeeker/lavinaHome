import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Newsletter: React.FC = () => {
  const { t } = useTranslation();
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
    <section className="py-24 bg-[#FDFBF7] border-b border-[#EDE6DC]">
      <div className="max-w-[850px] mx-auto px-6 text-center space-y-6 animate-fade-up bg-white p-8 sm:p-12 rounded-3xl border-2 border-dashed border-[#8EBBB0]/40 shadow-pillowy">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold bg-[#8EBBB0]/15 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Sparkles size={13} />
          <span>{t('newsletter.badge')}</span>
        </span>

        <h2 className="font-heading text-3xl sm:text-5xl font-medium text-[#2D2B2A]">
          {t('newsletter.title')}
        </h2>

        <p className="text-sm text-[#6B6661] font-normal leading-relaxed max-w-lg mx-auto">
          {t('newsletter.description')}
        </p>

        {submitted ? (
          <div className="bg-[#8EBBB0]/15 border border-[#8EBBB0] p-6 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 text-[#6C9F93] font-bold text-sm">
            <Check size={20} className="text-[#8EBBB0]" />
            <span>{t('newsletter.success')}</span>
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
              placeholder={t('newsletter.placeholder')}
              required
              className="w-full bg-[#FDFBF7] border border-[#EDE6DC] focus:border-[#E79685] text-[#2D2B2A] placeholder-[#9E9891] px-5 py-3.5 text-xs font-normal rounded-full outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#E79685] hover:bg-[#D47B68] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-bold rounded-full whitespace-nowrap transition-all shadow-pillowy-coral hover:scale-105 cursor-pointer"
            >
              {t('newsletter.button')}
            </button>
          </form>
        )}

        <span className="text-[11px] text-[#9E9891] tracking-wide block pt-1">
          {t('newsletter.disclaimer')}
        </span>
      </div>
    </section>
  );
};


