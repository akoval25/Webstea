import "../styles/SeparateArticle.scss";
import articleImg from "../images/article-hero-2.png";
import { useLang } from "../scripts/LangContext.js";

function ArticleTwo() {
  const { getLangText } = useLang();
  return (
    <section className="section__mb">
      <div className="container">
        <article className="article">
          <img alt="articles item" src={articleImg}></img>
          <h1 className="lng-blog-second-subtitle">{getLangText("blog-second-subtitle")}</h1>
          <p className="lng-blog-second-1-part">
          {getLangText("blog-second-1-part")}</p>
          <p className="lng-blog-second-2-part">
          {getLangText("blog-second-2-part")}</p>
          <p className="lng-blog-second-3-part">
          {getLangText("blog-second-3-part")}
          </p>
          <p className="lng-blog-second-4-part">
          {getLangText("blog-second-4-part")}</p>
          <p className="lng-blog-second-5-part">
          {getLangText("blog-second-5-part")}</p>
        </article>
      </div>
    </section>
  );
}

export default ArticleTwo;
