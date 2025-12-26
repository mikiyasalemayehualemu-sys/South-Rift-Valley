import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const WhatsAppButton = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const phoneNumber = "251000000000"; // Placeholder
    const message = encodeURIComponent(t('whatsapp_msg'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all group"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />

            {/* Tooltip on hover (desktop only) */}
            <span className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border ${theme === 'dark' ? 'bg-slate-800 text-white border-white/10' : 'bg-white text-slate-900 border-slate-200 shadow-xl'}`}>
                {t('hero.cta_whatsapp')}
            </span>

            {/* Notification ping */}
            <span className={`absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 rounded-full animate-bounce ${theme === 'dark' ? 'border-slate-950' : 'border-white'}`}></span>
        </a>
    );
};

export default WhatsAppButton;
