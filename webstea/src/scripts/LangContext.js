 import React, { createContext, useContext, useState } from 'react';

 const LangContext = createContext();

 export const LangProvider = ({ children }) => {
  const userBrowserLanguage = navigator.language || navigator.userLanguage;
  const isUkrainianLanguage = userBrowserLanguage.toLowerCase() === 'uk';
  const defaultLanguage = isUkrainianLanguage ? 'ua' : 'en';
  const [currentLang, setCurrentLang] = useState(defaultLanguage);

  const setLang = (lang) => {
    setCurrentLang(lang);
  };

  const langArr = {
    "ua": {
      "hero-title": "Розробка сайтів для бізнесу",
      "hero-description": "Webstea - це команда пристрасних професіоналів, які прагнуть революціонізувати сферу веб-розробки.",
      "hero-link": "Замовити сайт",
      "about": "Про нас",
      "contact": "Контакти",
      "services": "Послуги",
      "portfolio": "Портфоліо",
      "blog": "Блог",
      "faq": "FAQ",
      "about-title": "Про нас",
      "about-first-sentence": "Ласкаво просимо у світ Webstea, де креативність поєднується з функціональністю.",
      "about-second-sentence": "Наша місія - розширювати можливості бізнесу за допомогою візуально приголомшливих і високофункціональних веб-сайтів.",
      "about-third-sentence": "Як компанія, ми пишаємося тим, що є архітекторами успіху в Інтернеті для бізнесу в різних галузях.",
      "about-first-bottom-text": "роки на ринку",
      "about-second-bottom-text": "готових проєктів",
      "about-third-bottom-text": "ще чогось там",
      "services-title": "Основні послуги",
      "services-landing-title": "Landing page",
      "services-landing-description": "Сайт з унікальним дизайном з 1 довгої сторінки.Завдання лендинга презентація нового товару або послуги з метою лідогенераціі і збільшення продажів",
      "services-landing-btn": "Дізнатися більше",
      "services-card-title": "Сайт візитка",
      "services-card-description": "Сайт з 1-3 сторінок з персоналізованим дизайном. Коротко доносить основну інформацію про компанію або персони, містить сторінку контакти і форму зворотного зв’язку.",
      "services-shop-title": "Інтернет магазин",
      "services-shop-description": "Розробка магазину для продажу товарів через Інтернет. Інтернет магазин дає можливість створення категорій і карток товарів, додавання методів оплати, зручну корзину, експорт та імпорт даних.",
      "services-corporate-title": "Корпоративний сайт",
      "services-corporate-description": "Створення відкритого або закритого типу веб-ресурсу Вашої компанії, з можливістю публікації новин та інших матеріалів, цін, презентацій та іншої корпоративної інформації.",
      "services-catalog-title": "Сайт каталог",
      "services-catalog-description": "Містить каталог товарів з можливістю фільтрації, але без цін і кошика, підходить для продуктів вартість яких формується індивідуально.",
      "services-project-title": "Індивидуальний проект",
      "services-project-description": "Розробка унікального сайту будь-якої складності, складемо професійний проект Вашого веб-ресурсу, виконаємо дизайн, розробку і верстку.",
      "": "",
    },
    "en": {
      "hero-title": "Development of websites for business",
      "hero-description": "Webstea is a team of passionate professionals who are committed to revolutionizing the field of web development.",
      "hero-link": "Order a site",
      "about": "About us",
      "contact": "Contacts",
      "services": "Services",
      "portfolio": "Portfolio",
      "blog": "Blog",
      "faq": "FAQ",
      "about-title": "About us",
      "about-first-sentence": "Welcome to the world of Webstea, where creativity meets functionality.",
      "about-second-sentence": "Our mission is to empower businesses with visually stunning and highly functional websites.",
      "about-third-sentence": "As a company, we pride ourselves on being the architects of online success for businesses in a variety of industries.",
      "about-first-bottom-text": "years on the market",
      "about-second-bottom-text": "finished projects",
      "about-third-bottom-text": "something else there",
      "services-title": "Basic services",
      "services-landing-title": "Landing page",
      "services-landing-description": "A site with a unique design with 1 long page. The task of the landing page is the presentation of a new product or service for the purpose of lead generation and increased sales",
      "services-landing-btn": "Learn more",
      "services-card-title": "Business card site",
      "services-card-description": "A website with 1-3 pages with a personalized design. Briefly conveys basic information about the company or persons, contains a contact page and a feedback form.",
      "services-shop-title": "Internet-shop",
      "services-shop-description": "Development of a store for the sale of goods via the Internet. The online store allows you to create product categories and cards, add payment methods, a convenient shopping cart, export and import data.",
      "services-corporate-title": "Corporate site",
      "services-corporate-description": "Creation of an open or closed web resource of your company, with the possibility of publishing news and other materials, prices, presentations and other corporate information.",
      "services-catalog-title": "Site catalog",
      "services-catalog-description": "Contains a product catalog with the possibility of filtering, but without prices and a basket, suitable for products whose cost is formed individually.",
      "services-project-title": "Individual project",
      "services-project-description": "Development of a unique website of any complexity, we will create a professional project of your web resource, perform design, development and layout.",
      "": "",
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