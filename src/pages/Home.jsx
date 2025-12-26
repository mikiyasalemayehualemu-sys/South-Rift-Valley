import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ArrowRight, Star, Shield, Clock, Coffee, Wine, Flame, Beer, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import heritageHeroImg from '../assets/south_rift_cultural_interior_hero.png';

const Home = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <Coffee className="w-6 h-6 text-amber-500" />,
            title: t('features.great_coffee'),
            desc: "Authentic beans, expert roasting.",
            bg: "bg-amber-500/10",
            size: "col-span-1"
        },
        {
            icon: <Beer className="w-6 h-6 text-emerald-500" />,
            title: t('features.great_beer'),
            desc: "Local crafts & international favorites.",
            bg: "bg-emerald-500/10",
            size: "col-span-1"
        },
        {
            icon: <Flame className="w-6 h-6 text-orange-500" />,
            title: t('features.fireplace'),
            desc: "Cozy evenings by the crackling fire.",
            bg: "bg-orange-500/10",
            size: "col-span-1"
        },
        {
            icon: <Star className="w-8 h-8 text-yellow-500" />,
            title: `4.6 ${t('features.highlights')}`,
            desc: t('hero.rating'),
            bg: "bg-yellow-500/5",
            size: "col-span-1 md:col-span-2"
        },
        {
            icon: <Wine className="w-6 h-6 text-purple-500" />,
            title: t('features.great_wine'),
            desc: "A curated list for connoisseurs.",
            bg: "bg-purple-500/10",
            size: "col-span-1"
        },
    ];

    return (
        <div className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <SEO
                title={t('nav.home')}
                description="Experience luxury and local hospitality at SOUTH RIFT VALLEY Hotel. The best rooms, food, and service in Addis Ababa."
            />

            {/* Premium Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 px-4 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)]"></div>
                    <div className={`absolute inset-0 bg-cover bg-center mix-blend-overlay transition-all duration-1000 ${theme === 'dark' ? 'opacity-40 grayscale-[20%]' : 'opacity-20 grayscale-0'} scale-105 animate-pulse-slow`}
                        style={{ backgroundImage: `url(${heritageHeroImg})` }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 reveal">
                        <div className={`inline-flex items-center space-x-3 glass px-4 py-2 rounded-full border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200 shadow-sm'}`}>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em] font-display">{t('hero.now_open')}</span>
                        </div>

                        <h1 className={`text-6xl md:text-8xl font-black leading-tight font-display ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                            Luxury Meets <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_auto] animate-gradient-flow">
                                Heritage
                            </span>
                        </h1>

                        <p className={`text-xl max-w-xl leading-relaxed font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href="tel:+251000000000"
                                className="group relative bg-emerald-500 hover:bg-emerald-600 px-8 py-5 rounded-2xl text-white font-black text-lg transition-all flex items-center justify-center space-x-3 shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:-translate-y-1"
                            >
                                <Phone className="w-6 h-6" />
                                <span className="uppercase tracking-widest">{t('hero.cta_call')}</span>
                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </a>

                            <a
                                href={`https://wa.me/251000000000?text=${encodeURIComponent(t('whatsapp_msg'))}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`glass hover:bg-white/5 px-8 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 border ${theme === 'dark' ? 'text-white border-white/10 hover:border-emerald-500/50' : 'text-slate-900 border-slate-200 hover:border-emerald-500/50 shadow-sm'}`}
                            >
                                <MessageCircle className="w-6 h-6 text-emerald-500" />
                                <span className="uppercase tracking-widest">WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block relative reveal" style={{ animationDelay: '200ms' }}>
                        <div className={`relative rounded-[3rem] overflow-hidden border aspect-[4/5] shadow-2xl ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'}`}>
                            <img
                                src={heritageHeroImg}
                                alt="SOUTH RIFT VALLEY Heritage"
                                className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>

                            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-white">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                            <span className="text-xs font-black tracking-widest uppercase">{t('hero.rating')}</span>
                                        </div>
                                        <p className="text-[10px] text-slate-400 mt-0.5 uppercase font-black tracking-widest">Verified Guest Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
                    <span className={`text-[10px] uppercase font-black tracking-[0.3em] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('common.learn_more')}</span>
                    <div className={`w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent`}></div>
                </div>
            </section>

            {/* Bento Features Grid */}
            <section className={`py-32 px-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4 reveal">
                        <h2 className={`text-4xl md:text-6xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                            {t('home.excellence_title').split(' ')[0]} <span className="text-emerald-500">{t('home.excellence_title').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className={`max-w-xl mx-auto font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            {t('home.excellence_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className={`${item.size} glass border p-10 rounded-[2.5rem] hover:border-emerald-500/30 transition-all group reveal relative overflow-hidden ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-50'
                                    }`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-emerald-500/20 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white border border-slate-100'
                                    }`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-2xl font-black mb-3 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                                <p className={`leading-relaxed font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>

                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <Link to="/about" className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                        {t('common.learn_more')} <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* Directions Bento Box */}
                        <div
                            className={`col-span-1 md:col-span-2 lg:col-span-1 glass-emerald p-10 rounded-[2.5rem] relative overflow-hidden group cursor-pointer reveal shadow-2xl shadow-emerald-500/10`}
                            style={{ animationDelay: '500ms' }}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-2xl shadow-emerald-500/40">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-3 font-display">{t('hero.cta_directions')}</h3>
                                <p className="text-emerald-50/80 mb-10 font-medium">XQQC+8J Addis Ababa, In front of Ibex Hotel</p>
                                <Link
                                    to="/contact"
                                    className="flex items-center text-white font-black text-xs uppercase tracking-[0.3em] bg-white/20 hover:bg-white/30 px-6 py-4 rounded-full w-fit backdrop-blur-md transition-all"
                                >
                                    <span>{t('hero.cta_directions')}</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-32 px-4 reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/20">
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black text-white font-display leading-tight">
                                {t('common.book_now')} <br className="hidden md:block" /> {t('hero.now_open')}
                            </h2>
                            <p className="text-emerald-50/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                                <a
                                    href="tel:+251000000000"
                                    className="w-full sm:w-auto bg-white text-emerald-600 px-12 py-6 rounded-[1.5rem] font-black text-xl hover:bg-emerald-50 transition-all hover:-translate-y-2 shadow-2xl"
                                >
                                    {t('hero.cta_call')}
                                </a>
                                <a
                                    href={`https://wa.me/251000000000?text=${encodeURIComponent(t('whatsapp_msg'))}`}
                                    className="w-full sm:w-auto bg-emerald-950/20 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-[1.5rem] font-black text-xl hover:bg-emerald-950/30 transition-all shadow-xl"
                                >
                                    {t('common.contact_us')}
                                </a>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-black/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
