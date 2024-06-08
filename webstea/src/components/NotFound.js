import "../styles/NotFound.scss";
import { useLang } from "../scripts/LangContext.js";

function NotFound() {
  const { getLangText } = useLang();
  return (
    <section className="notfound section__mb section__first">
      <div className="notfound__inner">
        <div className="container">
          <h2 className="text-404"> 404</h2>
          <div className="notfound__bottom">
            <p className="lng-notfound">{getLangText("notfound")}</p>
            <a href="../" className="lng-back btn">{getLangText("back")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
