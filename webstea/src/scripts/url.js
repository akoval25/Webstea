export const generateUrl = (currentLang, basePath) => {
    let url = `${basePath}/Webstea`;
  
    if (currentLang === 'ua') {
      url += '/ua';
    } else if (currentLang === 'en') {
      url += '/en';
    }
  
    return url;
  };