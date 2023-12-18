export const generateUrl = (currentLang, basePath) => {
    let url = `${basePath}`;
  
    if (currentLang === 'ua') {
      url += '/ua';
    } else if (currentLang === 'en') {
      url += '/en';
    }
  
    return url;
  };

  document.addEventListener("DOMContentLoaded", function () {
    const currentLang = window.location.pathname.split('/')[1].toLowerCase();
    const htmlTag = document.querySelector('html');
    htmlTag.setAttribute('lang', currentLang === 'en' || currentLang === 'ua' ? currentLang : 'ua');
  });

  export const handleLandingSwitch = (e, currentLang) => {
    e.preventDefault();
    const currentUrl = window.location.pathname;
    const newUrl = `/${currentLang}/landing-page`;
    window.location.href = newUrl;
  };
  