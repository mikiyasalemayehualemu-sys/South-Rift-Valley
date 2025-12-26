import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import { Maximize2, X } from 'lucide-react';
import standardRoomImg from '../assets/south_rift_standard_room.png';
import deluxeRoomImg from '../assets/south_rift_deluxe_suite.png';
import restaurantImg from '../assets/south_rift_restaurant.png';
import meetingImg from '../assets/south_rift_meeting_hall.png';
import lobbyImg from '../assets/south_rift_cultural_interior_hero.png';

const Gallery = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [selectedImg, setSelectedImg] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const images = [
        { id: 1, title: "Grand Lobby", category: "Interior", url: lobbyImg },
        { id: 2, title: "Standard Room", category: "Rooms", url: standardRoomImg },
        { id: 3, title: "Deluxe Suite", category: "Rooms", url: deluxeRoomImg },
        { id: 4, title: "Cultural Dining", category: "Dining", url: restaurantImg },
        { id: 5, title: "Convention Hall", category: "Business", url: meetingImg },
    ];

    const categories = ['All', 'Rooms', 'Interior', 'Dining', 'Business'];
    const filteredImages = activeFilter === 'All' ? images : images.filter(img => img.category === activeFilter);

    return (
        <div className={`transition-all duration-500 min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <SEO
                title={t('nav.gallery')}
                description="Experience the visual heritage of South Rift Valley Hotel."
            />

            {/* Cinematic Header */}
            <section className="relative py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)] opacity-70`}></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 reveal">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-emerald-500/20 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Visual Journey</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black font-display leading-[0.9] tracking-tighter">
                        CAPTURING<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-flow">HERITAGE</span>
                    </h1>
                    <p className={`max-w-2xl mx-auto text-lg md:text-xl font-sans font-medium leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        Every frame at South Rift Valley Hotel tells a story of tradition, luxury, and the warmth of Ethiopian hospitality.
                    </p>
                </div>
            </section>

            {/* Filter Navigation */}
            <section className="pb-12 px-4 reveal">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 border ${activeFilter === cat
                                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-xl shadow-emerald-500/20 -translate-y-1'
                                    : theme === 'dark'
                                        ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-emerald-500/40'
                                        : 'bg-white border-slate-200 text-slate-500 hover:text-emerald-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Modern Masonry Grid */}
            <section className="pb-40 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {filteredImages.map((img, idx) => (
                            <div
                                key={img.id}
                                className="group relative break-inside-avoid rounded-[3.5rem] overflow-hidden reveal transition-all duration-700 cursor-pointer shadow-3xl hover:-translate-y-4"
                                style={{ animationDelay: `${idx * 100}ms` }}
                                onClick={() => setSelectedImg(img)}
                            >
                                <div className="aspect-auto overflow-hidden">
                                    <img
                                        src={img.url}
                                        alt={img.title}
                                        className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-[1500ms] ease-out grayscale-[20%] group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Premium Micro-Interaction Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em] mb-3 block">{img.category}</span>
                                        <h4 className="text-white text-3xl font-black font-display tracking-tight">{img.title}</h4>
                                    </div>
                                    <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-2xl p-4 rounded-3xl border border-white/20 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                                        <Maximize2 className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cinematic Lightbox */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-[100px] flex items-center justify-center p-4 md:p-12 animate-in zoom-in-95 duration-500"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-all duration-500 bg-white/5 hover:bg-emerald-500 p-6 rounded-full border border-white/10 z-10 group">
                        <X className="w-8 h-8 group-hover:scale-110" />
                    </button>

                    <div className="max-w-7xl w-full flex flex-col items-center justify-center relative gap-12" onClick={e => e.stopPropagation()}>
                        <div className="relative group/modal w-full flex justify-center">
                            <img
                                src={selectedImg.url}
                                alt={selectedImg.title}
                                className="max-w-full max-h-[75vh] object-cover rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10"
                            />
                            <div className="absolute -inset-4 bg-emerald-500/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover/modal:opacity-100 transition-opacity duration-1000"></div>
                        </div>

                        <div className="text-center space-y-4 reveal">
                            <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.5em] font-display">{selectedImg.category}</span>
                            <h3 className="text-4xl md:text-7xl font-black text-white font-display tracking-tighter">{selectedImg.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
