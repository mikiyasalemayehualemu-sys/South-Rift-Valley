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
            icon: <Coffee className="w-8 h-8 text-emerald-500" />,
            title: t('features.great_coffee'),
            desc: "Authentic beans, expert roasting.",
        },
        {
            icon: <Beer className="w-8 h-8 text-emerald-500" />,
            title: t('features.great_beer'),
            desc: "Local crafts & international favorites.",
        },
        {
            icon: <Flame className="w-8 h-8 text-emerald-500" />,
            title: t('features.fireplace'),
            desc: "Cozy evenings by the crackling fire.",
        },
        {
            icon: <Star className="w-8 h-8 text-emerald-500" />,
            title: `4.6 Rating`,
            desc: "Verified comfort and hospitality.",
        },
        {
            icon: <Wine className="w-8 h-8 text-emerald-500" />,
            title: t('features.great_wine'),
            desc: "A curated list for connoisseurs.",
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
                        <h1 className={`text-5xl md:text-8xl font-black leading-tight font-display tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                            Luxury Meets <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_auto] animate-gradient-flow">
                                Heritage
                            </span>
                        </h1>
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

                {/* Scroll Indicator - Hidden on very small screens */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 animate-bounce opacity-40">
                    <span className={`text-xs uppercase font-black tracking-[0.3em] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('common.learn_more')}</span>
                    <div className={`w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent`}></div>
                </div>
            </section>

            {/* Bento Features Grid */}
            <section className={`py-20 md:py-32 px-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-20 space-y-4 reveal">
                        <h2 className={`text-3xl md:text-6xl font-black font-display leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                            {t('home.excellence_title').split(' ')[0]} <span className="text-emerald-500">{t('home.excellence_title').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className={`max-w-xl mx-auto font-medium text-sm md:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            {t('home.excellence_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className={`p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 group reveal ${theme === 'dark'
                                    ? 'bg-slate-900/40 border-white/5 hover:border-emerald-500/20 hover:bg-slate-900/60'
                                    : 'bg-white border-slate-200 hover:border-emerald-500/20 hover:shadow-xl'
                                    }`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className={`mb-6 md:mb-8 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'
                                    }`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-xl md:text-2xl font-black mb-3 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                                <p className={`leading-relaxed font-medium text-sm md:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                            </div>
                        ))}

                        {/* Modern Directions Card */}
                        <div
                            className={`p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 group reveal relative overflow-hidden ${theme === 'dark'
                                ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10'
                                : 'bg-emerald-50 border-emerald-100 hover:shadow-xl'
                                }`}
                            style={{ animationDelay: '500ms' }}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <h3 className={`text-2xl font-black mb-3 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t('hero.cta_directions')}</h3>
                                <p className={`font-medium mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>XQQC+8J Addis Ababa, In front of Ibex Hotel</p>
                                <Link
                                    to="/contact"
                                    className="flex items-center text-emerald-500 font-black text-xs uppercase tracking-[0.3em] font-display hover:translate-x-2 transition-transform"
                                >
                                    <span>{t('hero.cta_directions')}</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
