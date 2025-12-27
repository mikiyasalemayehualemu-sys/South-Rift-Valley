import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Shield, ChevronRight, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';

const Contact = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We will contact you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={`transition-colors duration-300 min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <SEO
                title={t('nav.contact')}
                description="Get in touch with us for bookings, inquiries, or directions. We are located in Addis Ababa, Ethiopia."
            />

            {/* Premium Header */}
            <section className="py-24 px-4 text-center relative overflow-hidden reveal">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    <h1 className={`text-4xl md:text-8xl font-black font-display leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{t('nav.contact')}</h1>
                    <p className={`max-w-2xl mx-auto text-xl font-sans leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {t('contact.subtitle')}
                    </p>
                </div>
            </section>

            <section className={`py-24 px-4 border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-100'}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info & Premium Form */}
                    <div className="space-y-16 reveal">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`p-8 glass rounded-[2.5rem] border hover:border-emerald-500/30 transition-all group ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-50'}`}>
                                <div className="bg-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-emerald-500/20">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h4 className={`font-black text-xl mb-2 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('hero.cta_call')}</h4>
                                <a href="tel:+251000000000" className={`transition-colors font-sans text-lg font-bold ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-emerald-600'}`}>+251 000 000 000</a>
                            </div>
                            <div className={`p-8 glass rounded-[2.5rem] border hover:border-emerald-500/30 transition-all group ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-50'}`}>
                                <div className="bg-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-cyan-500/20">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h4 className={`font-black text-xl mb-2 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('contact.email_us')}</h4>
                                <a href="mailto:info@riftvalleyhotel.com" className={`transition-colors font-sans font-bold ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-cyan-600'}`}>info@riftvalleyhotel.com</a>
                            </div>
                        </div>

                        {/* Enhanced Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`p-8 glass rounded-[2.5rem] border space-y-6 ${theme === 'dark' ? 'border-emerald-500/10' : 'border-slate-200 bg-slate-50/50'}`}>
                                <div className="flex items-center space-x-3">
                                    <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
                                    <h5 className={`font-black text-xs uppercase tracking-[0.2em] font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('features.services')}</h5>
                                </div>
                                <ul className={`grid grid-cols-2 gap-3 text-sm font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>{t('features.dine_in')}</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>{t('features.takeaway')}</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>{t('features.delivery')}</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>{t('features.outdoor_seating')}</li>
                                </ul>
                            </div>
                            <div className={`p-8 glass rounded-[2.5rem] border space-y-6 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200 bg-slate-50/50'}`}>
                                <div className="flex items-center space-x-3">
                                    <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
                                    <h5 className={`font-black text-xs uppercase tracking-[0.2em] font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('features.payments')}</h5>
                                </div>
                                <div className="space-y-4">
                                    <div className={`flex items-center space-x-3 text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                        <Shield className="w-4 h-4 text-cyan-500" />
                                        <span>{t('contact.secure_cards')}</span>
                                    </div>
                                    <div className={`flex items-center space-x-3 text-sm font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]"></div>
                                        <span>{t('contact.nfc_enabled')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Form */}
                        <form onSubmit={handleSubmit} className={`p-10 md:p-14 rounded-[3.5rem] border space-y-8 shadow-2xl relative overflow-hidden group ${theme === 'dark' ? 'bg-slate-950 border-white/5' : 'bg-white border-slate-100'}`}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                            <div className="space-y-4">
                                <label className={`text-xs font-black uppercase tracking-widest ml-4 font-display ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('contact.client_name')}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full border rounded-2xl px-8 py-5 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-sans font-bold placeholder-slate-500 ${theme === 'dark' ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                                    placeholder={t('contact.client_name_placeholder')}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className={`text-xs font-black uppercase tracking-widest ml-4 font-display ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('contact.contact_method')}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full border rounded-2xl px-8 py-5 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-sans font-bold placeholder-slate-500 ${theme === 'dark' ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                                    placeholder={t('contact.contact_method_placeholder')}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className={`text-xs font-black uppercase tracking-widest ml-4 font-display ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('contact.message')}</label>
                                <textarea
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`w-full border rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-sans font-bold resize-none placeholder-slate-500 ${theme === 'dark' ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                                    placeholder={t('contact.message_placeholder')}
                                ></textarea>
                            </div>
                            <button className="w-full group relative bg-emerald-500 hover:bg-emerald-600 text-white font-black py-6 rounded-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center space-x-3 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <Send className="w-6 h-6" />
                                <span className="text-lg uppercase tracking-widest font-display font-black">{t('contact.send_to_concierge')}</span>
                            </button>
                        </form>
                    </div>

                    {/* Compact Map & Support */}
                    <div className="space-y-10 reveal" style={{ animationDelay: '300ms' }}>
                        <div className={`relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border h-[250px] md:h-[300px] shadow-2xl group transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-slate-100 border-slate-200'}`}>
                            <iframe
                                title="South RIFT VALLEY Hotel Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8238364808835!2d38.7715959!3d8.9883524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8541cfa1d641%3A0xf727f5851b193a75!2sRift%20valley%20hotel!5e0!3m2!1sam!2set!4v1766671670298!5m2!1sam!2set"
                                className={`absolute inset-0 w-full h-full transition-all duration-1000 ${theme === 'dark' ? 'opacity-80 group-hover:opacity-100 brightness-75 contrasts-125' : 'opacity-100'}`}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>

                        <div className={`p-8 glass rounded-[2.5rem] border space-y-6 transition-all duration-300 ${theme === 'dark' ? 'glass-emerald border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
                            <div className="flex items-start space-x-4">
                                <div className="bg-emerald-500 p-4 rounded-2xl text-white shadow-xl shadow-emerald-500/20">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className={`font-black text-lg font-display tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('contact.visit_sanctuary')}</p>
                                    <p className={`text-sm font-bold leading-relaxed font-sans ${theme === 'dark' ? 'text-emerald-100/70' : 'text-slate-600'}`}>{t('hero.address')}</p>
                                </div>
                            </div>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=XQQC%2B8J+Addis+Ababa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group w-full py-5 rounded-2xl text-sm font-black text-center shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest font-display ${theme === 'dark' ? 'bg-white text-emerald-950 hover:bg-emerald-50' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}
                            >
                                {t('contact.get_live_directions')}
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Support Card */}
                        <div className={`p-6 md:p-8 glass rounded-[2.5rem] border flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-emerald-500/40 transition-all ${theme === 'dark' ? 'border-emerald-500/20 bg-white/[0.02]' : 'border-slate-200 bg-white shadow-lg'}`}>
                            <div className="flex items-center space-x-6">
                                <div className="bg-emerald-500 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform shadow-2xl shadow-emerald-500/40">
                                    <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <div className="space-y-1">
                                    <p className={`font-black text-lg md:text-xl font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('contact.instant_support')}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                        <p className="text-emerald-500 text-xs font-black uppercase tracking-widest">{t('contact.chat_whatsapp')}</p>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={`https://wa.me/251000000000?text=${encodeURIComponent(t('whatsapp_msg'))}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full md:w-auto px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[.25em] transition-all border font-display ${theme === 'dark' ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}
                            >
                                {t('contact.open_chat')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
