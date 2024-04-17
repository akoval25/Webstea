import "../styles/Articles.scss";
import { useLang } from "../scripts/LangContext.js";
import { Link } from 'react-router-dom';
import { generateUrl } from '../scripts/url.js';
import articleImg1 from "../images/article-item.png";

function Articles() {
  const { getLangText, currentLang } = useLang();
  const currentLangPath = generateUrl(currentLang, '');
  return (
    <section className="articles section__mb section__first">
      <div className="articles__inner">
        <div className="container">
          <Link to={`${currentLangPath}/`} className="home-link">
            На головну
          </Link>
          <div className="articles__items">
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
              Штучний інтелект у сучасному бізнесі: відкриття нових можливостей
              </h3>
              <p className="articles__description">
              Штучний інтелект (ШІ) в сучасному бізнесі відкриває безліч нових можливостей і трансформує спосіб, яким компанії ведуть свою діяльність.
              </p>
              <div className="text-right">
                <Link to={`${currentLangPath}/blog/ai-for-business`} className="btn">
                  Дивитись
                </Link>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
              Інтернет речей (IoT) та його вплив на наше повсякденне життя
              </h3>
              <p className="articles__description">
              Інтернет речей (IoT) є однією з найбільш перспективних технологій нашого часу, яка має значний вплив на наше повсякденне життя.
              </p>
              <div className="text-right">
                <Link to={`${currentLangPath}/blog/internet-of-things`} className="btn">
                  Дивитись
                </Link>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
              Блокчейн та криптовалюти: майбутнє фінансів у цифровому світі
              </h3>
              <p className="articles__description">
              Блокчейн та криптовалюти стали одними з ключових інновацій в цифровому світі, які мають потенціал змінити обличчя фінансової системи.
              </p>
              <div className="text-right">
                <Link to={`${currentLangPath}/blog/blockchain-and-crypto`} className="btn">
                  Дивитись
                </Link>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
              Хмарні технології: переваги та виклики для підприємств
              </h3>
              <p className="articles__description">
              Хмарні технології стали необхідною складовою сучасного бізнесу, пропонуючи підприємствам значні переваги, але й створюючи перед ними виклики.
              </p>
              <div className="text-right">
                <Link to={`${currentLangPath}/blog/cloud-technologies`} className="btn">
                  Дивитись
                </Link>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
              Машинне навчання та його застосування в медицині: революція у сфері охорони здоров'я
              </h3>
              <p className="articles__description">
              Машинне навчання (Machine Learning) в останні роки стало ключовою технологією, яка революціонізує багато галузей, зокрема і медицину.
              </p>
              <div className="text-right">
                <Link to={`${currentLangPath}/blog/machine-learning-in-medicine`} className="btn">
                  Дивитись
                </Link>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
              Кібербезпека в епоху цифрової революції: загрози та заходи захисту
              </h3>
              <p className="articles__description">
              Кібербезпека в епоху цифрової революції стає надзвичайно важливою, оскільки зростають як обсяги цифрових даних, так і рівень кіберзагроз.
              </p>
              <div className="text-right">
                <Link to={`${currentLangPath}/blog/cyber-security`} className="btn">
                  Дивитись
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
