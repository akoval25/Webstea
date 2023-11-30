import "../styles/About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__top">
        <div className="container">
          <h2>Про нас</h2>
          <p>
            Ласкаво просимо у світ Webstea, де креативність поєднується з
            функціональністю.
          </p>
          <p>
            Наша місія - розширювати можливості бізнесу за допомогою візуально
            приголомшливих і високофункціональних веб-сайтів.
          </p>
          <p>
            Як компанія, ми пишаємося тим, що є архітекторами успіху в Інтернеті
            для бізнесу в різних галузях.
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <div className="container">
          <div className="about__bottom-inner">
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">4</h3>
              <p className="about__bottom-text">роки на ринку</p>
            </div>
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">50</h3>
              <p className="about__bottom-text">готових проєктів</p>
            </div>
            <div className="about__bottom-item">
              <h3 className="about__bottom-num">100</h3>
              <p className="about__bottom-text">ще чогось там</p>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <h2>Основні послуги</h2>
          <div className="services__inner">
            <div className="services__item">
              <h3>Landing page</h3>
              <p>
                Сайт з унікальним дизайном з 1 довгої сторінки.Завдання лендинга
                презентація нового товару або послуги з метою лідогенераціі і
                збільшення продажів
              </p>
              <a href="#" className="services__link">
                Дізнатися більше
              </a>
            </div>
            <div className="services__item">
              <h3>Сайт візитка</h3>
              <p>
                Сайт з 1-3 сторінок з персоналізованим дизайном.Коротко доносить
                основну інформацію про компанію або персони, містить сторінку
                контакти і форму зворотного зв’язку.
              </p>
              <a href="#" className="services__link">
                Дізнатися більше
              </a>
            </div>
            <div className="services__item">
              <h3>Інтернет магазин</h3>
              <p>
                Розробка магазину для продажу товарів через Інтернет. Інтернет
                магазин дає можливість створення категорій і карток товарів,
                додавання методів оплати, зручну корзину, експорт та імпорт
                даних.
              </p>
              <a href="#" className="services__link">
                Дізнатися більше
              </a>
            </div>
            <div className="services__item">
              <h3>Корпоративний сайт</h3>
              <p>
                Створення відкритого або закритого типу веб-ресурсу Вашої
                компанії, з можливістю публікації новин та інших матеріалів,
                цін, презентацій та іншої корпоративної інформації.
              </p>
              <a href="#" className="services__link">
                Дізнатися більше
              </a>
            </div>
            <div className="services__item">
              <h3>Сайт каталог</h3>
              <p>
                Містить каталог товарів з можливістю фільтрації, але без цін і
                кошика, підходить для продуктів вартість яких формується
                індивідуально.
              </p>
              <a href="#" className="services__link">
                Дізнатися більше
              </a>
            </div>
            <div className="services__item">
              <h3>Індивидуальний проект</h3>
              <p>
                Розробка унікального сайту будь-якої складності, складемо
                професійний проект Вашого веб-ресурсу, виконаємо дизайн,
                розробку і верстку.
              </p>
              <a href="#" className="services__link">
                Дізнатися більше
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   <section className="services">
    //       <div className="services__inner"><p></p></div>
    //   </section>
  );
}

export default About;
