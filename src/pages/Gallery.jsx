import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import { Maximize2, X } from 'lucide-react';

const Gallery = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        { id: 1, title: "Hotel Exterior", category: "Exterior", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 2, title: "Standard Room", category: "Rooms", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 3, title: "Deluxe Suite", category: "Rooms", url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 4, title: "Our Restaurant", category: "Dining", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 5, title: "Lobby Area", category: "Interior", url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 6, title: "Garden View", category: "Exterior", url: "https://images.unsplash.com/photo-1582719478250-c89cae4df85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 7, title: "Meeting Hall", category: "Business", url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
        { id: 8, title: "Relaxation Zone", category: "Service", url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    ];

    return (
        <div className={`transition-colors duration-300 min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <SEO
                title={t('nav.gallery')}
                description="View photos of our beautiful hotel, comfortable rooms, and local surroundings in the SOUTH RIFT VALLEY."
            />

            {/* Premium Header */}
            <section className="py-24 px-4 text-center relative overflow-hidden reveal">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    <h1 className={`text-5xl md:text-8xl font-black font-display leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                        {t('gallery.title').split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{t('gallery.title').split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className={`max-w-2xl mx-auto text-xl font-sans leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {t('gallery.subtitle')}
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-32 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {images.map((img, idx) => (
                            <div
                                key={img.id}
                                className={`group relative break-inside-avoid rounded-[2.5rem] overflow-hidden border transition-all cursor-pointer shadow-2xl reveal hover:-translate-y-2 duration-500 ${theme === 'dark' ? 'border-white/5 hover:border-emerald-500/50' : 'border-slate-200 hover:border-emerald-500/50'}`}
                                style={{ animationDelay: `${idx * 50}ms` }}
                                onClick={() => setSelectedImg(img)}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Premium Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em] font-display">{img.category}</span>
                                            <h4 className="text-white font-black text-lg font-display">{img.title}</h4>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                                            <Maximize2 className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-8 right-8 text-white hover:text-emerald-400 transition-colors bg-white/5 p-4 rounded-full border border-white/10 z-10">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center relative">
                        <img
                            src={selectedImg.url}
                            alt={selectedImg.title}
                            className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-white/10"
                        />
                        <div className="mt-8 text-center space-y-2">
                            <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em] font-display">{selectedImg.category}</span>
                            <h3 className="text-3xl md:text-5xl font-black text-white font-display">{selectedImg.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
