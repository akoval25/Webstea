import "../styles/SeparateArticle.scss";
import articleImg1 from "../images/article-item.png";
import { useLang } from "../scripts/LangContext.js";

function SeparateArticleFooter() {
  const { getLangText } = useLang();
  return (
    <section className="articles section__mb">
       <div>
        {/* <div className="container">
          <h2 className="text-right">Вас також може зацікавити...</h2>
          <div className="articles__items inner__mb">
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
                Штучний інтелект для тестувальника. Загроза чи помічник?
              </h3>
              <p className="articles__description">
                Штучний інтелект для тестувальника. Загроза чи помічник? Штучний
                інтелект для тестувальника. Загроза чи помічник?{" "}
              </p>
              <div className="text-right">
                <a href="#" className="btn">
                  Дивитись
                </a>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
                Штучний інтелект для тестувальника. Загроза чи помічник?
              </h3>
              <p className="articles__description">
                Штучний інтелект для тестувальника. Загроза чи помічник? Штучний
                інтелект для тестувальника. Загроза чи помічник?{" "}
              </p>
              <div className="text-right">
                <a href="#" className="btn">
                  Дивитись
                </a>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <h3 className="articles__title">
                Штучний інтелект для тестувальника. Загроза чи помічник?
              </h3>
              <p className="articles__description">
                Штучний інтелект для тестувальника. Загроза чи помічник? Штучний
                інтелект для тестувальника. Загроза чи помічник?{" "}
              </p>
              <div className="text-right">
                <a href="#" className="btn">
                  Дивитись
                </a>
              </div>
            </div>
          </div> */}
          <a href="../" className="lng-home home-link">
          {getLangText("home")}
          </a>
        {/* </div> */}
      </div>
    </section>
  );
}

export default SeparateArticleFooter;
