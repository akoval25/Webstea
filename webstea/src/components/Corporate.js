import "../styles/Corporate.scss";
import landingImg from "../images/landing1x1.png";

import { useLang } from "../scripts/LangContext.js";



function Corporate() {
  const { getLangText } = useLang();
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">

          <h1 className="lng-corporate-title text-center">{getLangText("corporate-title")}</h1>
          <h2 className="lng-corporate-description text-center">
          {getLangText("corporate-description")}

          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">

            <h3 className="lng-corporate-first-bold desktop-visible">{getLangText("corporate-first-bold")}</h3>

            <p className="inner__mb">
            Це тип сайту на якому може бути розміщена інформація про компанію та її послуги\товари, а також навчальні матеріали для працівників чи будь-які інші нетривіальні рішення. Основне покликання корпоративного сайту полягає у тому, щоб висвітлювати останні новини та налаштування взаємодії між філіями компанії і таке подібне. Варто зазначити, що під час розробки даного типу сайтів варто приділити увагу дизайну CMS (адмін-панелі), щоб працівники легко могли додавати новий контент та зміни до існуючого швидко і просто.</p>   
          </div>
          <div className="content-img">

            <h3 className="lng-corporate-first-bold mobile-visible text-center">{getLangText("corporate-first-bold")}</h3>

            <img alt="landing" src={landingImg}></img>
          </div>
        </div>
        <div className="text-center inner__mb">
          <a className="btn">Замовити</a>
        </div>
        <div className="inner__mb component__list">
          <h3>Переваги Корпоративного сайту</h3>
          <ul className="list-plus inner__mb">
            <li>Наявність внутрішніх баз з даними для навчання нових працівників;</li>
            <li>Корпоративний дизайн для підтримки іміджу;</li>
            <li>Продуманий функціонал та внутрішня логіка для швидкого додавання контенту;</li>
            <li>Кастомні рішення для нетривіальних потреб.</li>

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

export default Corporate;