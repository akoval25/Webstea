import React from 'react';
import { useLang } from './LangContext';

function LanguageSelector() {
  const { currentLang, setLang } = useLang();

  const handleLangClick = (lang) => {
    setLang(lang);
  };

  return (
    <div className="lang">
      <ul className="lang__list lang df">
        <li className="lang__item">
          <a
            href="#"
            className={`lang__link ${currentLang === 'en' ? 'current' : ''}`}
            onClick={() => handleLangClick('en')}
          >
            EN
          </a>
        </li>
        <li className="lang__item">
          <a
            href="#"
            className={`lang__link ${currentLang === 'ua' ? 'current' : ''}`}
            onClick={() => handleLangClick('ua')}
          >
            UA
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSelector;