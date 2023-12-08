export const generateUrl = (currentLang, basePath) => {
    let url = basePath;
  
    if (currentLang === 'ua') {
      url += '/ua';
    } else if (currentLang === 'en') {
      url += '/en';
    }
  
    return url;
  };