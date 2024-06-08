import "../styles/Articles.scss";
import { useLang } from "../scripts/LangContext.js";
import { Link } from "react-router-dom";
import { generateUrl } from "../scripts/url.js";
import articleImg1 from "../images/article-item.png";

function Articles() {
  const { getLangText, currentLang } = useLang();
  const currentLangPath = generateUrl(currentLang, "");
  const items = document.querySelectorAll(".articles__content");
  let maxHeight = 0;
  items.forEach((item) => {
    const height = item.clientHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  items.forEach((item) => {
    item.style.height = `${maxHeight}px`;
  });
  return (
    <section className="articles section__mb section__first">
      <div className="articles__inner">
        <div className="container">
          <Link to={`${currentLangPath}/`} className="lng-home home-link">
          {getLangText("home")}
          </Link>
          <div className="articles__items">
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <div className="articles__content">
                <div className="articles__title">
                  <h3 className="lng-blog-first-subtitle articles__title">
                  {getLangText("blog-first-subtitle")}
                  </h3>
                </div>
                <div className="articles__description">
                  <p className="lng-blog-first-description">
                  {getLangText("blog-first-description")}
                  </p>
                </div>
                <div className="articles__item-bottom">
                  <Link
                    to={`${currentLangPath}/blog/ai-for-business`}
                    className="lng-blog-btn btn"
                  >
                    {getLangText("blog-btn")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <div className="articles__content">
                <div className="articles__title">
                  <h3 className="lng-blog-second-subtitle">
                  {getLangText("blog-second-subtitle")}
                  </h3>
                </div>
                <div className="articles__description">
                  <p className="lng-blog-second-description">
                  {getLangText("blog-second-description")}
                  </p>
                </div>
                <div className="articles__item-bottom">
                  <Link
                    to={`${currentLangPath}/blog/internet-of-things`}
                    className="lng-blog-btn btn"
                  >
                    {getLangText("blog-btn")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <div className="articles__content">
                <div className="articles__title">
                  <h3 className="lng-blog-third-subtitle">
                  {getLangText("blog-third-subtitle")}
                  </h3>
                </div>
                <div className="articles__description">
                  <p className="lng-blog-third-description">
                  {getLangText("blog-third-description")}
                  </p>
                </div>
                <div className="articles__item-bottom">
                  <Link
                    to={`${currentLangPath}/blog/blockchain-and-crypto`}
                    className="lng-blog-btn btn"
                  >
                    {getLangText("blog-btn")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <div className="articles__content">
                <div className="articles__title">
                  <h3 className="lng-blog-fourth-subtitle">
                  {getLangText("blog-fourth-subtitle")}</h3>
                </div>
                <div className="articles__description">
                  <p className="lng-blog-fourth-description">
                  {getLangText("blog-fourth-description")}
                  </p>
                </div>
                <div className="articles__item-bottom">
                  <Link
                    to={`${currentLangPath}/blog/cloud-technologies`}
                    className="lng-blog-btn btn"
                  >
                    {getLangText("blog-btn")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <div className="articles__content">
                <div className="articles__title">
                  <h3 className="lng-blog-fifth-subtitle">
                  {getLangText("blog-fifth-subtitle")}
                  </h3>
                </div>
                <div className="articles__description">
                  <p className="lng-blog-fifth-description">
                  {getLangText("blog-fifth-description")}
                  </p>
                </div>
                <div className="articles__item-bottom">
                  <Link
                    to={`${currentLangPath}/blog/machine-learning-in-medicine`}
                    className="lng-blog-btn btn"
                  >
                    {getLangText("blog-btn")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="articles__item">
              <div className="articles__img">
                <img alt="articles item" src={articleImg1}></img>
              </div>
              <div className="articles__content">
                <div className="articles__title">
                  <h3 className="lng-blog-sixth-subtitle">
                  {getLangText("blog-sixth-subtitle")}
                  </h3>
                </div>
                <div className="articles__description">
                  <p className="lng-blog-sixth-description">
                  {getLangText("blog-sixth-description")}
                  </p>
                </div>
                <div className="articles__item-bottom">
                  <Link
                    to={`${currentLangPath}/blog/cyber-security`}
                    className="lng-blog-btn btn"
                  >
                    {getLangText("blog-btn")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
