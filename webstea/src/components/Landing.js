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
          Односторінковий сайт для рекламної чи маркетингової кампанії.
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="desktop-visible">Що це?</h3>
            <p className="inner__mb">
            Лендінг фокусує увагу потенційного клієнта на продукт чи послугу та провести по всім етапам продажу. Від зацікавлення, надання необхідної інформації, беззаперечної лінії з аргументів та, врешті решт,  до цільової дії. Чи то буде здійснення покупки, чи зворотна форма для збору контактів - залежить від цілей замовника. Якщо ваша задача полягає в продажах вузького набору товарів чи збільшення кількості вхідних дзвінків, то односторінковий сайт повністю задовольнить вас.
            </p>
            <h3>Переваги Landing Page</h3>
          <ul className="list-plus inner__mb">
            <li>Тестування маркетингових гіпотез;</li>
            <li>Використання в якості невеликої вітрини;</li>
            <li>Збільшення коверсійності (цільових дій: дзвінки, збір контактів і покупок);</li>
            <li>Розширення клієнтської бази;</li>
            <li>Фокус на конкретному товарі чи групі товарів, послуг та дії;</li>
            <li>Швидке завантаження;</li>
            <li>Простий дизайн із закликом до дії.</li>
          </ul>
          </div>
          <div className="content-img">
          <h3 className="mobile-visible text-center">Що це?</h3>
            <img alt="landing" src={landingImg}></img>
          </div>
         
        </div>
        <div className="text-center inner__mb">
          <a className="btn">Замовити</a>
          </div>
        {/* <div className="section__mb component__flex">
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
          
        </div> */}
        <div className="inner__mb component__list">
          <h3>Переваги Landing Page</h3>
          <ul className="list-plus inner__mb">
            <li>Тестування маркетингових гіпотез;</li>
            <li>Використання в якості невеликої вітрини;</li>
            <li>Збільшення коверсійності (цільових дій: дзвінки, збір контактів і покупок);</li>
            <li>Розширення клієнтської бази;</li>
            <li>Фокус на конкретному товарі чи групі товарів, послуг та дії;</li>
            <li>Швидке завантаження;</li>
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

export default Landing;
