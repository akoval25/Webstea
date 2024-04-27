import "../styles/Business.scss";
import landingImg from "../images/landing1x1.png";

function Business() {
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">
          <h1 className="text-center">Сайт-візитка</h1>
          <h2 className="text-center">
          Невеликий сайт з 5-10 сторінок з основною інформацією про компанію.
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="desktop-visible">Що це?</h3>
            <p className="inner__mb">
            Головна особливість сайту-візитки полягає не у форматі, а в призначенні, тобто, в наданні необхідної інформації для відвідувачів про компанію чи пропозиції. Крім контактів на даному сайті розміщують ще портфоліо, каталог та, наприклад, про значущих клієнтів чи головні досягнення. Сайт-візитку доповнюють функціональними модулями, такими як контактна форма чи інтерактивна карта проїзду до офісу компанії. 
            </p>   
          </div>
          <div className="content-img">
            <h3 className="mobile-visible text-center">Що це?</h3>
            <img alt="landing" src={landingImg}></img>
          </div>
        </div>
        <div className="text-center inner__mb">
          <a className="btn">Замовити</a>
        </div>
        <div className="inner__mb component__list">
          <h3>Переваги Сайту-візитки</h3>
          <ul className="list-plus inner__mb">
            <li>Лаконічна презентація компанії з використанням корпоративних елементів дизайну (акцент на впізнаваність);</li>
            <li>Використання в якості невеликої вітрини;</li>
            <li>Швидке завантаження (завдяки невеликій кількості сторінок);</li>
            <li>Фокус на товарах чи пропозиціях;</li>
            <li>Розширення клієнтської бази;</li>
            <li>Простий дизайн із закликом до дії.</li>

          </ul>
        </div>
        <div className="section__mb component__list">
          <h3>Умови роботи</h3>
          <ul className="list-circle">
            <li>Консультація</li>
            <li>Визначення вартості</li>
            <li>Складання договору та його підписання</li>
            <li>Створення та погодження технічного завдання</li>
            <li>Поетапна розробка з демонстрацією проміжного результату</li>
            <li>Тестування</li>
            <li>Оплата по факту виконання</li>
            <li>Підтримка та допомога з наповненням (за бажанням замовника)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Business;
