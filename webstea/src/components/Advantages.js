import "../styles/Advantages.scss";
import { useLang } from "../scripts/LangContext.js";

function Advantages() {
  const { getLangText } = useLang();
  return (
    <section className="advantages section__mb">
      <div className="container">
        <h2 className="lng-advantages-title">{getLangText("advantages-title")}</h2>
        <div className="advantages__inner">
          <div className="advantages__item">
            <span className="advantages__item-num">01</span>
            <h3 className="lng-advantages-subtitle">{getLangText("advantages-subtitle")}</h3>
            <p className="lng-advantages-description">
            {getLangText("advantages-description")}
            </p>
          </div>
          <div className="advantages__item">
            <span className="advantages__item-num">02</span>
            <h3 className="lng-advantages-second-subtitle">{getLangText("advantages-second-subtitle")}</h3>
            <p className="lng-advantages-second-description">{getLangText("advantages-second-description")}</p>
          </div>
          <div className="advantages__item">
            <span className="advantages__item-num">03</span>
            <h3 className="lng-advantages-third-subtitle">{getLangText("advantages-third-subtitle")}</h3>
            <p className="lng-advantages-third-description">
            {getLangText("advantages-third-description")}
            </p>
          </div>
          <div className="advantages__item">
            <span className="advantages__item-num">04</span>
            <h3 className="lng-advantages-fourth-subtitle">{getLangText("advantages-fourth-subtitle")}</h3>
            <p className="lng-advantages-fourth-description">
            {getLangText("advantages-fourth-description")}
            </p>
          </div>
          <div className="advantages__item">
            <span className="advantages__item-num">05</span>
            <h3 className="lng-advantages-fifth-subtitle">{getLangText("advantages-fifth-subtitle")}</h3>
            <p className="lng-advantages-fifth-description">
            {getLangText("advantages-fifth-description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
