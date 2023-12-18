//  import React, { createContext, useContext, useState } from 'react';
 import React, { createContext, useContext, useState, useEffect } from 'react';



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
      "services-support-title": "Технічка підтримка",
      "services-support-description": "Впроваджуємо нові бажання, розвиваємо функціонал, оптимізуємо роботу модулів і плагінів.",
      "services-fix-title": "Доопрацювання сайту",
      "services-fix-description": "Допомагаємо клієнтам бути попереду конкурентів. Оновлюємо дизайн, додаємо нові 'фішки'.",
      "services-design-title": "Редизайн",
      "services-design-description": "Підтримуємо та розвиваємо створені та існуючі проекти.",
      "services-seo-title": "SEO-просування",
      "services-seo-description": "Рекламні стратегії допоможуть підвщити відвідуваність сайту та залучити більше клієнтів.",
      "info-first": "Хороший сайт",
      "info-second": "неможливо зробити за два дні.",
      "info-third": "Розробка по-справжньому робочого сайту триває",
      "info-fourth": "від 1 місяця",
      "info-fifth": ", зате на виході ви отримаєте продукт, який",
      "info-sixth": "принесе прибуток",
      "st1": "Аналіз",
      "st2": "Прототип",
      "st3": "Дизайн",
      "st4": "Розробка",
      "st5": "Запуск",
      "stages-title": "Етапи створення вашого сайту",
      "st21": "Аналіз",
      "st22": "Прототип",
      "st23": "Дизайн",
      "st24": "Розробка",
      "st25": "Запуск",
      "st21-description": "Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії. Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії.",
      "st22-description": "Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії. Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії.",
      "st23-description": "Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії. Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії.",
      "st24-description": "Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії. Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії.",
      "st25-description": "Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії. Розробляємо оригінальний дизайн, що робить покупки онлайн зрозумілими і приємними, та який візуально відтворюватиме фірмовий стиль вашої компанії.",
      "advantages-title": "Переваги співпраці з нами",
      "advantages-subtitle": "Досвід",
      "advantages-description": "Ми класні, у нас багато досвіду, ми класні, у нас багато досвіду, ми класні.",
      "advantages-second-subtitle": "Щось про творчість",
      "advantages-second-description": "Ми дуже творчі ми дуже творчі ми дуже творчі, ми дуже творчію",
      "advantages-third-subtitle": "Якісний результат",
      "advantages-third-description": "Все буде чотко якщо ви замовите у нас сайт, результат вразить, це просто анбелівебл",
      "advantages-fourth-subtitle": "Про час",
      "advantages-fourth-description": "Ми класні, у нас багато досвіду, ми класні, у нас багато досвіду, ми класні, у нас багато досвіду, ми класні.",
      "advantages-fifth-subtitle": "Розвиток вашого бізнесу",
      "advantages-fifth-description": "Ми станете мільйонером і ваш бізнес принесе вам багато прибутку.",
      "technologies": "Технології, з якими ми працюємо",
      "portfolio-title": "Наші проєкти",
      "portfolio-first-subtitle": "Сайт для Василя Пупкіна",
      "portfolio-first-description": "Ми зробили сайт і вийшло дуже прикольно",
      "portfolio-btn": "Дивитися кейс",
      "portfolio-second-subtitle": "Сайт для Укрпошти",
      "portfolio-second-description": "За це ми отримали магнітик Пес Патрон",
      "portfolio-third-subtitle": "Сайт для художника Адольфа",
      "portfolio-third-description": "Ціна за сайт склала близько 1488 євро",
      "portfolio-fouth-subtitle": "Сайт про меблі",
      "portfolio-fouth-description": "Ми зробили сайт, але який, то треба бачити",
      "contact-title": "Давайте обговоримо вашу ідею!",
      "contact-name": "Ім’я",
      "contact-tel": "Телефон",
      "contact-mail": "E-mail",
      "contact-select": "Тип сайту",
      "contact-landing": "Landing page",
      "contact-card": "Сайт візитка",
      "contact-shop": "Інтернет магазин",
      "contact-site": "Корпоративний сайт",
      "contact-catalog": "Сайт каталог",
      "contact-project": "Індивідуальний проект",
      "contact-details": "Подробиці проєкту",
      "contact-btn": "Відправити",
      "blog-title": "Блог",
      "blog-first-subtitle": "Як правильно писати сайти?",
      "blog-first-description": "Може хтось знає? Серйозно, треба поміч, ми не шарим",
      "blog-btn": "Дивитись",
      "blog-second-subtitle": "Куди ми поїдем, коли заробим мільйон на вебсті?",
      "blog-second-description": "На фото гори, бо було лінь шукати фото моря, але я за море",
      "blog-third-subtitle": "Навіщо тут ці мокапи?",
      "blog-third-description": "Інтригує? Читайте в статті",
      "blog-fourth-subtitle": "Навіщо тут ці мокапи?",
      "blog-fourth-description": "Інтригує? Читайте в статті",
      "blog-fifth-subtitle": "Навіщо тут ці мокапи?",
      "blog-fifth-description": "Інтригує? Читайте в статті",
      "faq-title": "Часті запитання",
      "faq-q1-title": "Перше запитання якесь дуже важливе?",
      "faq-q1-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q2-title": "Друге запитання якесь дуже важливе?",
      "faq-q2-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q3-title": "Третє запитання якесь дуже важливе?",
      "faq-q3-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q4-title": "Четверте запитання якесь дуже важливе?",
      "faq-q4-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q5-title": "П`яте запитання якесь дуже важливе?",
      "faq-q5-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "solution-title": "Які задачі вирішить сайт?",
      "solution-first-subtitle": "Збільшення онлайн-присутності",
      "solution-first-description": "Ваш сайт стане потужною візитівкою для вашого бізнесу у світі Інтернету. Це дозволить залучати нових клієнтів, знайомити їх з вашими послугами та продуктами і показувати вашу унікальність. Потенційні клієнти зможуть знайти вас в будь-який час, досліджуючи ваші послуги та продукти без обмежень географії та часу.",
      "solution-second-subtitle": "Збільшення клієнтської бази",
      "solution-second-description": "Онлайн-платформа надасть можливість досягти нових аудиторій та ринків. Ви зможете привернути та обслуговувати клієнтів не тільки з місця розташування, а й з різних куточків світу, привертаючи увагу потенційних клієнтів через різноманітні канали, включаючи рекламу, контент-маркетинг та соціальні мережі. Оптимізація для пошукових систем (SEO) допоможе вам з'являтися на перших результатах пошуку.",
      "solution-third-subtitle": "Швидкий ріст бізнесу",
      "solution-third-description": "Онлайн-присутність через сайт може сприяти швидкому росту бізнесу завдяки новим можливостям залучення клієнтів та розширенням географії обслуговування. Завдяки доступності та зручності онлайн-замовлень і онлайн-оплати, ви зможете прискорити процес продажу. Це знижує час між першим зацікавленням клієнта та здійсненням покупки, що сприяє швидкому росту вашого бізнесу.",
      "solution-fourth-subtitle": "Конкурентна вигода",
      "solution-fourth-description": "Онлайн-платформа надасть можливість досягти нових аудиторій та ринків. Ви зможете привернути та обслуговувати клієнтів не тільки з місця розташування, а й з різних куточків світу. Ви зможете привертати увагу потенційних клієнтів через різноманітні канали, включаючи рекламу, контент-маркетинг та соціальні мережі. Оптимізація для пошукових систем (SEO) допоможе вам з'являтися на перших результатах пошуку.",
      "solution-fifth-subtitle": "Підвищення довіри",
      "solution-fifth-description": "Професійний веб-дизайн та інформація на сайті створюють враження надійності та професіоналізму. Це впливає на рівень довіри клієнтів до вашої компанії. Клієнти, що перевіряють ваш сайт, більш схильні довіряти вам, оскільки вони бачать вас як справжнього професіонала у вашій галузі. Ці переваги вказують на те, як сайт може прискорити ріст вашого бізнесу, залучити більше клієнтів, підвищити його конкурентоспроможність та покращити сприйняття вашої компанії клієнтами.",
      "footer-about": "Про нас",
      "footer-contact": "Контакти",
      "footer-services": "Послуги",
      "footer-portfolio": "Портфоліо",
      "footer-blog": "Блог",
      "footer-faq": "FAQ",
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
      "services-support-title": "Technical support",
      "services-support-description": "We implement new wishes, develop functionality, optimize the work of modules and plugins.",
      "services-fix-title": "Finalization of the site",
      "services-fix-description": "We help clients stay ahead of competitors. We update the design, add new 'chips'.",
      "services-design-title": "Redesign",
      "services-design-description": "We support and develop created and existing projects.",
      "services-seo-title": "SEO promotion",
      "services-seo-description": "Advertising strategies will help increase traffic to the site and attract more customers.",
      "info-first": "Good site",
      "info-second": "impossible to do in two days.",
      "info-third": "The development of a real working site is ongoing",
      "info-fourth": "from 1 month",
      "info-fifth": ", but at the output you will get a product which",
      "info-sixth": "will bring profit",
      "st1": "Analysis",
      "st2": "Prototype",
      "st3": "Design",
      "st4": "Development",
      "st5": "Launching",
      "stages-title": "Stages of creating your site",
      "st21": "Analysis",
      "st22": "Prototype",
      "st23": "Design",
      "st24": "Development",
      "st25": "Launching",
      "st21-description": "We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company. We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company.",
      "st22-description": "We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company. We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company.",
      "st23-description": "We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company. We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company.",
      "st24-description": "We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company. We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company.",
      "st25-description": "We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company. We develop an original design that makes online shopping clear and pleasant, and that visually reproduces the corporate style of your company.",
      "advantages-title": "Advantages of cooperation with us",
      "advantages-subtitle": "Experience",
      "advantages-description": "We are cool, we have a lot of experience, we are cool, we have a lot of experience, we are cool.",
      "advantages-second-subtitle": "Something about creativity",
      "advantages-second-description": "We are very creative we are very creative we are very creative we are very creative",
      "advantages-third-subtitle": "Quality result",
      "advantages-third-description": "Everything will be clear if you order a site from us, the result will amaze, it's simply unbelievable",
      "advantages-fourth-subtitle": "About time",
      "advantages-fourth-description": "We are cool, we have a lot of experience, we are cool, we have a lot of experience, we are cool, we have a lot of experience, we are cool.",
      "advantages-fifth-subtitle": "Development of your business",
      "advantages-fifth-description": "We will become a millionaire and your business will bring you a lot of profit.",
      "technologies": "Technologies we work with",
      "portfolio-title": "Our projects",
      "portfolio-first-subtitle": "Site for Vasyl Pupkin",
      "portfolio-first-description": "We made a site and it turned out very cool",
      "portfolio-btn": "See the case",
      "portfolio-second-subtitle": "Site for Ukrposhta",
      "portfolio-second-description": "For this, we received a Pes Patron magnet",
      "portfolio-third-subtitle": "A site for the artist Adolf",
      "portfolio-third-description": "The price for the site was about 1488 euros",
      "portfolio-fouth-subtitle": "Site about furniture",
      "portfolio-fouth-description": "We have made a site, but we have to see which one",
      "contact-title": "Let's discuss your idea!",
      "contact-name": "Name",
      "contact-tel": "Phone",
      "contact-mail": "E-mail",
      "contact-select": "Type of the site",
      "contact-landing": "Landing page",
      "contact-card": "Business card site",
      "contact-shop": "Internet-shop",
      "contact-site": "Corporate site",
      "contact-catalog": "Site catalog",
      "contact-project": "Individual project",
      "contact-details": "Project details",
      "contact-btn": "Send",
      "blog-title": "Blog",
      "blog-first-subtitle": "How to write sites correctly?",
      "blog-first-description": "Maybe someone knows? Seriously, we need help, we don't care",
      "blog-btn": "See more",
      "blog-second-subtitle": "Where will we go when we make a million on the web?",
      "blog-second-description": "In the photo there are mountains, because I was too lazy to look for a photo of the sea, but I am for the sea",
      "blog-third-subtitle": "Why are these mockups here?",
      "blog-third-description": "Intriguing? Read in the article",
      "blog-fourth-subtitle": "Why are these mockups here?",
      "blog-fourth-description": "Intriguing? Read in the article",
      "blog-fifth-subtitle": "Why are these mockups here?",
      "blog-fifth-description": "Intriguing? Read in the article",
      "faq-title": "Frequently asked questions",
      "faq-q1-title": "Is the first question very important?",
      "faq-q1-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q2-title": "Is the second question very important?",
      "faq-q2-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q3-title": "Is the third question very important?",
      "faq-q3-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q4-title": "Is the fourth question very important?",
      "faq-q4-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "faq-q5-title": "Is the fifth question very important?",
      "faq-q5-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "solution-title": "What problems will the site solve?",
      "solution-first-subtitle": "Increasing online presence",
      "solution-first-description": "Your website will become a powerful business card for your business in the Internet world. This will allow you to attract new customers, introduce them to your services and products and show your uniqueness. Potential customers will be able to find you at any time, exploring your services and products without the limitations of geography and time.",
      "solution-second-subtitle": "Increasing the client base",
      "solution-second-description": "The online platform will provide an opportunity to reach new audiences and markets. You will be able to attract and serve customers not only from your location, but also from different parts of the world, attracting the attention of potential customers through a variety of channels, including advertising, content marketing and social media. Search engine optimization (SEO) will help you appear on the first search results.",
      "solution-third-subtitle": "Rapid business growth",
      "solution-third-description": "Online presence through the site can contribute to rapid business growth due to new opportunities for attracting customers and expanding the geography of service. Thanks to the availability and convenience of online orders and online payment, you will be able to speed up the sales process. This reduces the time between a customer's first interest and making a purchase, which helps your business grow quickly.",
      "solution-fourth-subtitle": "Competitive advantage",
      "solution-fourth-description": "The online platform will provide an opportunity to reach new audiences and markets. You will be able to attract and serve customers not only from the location, but also from different parts of the world. You will be able to capture the attention of potential customers through a variety of channels, including advertising, content marketing and social media. Search engine optimization (SEO) will help you appear on the first search results.",
      "solution-fifth-subtitle": "Increasing trust",
      "solution-fifth-description": "Professional web design and information on the site create an impression of reliability and professionalism. This affects the level of trust customers have in your company. Customers checking out your site are more likely to trust you because they see you as a true professional in your field. These benefits indicate how a website can accelerate the growth of your business, attract more customers, increase its competitiveness and improve the perception of your company among customers.",
      "footer-about": "About us",
      "footer-contact": "Contacts",
      "footer-services": "Services",
      "footer-portfolio": "Portfolio",
      "footer-blog": "Blog",
      "footer-faq": "FAQ",
    },
  };

  const getLangText = (key) => {
    if (langArr[currentLang] && langArr[currentLang][key]) {
      return langArr[currentLang][key];
    }
    return '';
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [currentLang]);

  return (
    <LangContext.Provider value={{ currentLang, setLang, getLangText, loading }}>
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </LangContext.Provider>
  );

  // return (
  //   <LangContext.Provider value={{ currentLang, setLang, getLangText }}>
  //     {children}
  //   </LangContext.Provider>
  // );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};