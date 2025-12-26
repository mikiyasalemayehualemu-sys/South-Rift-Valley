import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, path = "" }) => {
    const { language } = useLanguage();
    const siteName = "SOUTH RIFT VALLEY Hotel";
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = "https://riftvalleyhotel.com"; // Placeholder

    useEffect(() => {
        document.title = fullTitle;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Update canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', `${baseUrl}${path}`);
        } else {
            canonical = document.createElement('link');
            canonical.rel = "canonical";
            canonical.href = `${baseUrl}${path}`;
            document.head.appendChild(canonical);
        }

        // SEO language attribute is already handled by LanguageContext but redundant check is fine
        document.documentElement.lang = language;

    }, [fullTitle, description, path, language]);

    return null;
};

export default SEO;
