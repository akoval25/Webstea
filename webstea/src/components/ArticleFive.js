import "../styles/SeparateArticle.scss";
import articleImg from "../images/article-hero-5.png";
import { useLang } from "../scripts/LangContext.js";

function ArticleFive() {
  const { getLangText } = useLang();
  return (
    <section className="section__mb">
      <div className="container">
        <article className="article">
          <img alt="articles item" src={articleImg}></img>
          <h1 className="lng-blog-fifth-subtitle">
          {getLangText("blog-fifth-subtitle")}</h1>
          <p className="lng-blog-fifth-1-part">
          {getLangText("blog-fifth-1-part")}
          </p>
          <p className="lng-blog-fifth-2-part">
          {getLangText("blog-fifth-2-part")}
          </p>
          <p className="lng-blog-fifth-3-part">
          {getLangText("blog-fifth-3-part")}</p>
          <p className="lng-blog-fifth-4-part">
          {getLangText("blog-fifth-4-part")}
          </p>
          <p className="lng-blog-fifth-5-part">
          {getLangText("blog-fifth-5-part")}
          </p>
          <p className="lng-blog-fifth-6-part">
          {getLangText("blog-fifth-6-part")}
          </p>
          <p className="lng-blog-fifth-7-part">
          {getLangText("blog-fifth-7-part")}</p>
          <p className="lng-blog-fifth-8-part">
          {getLangText("blog-fifth-8-part")}
          </p>
        </article>
      </div>
    </section>
  );
}

export default ArticleFive;
