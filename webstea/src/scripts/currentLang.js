// import React from 'react';
// import { useLang } from './LangContext';

// function LanguageSelector() {
//   const { currentLang, setLang } = useLang();

//   const handleLangClick = (lang) => {
//     setLang(lang);
//   };

//   return (
//     <div className="lang">
//       <ul className="lang__list lang df">
//         <li className="lang__item">
//           <a
//             href="#"
//             className={`lang__link ${currentLang === 'en' ? 'current' : ''}`}
//             onClick={() => handleLangClick('en')}
//           >
//             EN
//           </a>
//         </li>
//         <li className="lang__item">
//           <a
//             href="#"
//             className={`lang__link ${currentLang === 'ua' ? 'current' : ''}`}
//             onClick={() => handleLangClick('ua')}
//           >
//             UA
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default LanguageSelector;

import React, { useState, useEffect } from 'react';
import { useLang } from './LangContext';
import { generateUrl } from './url';

function LanguageSelector() {
  const { currentLang, setLang } = useLang();
  const [initialLoad, setInitialLoad] = useState(true);
  const handleLangClick = (lang) => {
    setLang(lang);
    if (initialLoad) {
      setInitialLoad(false);
    } else {
      const newUrl = generateUrl(lang, window.location.origin);
      window.history.replaceState({}, document.title, newUrl);
    }
  };

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    // const langFromUrl = pathSegments[1];
    const langFromUrl = pathSegments[2];
    if (initialLoad && langFromUrl && (langFromUrl === 'ua' || langFromUrl === 'en')) {
      setLang(langFromUrl);
    } else if (initialLoad) {
      const userBrowserLanguage = navigator.language || navigator.userLanguage;
      const isUkrainianLanguage = userBrowserLanguage.toLowerCase() === 'uk';
      const defaultLanguage = isUkrainianLanguage ? 'ua' : 'en';
      setLang(defaultLanguage);
    }
  }, [initialLoad, setLang]);


  const baseUrl = window.location.origin;

  return (
    <div className="lang">
      <ul className="lang__list lang df">
        <li className="lang__item">
          <a
            href={generateUrl('en', baseUrl)}
            className={`lang__link ${currentLang === 'en' ? 'current' : ''}`}
            onClick={() => handleLangClick('en')}
          >
            EN
          </a>
        </li>
        <li className="lang__item">
          <a
            href={generateUrl('ua', baseUrl)}
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
