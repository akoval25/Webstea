import "../styles/Landing.scss";
import landingImg from "../images/landing1x1.png";
import landingIcon1 from "../images/landing-icon-1.svg";
import landingIcon2 from "../images/landing-icon-2.svg";
import landingIcon3 from "../images/landing-icon-3.svg";

function Landing() {
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">
          <h1 className="text-center">Landing page</h1>
          <h2 className="text-center">
            Сайт з унікальним дизайном з одної довгої сторінки.
          </h2>
        </div>
        <div className="section__mb component__text-image">
          <div className="content-text">
            <h3 className="desktop-visible">Що таке Landing page?</h3>
            <p>
              LANDING PAGE - посадкова сторінка, яка вміло"змушує" користувача
              здійснювати потрібну цільову дію. Лендінг чітковеде відвідувача до
              мети, не дозволяючи йому відволікатися на шляху до
              заповітноїкнопки. Лендінг пейдж на WordPress - ефективне
              доповнення до основного сайту,який за необхідності легко
              трансформувати в повноцінний багатосторінковий вебресурс або в
              інтернет-магазин.
            </p>
            <p>
              Завдання лендінга - презентація нового товару або послуги з метою
              збільшення продажів
            </p>
          </div>
          <div className="content-img">
          <h3 className="mobile-visible text-center">Що таке Landing page?</h3>
            <img alt="landing" src={landingImg}></img>
          </div>
        </div>
        <div className="section__mb component__flex">
          <div className="component__flex-item">
            <img alt="icon" src={landingIcon1}></img>
            <h3>Простий Landing Page</h3>
            <ul>
              <li>1-3 екрани</li>
              <li>Стандартний дизайн</li>
              <li>Адаптивна верстка</li>
              <li>Кросбраузерність</li>
              <li>Форма зворотного зв'язку</li>
            </ul>
          </div>
          <div className="component__flex-item">
            <img alt="icon" src={landingIcon2}></img>
            <h3>Середній Landing Page</h3>
            <ul>
              <li>3-5 екранів</li>
              <li>Індивідуальний дизайн</li>
              <li>Адаптивна верстка</li>
              <li>Кросбраузерність</li>
              <li>Форми зворотного зв'язку</li>
            </ul>
          </div>
          <div className="component__flex-item">
            <img alt="icon" src={landingIcon3}></img>
            <h3>Складний Landing Page</h3>
            <ul>
              <li>від 5 екранів</li>
              <li>Індивідуальний дизайн</li>
              <li>Адаптивна верстка</li>
              <li>Кросбраузерність</li>
              <li>Форми зворотного зв'язку</li>
              <li>Калькулятори, квізи тощо</li>
            </ul>
          </div>
        </div>
        <div className="section__mb component__list">
          <h3>Що робить Landing page?</h3>
          <ul className="list-complete inner__mb">
            <li>Продає товар або послугу</li>
            <li>
              Створюється під конкретний товар, групу дуже схожих товарів або
              послугу.
            </li>
            <li>Запрошує людей</li>
            <li>Тестує УТП</li>
            <li>Розкручує бренд</li>
            <li>
              Створює презентація проєкту, підігрів інтересу, довіри до нового
              або мало відомого бренду.
            </li>
          </ul>
          <div className="text-center">
          <a className="btn">Замовити</a></div>
        </div>
        <div className="section__mb component__list">
          <h3>Переваги Landing Page</h3>
          <ul className="list-plus">
            <li>Конкретна пропозиція товару або послуг.</li>
            <li>Максимально проста навігація Landing Page.</li>
            <li>Швидке завантаження Landing Page.</li>
            <li>Можливість розмістити кілька Landing Page на одному домені.</li>
            <li>
              Контроль статистики, можливість відстежити як текст і фотографії
              впливають на конверсію Landing Page
            </li>
            <li>
              Можливість швидко зібрати контакти відвідувачів (форма зворотного
              зв'язку використовується в даному випадку на 30% частіше).
            </li>
          </ul>
        </div>
        <div className="section__mb component__list">
          <h3>Умови роботи</h3>
          <ul className="list-circle">
            <li>
              Правила створення сайту Landing Page і умови співпраці з компанією
              webstea
            </li>
            <li>Працюємо за договором</li>
            <li>
              Негайний старт виготовлення лендінгу після підписання Договору.
            </li>
            <li>
              Вартість створення лендінгу під ключ визначається технічним
              завданням і не змінюється.
            </li>
            <li>Оплата поетапна</li>
            <li>
              Оплата послуги розробки Landing Page відбувається по завершенню
              кожного етапу виготовлення.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Landing;
