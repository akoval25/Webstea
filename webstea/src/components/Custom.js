import "../styles/Custom.scss";
import landingImg from "../images/landing1x1.png";

function Custom() {

  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">
          <h1 className="text-center">Індивідуальний проект</h1>
          <h2 className="text-center">
          Повністю унікальна розробка з урахуванням всіх особливостей бізнесу.
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="desktop-visible">Що це?</h3>
            <p className="inner__mb">
            Індивідуальний сайт під ключ дозволить реалізувати сміливі рішення та приємно здивувати його відвідувачів. Під час створення дизайну ми ретельно дослідимо всі побажання і тонкощі проекту, щоб результат перевершив можливі очікування.</p>   
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
          <h3>Переваги Сайту Каталогу</h3>
          <ul className="list-plus inner__mb">
            <li>Унікальний дизайн;</li>
            <li>Особливий функціонал;</li>
            <li>Зручна навігація;</li>
            <li>Кросбраузерність.</li>
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

export default Custom;