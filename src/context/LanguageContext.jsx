import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('rift_valley_lang') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('rift_valley_lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];
        for (const key of keys) {
            if (result && result[key]) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
