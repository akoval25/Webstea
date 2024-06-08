import "../styles/SeparateArticle.scss";
import articleImg from "../images/article-one.png";
import { useLang } from "../scripts/LangContext.js";

function ArticleThree() {
  const { getLangText } = useLang();
  return (
    <section className="section__mb">
      <div className="container">
        <article className="article">
          <img alt="articles item" src={articleImg}></img>
          <h1 className="lng-blog-third-subtitle">
          {getLangText("blog-third-subtitle")}</h1>
          <p className="lng-blog-third-1-part">
          {getLangText("blog-third-1-part")}
          </p>
          <p className="lng-blog-third-2-part">
          {getLangText("blog-third-2-part")}
          </p>
          <p className="lng-blog-third-3-part">
          {getLangText("blog-third-3-part")}</p>
          <p className="lng-blog-third-4-part">
          {getLangText("blog-third-4-part")}
          </p>
          <p className="lng-blog-third-5-part">
          {getLangText("blog-third-5-part")}
          </p>
          <p className="lng-blog-third-6-part">
          {getLangText("blog-third-6-part")}
          </p>
          <p className="lng-blog-third-7-part">
          {getLangText("blog-third-7-part")}
          </p>
        </article>
      </div>
    </section>
  );
}

export default ArticleThree;
