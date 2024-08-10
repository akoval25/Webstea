import "../styles/SeparateArticle.scss";
import articleImg from "../images/article-hero-6.png";
import { useLang } from "../scripts/LangContext.js";

function ArticleSix() {
  const { getLangText } = useLang();
  return (
    <section className="section__mb">
      <div className="container">
        <article className="article">
          <img alt="articles item" src={articleImg}></img>
          <h1 className="lng-blog-sixth-subtitle">
          {getLangText("blog-sixth-subtitle")}</h1>
          <p className="lng-blog-sixth-1-part">
          {getLangText("blog-sixth-1-part")}</p>
          <p className="lng-blog-sixth-2-part">
          {getLangText("blog-sixth-2-part")}
          </p>
          <p className="lng-blog-sixth-3-part">
          {getLangText("blog-sixth-3-part")}
          </p>
          <p className="lng-blog-sixth-4-part">
          {getLangText("blog-sixth-4-part")}</p>
          <p className="lng-blog-sixth-5-part">
          {getLangText("blog-sixth-5-part")}
          </p>
          <p className="lng-blog-sixth-6-part">
          {getLangText("blog-sixth-6-part")}
          </p>
          <p className="lng-blog-sixth-7-part">
          {getLangText("blog-sixth-7-part")}
          </p>
          <p className="lng-blog-sixth-8-part">
          {getLangText("blog-sixth-8-part")}
          </p>
        </article>
      </div>
    </section>
  );
}

export default ArticleSix;
