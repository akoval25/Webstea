import "../styles/SeparateArticle.scss";
import articleImg from "../images/article-hero-1.png";
import { useLang } from "../scripts/LangContext.js";

function ArticleOne() {
  const { getLangText } = useLang();
  return (
    <section className="section__mb">
      <div className="container">
        <article className="article">
          <img alt="articles item" src={articleImg}></img>
          <h1 className="lng-blog-first-subtitle">
          {getLangText("blog-first-subtitle")}
          </h1>
          <p className="lng-blog-first-1-part">
          {getLangText("blog-first-1-part")}</p>
          <p className="lng-blog-first-2-part">
          {getLangText("blog-first-2-part")}</p>
          <p className="lng-blog-first-3-part">
          {getLangText("blog-first-3-part")}</p>
          <p className="lng-blog-first-4-part">
          {getLangText("blog-first-4-part")}</p>
        </article>
      </div>
    </section>
  );
}

export default ArticleOne;
