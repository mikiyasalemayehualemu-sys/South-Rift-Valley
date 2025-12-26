import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer className={`transition-colors duration-300 pt-24 pb-12 border-t ${theme === 'dark' ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {/* Brand */}
                <div className="space-y-8">
                    <Link to="/" className="text-3xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-display tracking-tight">
                        SOUTH RIFT VALLEY
                    </Link>
                    <p className={`leading-relaxed max-w-xs font-sans font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {t('hero.subtitle')}
                    </p>
                    <div className="flex space-x-5">
                        <a href="#" className={`p-3 rounded-2xl transition-all hover:scale-110 shadow-lg ${theme === 'dark' ? 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-white text-slate-500 hover:text-emerald-600 shadow-slate-200'}`}>
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className={`p-3 rounded-2xl transition-all hover:scale-110 shadow-lg ${theme === 'dark' ? 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-white text-slate-500 hover:text-cyan-600 shadow-slate-200'}`}>
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className={`font-black uppercase tracking-[0.2em] text-xs mb-8 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('nav.home')}</h3>
                    <ul className="space-y-5">
                        <li><Link to="/about" className={`font-bold transition-colors hover:text-emerald-500 font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t('nav.about')}</Link></li>
                        <li><Link to="/rooms" className={`font-bold transition-colors hover:text-emerald-500 font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t('nav.rooms')}</Link></li>
                        <li><Link to="/gallery" className={`font-bold transition-colors hover:text-emerald-500 font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t('nav.gallery')}</Link></li>
                        <li><Link to="/contact" className={`font-bold transition-colors hover:text-emerald-500 font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t('nav.contact')}</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className={`font-black uppercase tracking-[0.2em] text-xs mb-8 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('common.contact_us')}</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start space-x-4">
                            <div className="bg-emerald-500/10 p-2 rounded-lg">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                            </div>
                            <span className={`text-sm font-bold leading-relaxed font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t('hero.address')}</span>
                        </li>
                        <li className="flex items-center space-x-4 group">
                            <div className="bg-emerald-500/10 p-2 rounded-lg group-hover:bg-emerald-500 transition-colors">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0 group-hover:text-white" />
                            </div>
                            <a href="tel:+251000000000" className={`font-bold transition-colors font-sans ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-emerald-600'}`}>+251 000 000 000</a>
                        </li>
                        <li className="flex items-center space-x-4 group">
                            <div className="bg-cyan-500/10 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
                                <Mail className="w-5 h-5 text-cyan-500 shrink-0 group-hover:text-white" />
                            </div>
                            <a href="mailto:info@riftvalleyhotel.com" className={`font-bold transition-colors font-sans ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-cyan-600'}`}>info@riftvalleyhotel.com</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div>
                    <h3 className={`font-black uppercase tracking-[0.2em] text-xs mb-8 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('common.book_now')}</h3>
                    <p className={`mb-8 font-sans font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t('hero.subtitle').split('.')[0]}.</p>
                    <Link
                        to="/contact"
                        className="block w-full group relative bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative z-10 uppercase tracking-widest text-xs font-display">{t('common.book_now')}</span>
                    </Link>
                </div>
            </div>

            <div className={`max-w-7xl mx-auto px-6 mt-24 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm font-bold font-sans ${theme === 'dark' ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
                <p>&copy; {year} SOUTH RIFT VALLEY Hotel. {t('common.rights_reserved')}</p>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    <p>{t('common.developer_tag')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
