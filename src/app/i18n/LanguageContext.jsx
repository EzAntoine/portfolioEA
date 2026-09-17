"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "en") setLanguage("en");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language === "en" ? "en" : "es-AR";
    window.localStorage.setItem("portfolio-language", language);
    document.title = language === "en"
      ? "Ezequiel Antoine | Full-Stack Web Developer"
      : "Ezequiel Antoine | Desarrollador web full stack";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === "en"
      ? "Ezequiel Antoine, full-stack web developer. I build websites and applications with React, Next.js, TypeScript, and Node.js. Explore my projects and experience."
      : "Ezequiel Antoine, desarrollador web full stack y programador. Desarrollo sitios y aplicaciones con React, Next.js, TypeScript y Node.js. Conocé mis proyectos y experiencia.";
  }, [language, ready]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
