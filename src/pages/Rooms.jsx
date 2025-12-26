import React, { useEffect } from 'react';
import { Bed, Users, Maximize, Wifi, Coffee, CheckCircle2, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import standardRoomImg from '../assets/south_rift_standard_room.png';
import deluxeRoomImg from '../assets/south_rift_deluxe_suite.png';

const Rooms = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    const roomTypes = [
        {
            id: 1,
            name: t('rooms.standard_name'),
            price: "1,500 ETB",
            desc: t('rooms.standard_desc'),
            features: [t('features.breakfast'), t('features.alcohol'), "WiFi", "TV"],
            capacity: "2 Adults",
            size: "24m²",
            tag: t('rooms.tag_value'),
            img: standardRoomImg
        },
        {
            id: 2,
            name: t('rooms.deluxe_name'),
            price: "2,500 ETB",
            desc: t('rooms.deluxe_desc'),
            features: [t('features.historic'), t('features.romantic'), "WiFi", "Mini Bar"],
            capacity: "2 Adults + 1 Child",
            size: "35m²",
            tag: t('rooms.tag_popular'),
            img: deluxeRoomImg
        },
        {
            id: 3,
            name: t('rooms.family_name'),
            price: "4,000 ETB",
            desc: t('rooms.family_desc'),
            features: [t('features.children'), t('features.kids_menu'), "Kitchenette", "Balcony"],
            capacity: "4 Adults",
            size: "55m²",
            tag: t('rooms.tag_premium'),
            img: deluxeRoomImg
        },
    ];

    return (
        <div className={`transition-colors duration-300 min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <SEO
                title={t('nav.rooms')}
                description="Explore our range of clean, comfortable, and affordable luxury rooms. From Standard to Family Suites in Addis Ababa."
            />

            {/* Premium Header */}
            <section className="py-24 px-4 text-center relative overflow-hidden reveal">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    <h1 className={`text-5xl md:text-8xl font-black font-display leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                        {t('rooms.title').split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{t('rooms.title').split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className={`max-w-2xl mx-auto text-xl font-sans leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {t('rooms.subtitle')}
                    </p>
                </div>
            </section>

            <section className={`py-24 px-4 transition-colors duration-300 border-t ${theme === 'dark' ? 'bg-slate-900/30 border-white/5' : 'bg-white border-slate-100'}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {roomTypes.map((room, idx) => (
                        <div
                            key={room.id}
                            className={`glass border rounded-[3rem] overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col h-full group reveal relative ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-50'}`}
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Premium Room Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={room.img}
                                    alt={room.name}
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-6 left-6 flex items-center gap-2">
                                    <div className="bg-emerald-500 text-white font-black px-5 py-2 rounded-2xl text-xs uppercase tracking-widest shadow-xl">
                                        {room.price}
                                    </div>
                                    <div className="glass px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/80 border border-white/10">
                                        {room.tag}
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 flex-grow flex flex-col space-y-6">
                                <div className="space-y-2">
                                    <h3 className={`text-3xl font-black font-display group-hover:text-emerald-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{room.name}</h3>
                                    <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] font-display">
                                        <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{room.capacity}</div>
                                        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                        <div className="flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5" />{room.size}</div>
                                    </div>
                                </div>

                                <p className={`text-sm leading-relaxed font-sans font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {room.desc}
                                </p>

                                <div className={`grid grid-cols-1 gap-4 py-6 border-y ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                                    {room.features.slice(0, 4).map((feature, i) => (
                                        <div key={i} className={`flex items-center space-x-3 text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                                            <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Elite Inclusion Strip */}
            <section className={`py-32 px-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className={`text-4xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {t('rooms.elite_inclusions').split(' ')[0]} <span className="text-emerald-500">{t('rooms.elite_inclusions').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className={`max-w-xl mx-auto font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                            Every suite is curated with premium features to guarantee yours remains a five-star experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Wifi />, title: t('rooms.fiber_wifi'), desc: "Ultra high-speed" },
                            { icon: <Coffee />, title: t('rooms.artisan_breakfast'), desc: "Gourmet local" },
                            { icon: <CheckCircle2 />, title: t('rooms.valet'), desc: "Professional cleaning" },
                            { icon: <ShieldCheck />, title: t('rooms.concierge'), desc: "24/7 Service" },
                        ].map((service, i) => (
                            <div key={i} className={`glass p-8 rounded-[2.5rem] border hover:border-emerald-500/30 transition-all group reveal shadow-sm ${theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-white'}`} style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="mb-6 text-emerald-500 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500">
                                    {React.cloneElement(service.icon, { className: "w-10 h-10" })}
                                </div>
                                <h4 className={`font-black text-xl mb-2 font-display ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h4>
                                <p className={`text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Strip */}
            <section className="pb-32 px-4">
                <div className="max-w-5xl mx-auto glass-emerald rounded-[4rem] p-12 md:p-24 border border-emerald-500/20 text-center relative overflow-hidden reveal shadow-2xl shadow-emerald-500/20">
                    <div className="relative z-10 space-y-10">
                        <h2 className="text-4xl md:text-7xl font-black text-white font-display leading-tight">The SOUTH RIFT VALLEY Horizon <br />Awaits Your Arrival</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                            <a href="tel:+251000000000" className="px-16 py-7 bg-white text-emerald-600 rounded-[2rem] font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl hover:-translate-y-2">
                                {t('common.connect_room_service')}
                            </a>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-black/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>
                </div>
            </section>
        </div>
    );
};

export default Rooms;
