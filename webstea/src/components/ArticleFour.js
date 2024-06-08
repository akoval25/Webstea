import "../styles/SeparateArticle.scss";
import articleImg from "../images/article-one.png";
import { useLang } from "../scripts/LangContext.js";

function ArticleFour() {
  const { getLangText } = useLang();
  return (
    <section className="section__mb">
      <div className="container">
        <article className="article">
          <img alt="articles item" src={articleImg}></img>
          <h1 className="lng-blog-fourth-subtitle">{getLangText("blog-fourth-subtitle")}</h1>
          <p className="lng-blog-fourth-1-part">
          {getLangText("blog-fourth-1-part")}
          </p>
          <p className="lng-blog-fourth-2-part">
          {getLangText("blog-fourth-2-part")}
          </p>
          <p className="lng-blog-fourth-3-part">
          {getLangText("blog-fourth-3-part")}</p>
          <p className="lng-blog-fourth-4-part">
          {getLangText("blog-fourth-4-part")}</p>
          <p className="lng-blog-fourth-5-part">
          {getLangText("blog-fourth-5-part")}
          </p>
          <p className="lng-blog-fourth-6-part">
          {getLangText("blog-fourth-6-part")}
          </p>
          <p className="lng-blog-fourth-7-part">
          {getLangText("blog-fourth-7-part")}
          </p>
          <p className="lng-blog-fourth-8-part">
          {getLangText("blog-fourth-8-part")}
          </p>
          <p className="lng-blog-fourth-9-part">
          {getLangText("blog-fourth-9-part")}
          </p>
        </article>
      </div>
    </section>
  );
}

export default ArticleFour;
