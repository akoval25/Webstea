import "../styles/SeparateArticle.scss";
import { useLang } from "../scripts/LangContext.js";

function SeparateArticleHeader() {
  const { getLangText } = useLang();
    return (
      <section className="section__first">
        <div className="container inner__mb">
        <a href="../blog" className="lng-all-articles home-link">
        {getLangText("all-articles")}
          </a>
        </div>
      </section>
  );
}

export default SeparateArticleHeader;