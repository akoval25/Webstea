import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('ua');

  const setLang = (lang) => {
    setCurrentLang(lang);
  };

  const langArr = {
    "ua": {
      "hero-title": "Розробка сайтів для бізнесу",
      "hero-description": "Webstea - це команда пристрасних професіоналів, які прагнуть революціонізувати сферу веб-розробки.",
      "hero-link": "Замовити сайт",
    },
    "en": {
      "hero-title": "Development of websites for business",
      "hero-description": "Webstea is a team of passionate professionals who are committed to revolutionizing the field of web development.",
      "hero-link": "Order a site",
    },
  };

  const getLangText = (key) => {
    if (langArr[currentLang] && langArr[currentLang][key]) {
      return langArr[currentLang][key];
    }
    return ''; 
  };

  return (
    <LangContext.Provider value={{ currentLang, setLang, getLangText }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
