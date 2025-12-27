import React from 'react';
import { ShieldCheck, Map, Users, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import riftValleyImg from '../assets/Rift valley.jpeg';

const About = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    const values = [
        { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: t('about.trust_title'), desc: t('about.trust_desc') },
        { icon: <Map className="w-8 h-8 text-emerald-500" />, title: t('about.local_title'), desc: t('about.local_desc') },
        { icon: <Users className="w-8 h-8 text-emerald-500" />, title: t('about.community_title'), desc: t('about.community_desc') },
        { icon: <Award className="w-8 h-8 text-emerald-500" />, title: t('about.award_title'), desc: t('about.award_desc') },
    ];

    const atmospheres = [
        t('features.historic'), t('features.romantic'), t('features.upmarket'), "Trendy", "Casual", "Cosy"
    ];

    const accessibility = [
        t('features.wheelchair_accessible') + " Entrance",
        t('features.wheelchair_accessible') + " Seating",
        t('features.wheelchair_accessible') + " Toilet",
        t('features.wheelchair_accessible') + " Parking",
    ];

    return (
        <div className={`transition-colors duration-300 min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <SEO
                title={t('nav.about')}
                description="Learn more about SOUTH RIFT VALLEY Hotel. Our story, our values, and why we are the best choice for your stay in Addis Ababa."
            />

            {/* Premium Hero Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
                    <div className={`inline-flex items-center space-x-3 glass px-4 py-2 rounded-full border mb-8 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200 shadow-sm'}`}>
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em] font-display">Crafting Memories Since 2014</span>
                    </div>
                    <h1 className={`text-4xl md:text-7xl font-black mb-6 md:mb-8 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                        {t('about.title').split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{t('about.title').split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className={`text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {t('about.narrative')}
                    </p>
                </div>

                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            </section>

            {/* Content Section */}
            <section className={`py-32 px-4 border-y transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-100'}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative group reveal">
                        <div className={`aspect-square rounded-[3.5rem] overflow-hidden border relative shadow-2xl ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'}`}>
                            <img
                                src={riftValleyImg}
                                alt="SOUTH RIFT VALLEY Hotel Building"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-emerald-500 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.3)] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                            <p className="text-white font-black text-4xl md:text-6xl font-display tracking-tighter">10+</p>
                            <p className="text-emerald-50 text-xs font-black uppercase tracking-widest mt-1">{t('about.excellence_years').split(' ').join('<br />')}</p>
                        </div>
                    </div>

                    <div className="space-y-12 reveal" style={{ animationDelay: '200ms' }}>
                        <div className="space-y-6">
                            <h2 className={`text-4xl md:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('about.why_choose')}</h2>
                            <p className={`leading-relaxed text-lg font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                {t('about.commitment_text')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((val, idx) => (
                                <div key={idx} className={`glass p-8 rounded-2xl border hover:border-emerald-500/30 transition-all group ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-50'}`}>
                                    <div className="mb-6 text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                                        {val.icon}
                                    </div>
                                    <h4 className={`font-black text-lg mb-2 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{val.title}</h4>
                                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>{val.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Atmosphere & Accessibility Detail Grid */}
                        <div className={`pt-12 border-t grid grid-cols-1 sm:grid-cols-2 gap-12 ${theme === 'dark' ? 'border-white/10' : 'border-slate-100'}`}>
                            <div className="space-y-6">
                                <h4 className={`font-black text-sm uppercase tracking-widest flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    {t('about.atmosphere_title')}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {atmospheres.map((a, i) => (
                                        <span key={i} className={`px-4 py-2 glass text-xs font-bold rounded-xl border transition-all uppercase tracking-tight ${theme === 'dark' ? 'text-slate-300 border-white/5 hover:border-emerald-500/30' : 'text-slate-600 border-slate-200 bg-slate-100 hover:border-emerald-500/30'}`}>{a}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className={`font-black text-sm uppercase tracking-widest flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    {t('about.accessibility_title')}
                                </h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {accessibility.map((a, i) => (
                                        <div key={i} className={`flex items-center space-x-3 text-sm glass px-5 py-3 rounded-xl border ${theme === 'dark' ? 'text-slate-400 border-white/5' : 'text-slate-600 border-slate-200 bg-slate-50 shadow-sm'}`}>
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                            <span className="font-bold">{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders/Commitment Section */}
            <section className={`py-32 px-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
                <div className={`max-w-7xl mx-auto rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 border relative overflow-hidden reveal ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>
                    <div className="max-w-3xl space-y-10 relative z-10">
                        <h2 className={`text-3xl md:text-7xl font-black font-display leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                            {t('about.commitment_title').split(' ')[0]} <br />
                            <span className="text-emerald-500">{t('about.commitment_title').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className={`text-2xl leading-relaxed italic font-serif ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            "{t('about.commitment_text')}"
                        </p>
                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
                            <span className={`font-black uppercase tracking-widest font-display text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Management Team, South SOUTH RIFT VALLEY</span>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-emerald-500/5 -skew-x-12 translate-x-1/2"></div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto text-center space-y-12 reveal">
                    <h2 className={`text-4xl md:text-7xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                        {t('common.contact_us').split(' ')[0]} <br /> {t('common.contact_us').split(' ').slice(1).join(' ')}
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="tel:+251000000000" className="group w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg rounded-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 hover:-translate-y-2">
                            {t('hero.cta_call')}
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/contact" className={`w-full sm:w-auto px-16 py-7 glass font-black text-xl rounded-[2rem] border transition-all hover:-translate-y-2 ${theme === 'dark' ? 'text-white border-white/10 hover:bg-white/5' : 'text-slate-900 border-slate-200 bg-white shadow-lg hover:bg-slate-50'}`}>
                            {t('nav.contact')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
