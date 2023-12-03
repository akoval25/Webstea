import "../styles/Services.scss";
import servicesIcon1 from "../images/services__bottom-img-1.svg";
import servicesIcon2 from "../images/services__bottom-img-2.svg";
import servicesIcon3 from "../images/services__bottom-img-3.svg";
import servicesIcon4 from "../images/services__bottom-img-4.svg";

function Services() {
  return (
    <section className="services section__mb">
      <div className="container">
        <h2>Основні послуги</h2>
        <div className="services__inner">
          <a href="#" className="services__item">
            <h3>Landing page</h3>
            <p>
              Сайт з унікальним дизайном з 1 довгої сторінки.Завдання лендинга
              презентація нового товару або послуги з метою лідогенераціі і
              збільшення продажів
            </p>
            <a href="#" className="services__link">
              Дізнатися більше
            </a>
          </a>
          <a href="#" className="services__item">
            <h3>Сайт візитка</h3>
            <p>
              Сайт з 1-3 сторінок з персоналізованим дизайном.Коротко доносить
              основну інформацію про компанію або персони, містить сторінку
              контакти і форму зворотного зв’язку.
            </p>
            <a href="#" className="services__link">
              Дізнатися більше
            </a>
          </a>
          <a href="#" className="services__item">
            <h3>Інтернет магазин</h3>
            <p>
              Розробка магазину для продажу товарів через Інтернет. Інтернет
              магазин дає можливість створення категорій і карток товарів,
              додавання методів оплати, зручну корзину, експорт та імпорт даних.
            </p>
            <a href="#" className="services__link">
              Дізнатися більше
            </a>
          </a>
          <a href="#" className="services__item">
            <h3>Корпоративний сайт</h3>
            <p>
              Створення відкритого або закритого типу веб-ресурсу Вашої
              компанії, з можливістю публікації новин та інших матеріалів, цін,
              презентацій та іншої корпоративної інформації.
            </p>
            <a href="#" className="services__link">
              Дізнатися більше
            </a>
          </a>
          <a href="#" className="services__item">
            <h3>Сайт каталог</h3>
            <p>
              Містить каталог товарів з можливістю фільтрації, але без цін і
              кошика, підходить для продуктів вартість яких формується
              індивідуально.
            </p>
            <a href="#" className="services__link">
              Дізнатися більше
            </a>
          </a>
          <a href="#" className="services__item">
            <h3>Індивидуальний проект</h3>
            <p>
              Розробка унікального сайту будь-якої складності, складемо
              професійний проект Вашого веб-ресурсу, виконаємо дизайн, розробку
              і верстку.
            </p>
            <a href="#" className="services__link">
              Дізнатися більше
            </a>
          </a>
        </div>
        <div className="services__bottom">
          <div className="services__bottom-item">
            <img src={servicesIcon1}></img>
            <h3>Технічка підтримка</h3>
            <p>
              Впроваджуємо нові бажання, розвиваємо функціонал, оптимізуємо
              роботу модулів і плагінів.
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon2}></img>
            <h3>Доопрацювання сайту</h3>
            <p>
              Допомагаємо клієнтам бути попереду конкурентів. Оновлюємо дизайн,
              додаємо нові "фішки".
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon3}></img>
            <h3>Редизайн</h3>
            <p>Підтримуємо та розвиваємо створені та існуючі проекти.</p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon4}></img>
            <h3>SEO-просування</h3>
            <p>
              Рекламні стратегії допоможуть підвщити відвідуваність сайту та
              залучити більше клієнтів
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
