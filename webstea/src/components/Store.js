import "../styles/Store.scss";
import landingImg from "../images/landing1x1.png";

function Store() {

  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">
          <h1 className="text-center">Інтернет-магазин</h1>
          <h2 className="text-center">
          Онлайн-майданчик для продажу товарів та послуг.
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="desktop-visible">Що це?</h3>
            <p className="inner__mb">
            Інтернет-магазин представляє собою не лише онлайн-каталог чи вітрину, а й самостійну систему здатну функціонувати майже самостійно. Привабливі картки товарів, чат-бот з відповідями на найбільш популярні питання та способи оплати це лише верхівка торгового айсбергу. Додавши ще унікальний адаптивний дизайн, корисне наповнення, що гарантовано залучить, утримає та поверне вашого потенційного покупця.</p>   
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
          <h3>Переваги Інтернет-магазину</h3>
          <ul className="list-plus inner__mb">
            <li>Правильний фокус на товарах чи пропозиціях;</li>
            <li>Розширення та лояльність клієнтської бази;</li>
            <li>Оригінальний дизайн із закликами до дій;</li>
            <li>Зростання попиту на онлайн-торгівлю;</li>
            <li>Продуманий функціонал та внутрішня логіка для пропозиції супутніх товарів можуть збільшити остаточний чек покупця.</li>


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

export default Store;