import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLangs, setShowLangs] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const langs = [
        { code: 'en', label: 'EN', full: 'English' },
        { code: 'am', label: 'አማ', full: 'አማርኛ' },
        { code: 'om', label: 'OM', full: 'Afaan Oromo' },
        { code: 'ti', label: 'ትግ', full: 'ትግርኛ' },
    ];

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/rooms', label: t('nav.rooms') },
        { path: '/gallery', label: t('nav.gallery') },
        { path: '/contact', label: t('nav.contact') },
    ];

    const activePath = location.pathname;

    return (
        <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950/80 border-white/10' : 'bg-white/80 border-slate-200'
            }`}>
            <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
                <Link to="/" className="text-lg sm:text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-display tracking-tight transition-all">
                    SOUTH RIFT VALLEY
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold transition-colors hover:text-emerald-400 ${activePath === link.path
                                ? 'text-emerald-400'
                                : theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-xl transition-all ${theme === 'dark' ? 'hover:bg-white/5 text-yellow-400' : 'hover:bg-slate-100 text-indigo-600'
                                }`}
                            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowLangs(!showLangs)}
                                className={`flex items-center space-x-2 transition-colors text-sm font-bold ${theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                                    }`}
                            >
                                <Globe className="w-4 h-4" />
                                <span>{langs.find(l => l.code === language)?.label}</span>
                            </button>

                            {showLangs && (
                                <div className={`absolute top-full right-0 mt-2 w-48 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 border ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
                                    }`}>
                                    {langs.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setLanguage(l.code);
                                                setShowLangs(false);
                                            }}
                                            className={`w-full px-5 py-3 text-left text-xs font-bold transition-colors ${language === l.code
                                                ? 'text-emerald-400 bg-emerald-500/5'
                                                : theme === 'dark' ? 'text-slate-400 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            {l.full}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <a
                        href="tel:+251000000000"
                        className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl text-white text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="uppercase tracking-widest">{t('hero.cta_call')}</span>
                    </a>
                </nav>

                {/* Mobile Icons */}
                <div className="flex items-center space-x-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-xl ${theme === 'dark' ? 'text-yellow-400' : 'text-indigo-600'
                            }`}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden animate-in slide-in-from-top duration-300 border-b ${theme === 'dark' ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                    }`}>
                    <div className="px-6 pt-2 pb-8 flex flex-col space-y-4">
                        <div className="flex gap-8">
                            {/* Left Side: Nav Links */}
                            <div className="flex-1 flex flex-col space-y-4 pt-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-base font-black font-display transition-colors ${activePath === link.path
                                            ? 'text-emerald-400'
                                            : theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Right Side: Language Selection */}
                            <div className="w-32 flex flex-col space-y-2 border-l border-white/5 pl-6 pt-2">
                                <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest font-black leading-tight">Lang / ቋንቋ</p>
                                {langs.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => {
                                            setLanguage(l.code);
                                            setIsOpen(false);
                                        }}
                                        className={`px-3 py-2.5 rounded-xl text-center text-[10px] font-black tracking-widest transition-all uppercase ${language === l.code
                                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                            : theme === 'dark' ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'
                                            }`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <a
                            href="tel:+251000000000"
                            className="flex items-center justify-center space-x-3 bg-emerald-500 py-3.5 rounded-xl text-white font-black text-sm shadow-xl shadow-emerald-500/30"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            <span className="uppercase tracking-widest">{t('hero.cta_call')}</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
