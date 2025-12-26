# South Rift Valley Hotel - Web Platform

A premium, multi-lingual, and theme-aware web application for the South Rift Valley Hotel. Built with React, Vite, and Tailwind CSS.

## Features
- **Traditional Heritage Aesthetic:** Culturally-rooted design reflecting Ethiopian hospitality.
- **Multi-lingual Support:** Full support for English, Amharic, Afaan Oromo, and Tigrinya.
- **Dark/Light Mode:** Sophisticated theme toggling for enhanced user experience.
- **Local Asset Hosting:** All images are hosted locally to ensure reliable loading and offline capabilities.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## Deployment on Vercel
This project is configured for seamless deployment on Vercel.

1. **Connect to GitHub/GitLab:** Push the project to a remote repository.
2. **Import Project:** Select the repository in the Vercel dashboard.
3. **Build Settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Deploy:** Hit deploy and Vercel will handle the rest.

The project includes a `vercel.json` file to handle client-side routing for the Single Page Application (SPA).

## Technical Stack
- **Frontend:** React 19, Vite 7
- **Styling:** Tailwind CSS 4, Lucide Icons
- **Routing:** React Router 7
- **Translations:** Custom Context-based i18n
