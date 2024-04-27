import "../styles/Catalog.scss";
import landingImg from "../images/landing1x1.png";

function Catalog() {

  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">
          <h1 className="text-center">Сайт Каталог</h1>
          <h2 className="text-center">
          Відмінна альтернатива фізичним каталогам.
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="desktop-visible">Що це?</h3>
            <p className="inner__mb">
            Сайт Каталог в еру цифрових технологій став лідером завдяки низькій собівартості. Адже, тепер не потрібно друкувати величезний тираж і при оновленні асортименту дозамовляти додаткові примірники. Онлайн-версія каталогу зручна тим, що може просуватися інтернет-простором як через соціальні мережі, особисті повідомлення в мессенджерах, електронне листування так і платними способами, наприклад, контекстна реклама. Для подібного сайту легко відтворити структуру паперового попередника і додати безліч рішень для комфортного використання відвідувачами.</p>   
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
            <li>Низька собівартість;</li>
            <li>Більше можливостей для просування онлайн;</li>
            <li>Ефективний брендинг для чіткої ідентифікації;</li>
            <li>Зручна навігація;</li>
            <li>Ідеальна організація категорій та фільтрів.</li>


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

export default Catalog;