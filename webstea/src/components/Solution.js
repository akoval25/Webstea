import "../styles/Solution.scss";
import { useLang } from "../scripts/LangContext.js";

function Solution() {
  const { getLangText } = useLang();
  return (
    <section className="solution section__mb">
      <div className="container">
        <h2 className="text-center lng-solution-title">{getLangText("solution-title")}</h2>
        <div className="solution__inner">
          <div className="solution__item">
            <h3 className="lng-solution-first-subtitle">{getLangText("solution-first-subtitle")}</h3>
            <p className="lng-solution-first-description">
            {getLangText("solution-first-description")}
            </p>
          </div>
          <div className="solution__item">
            <h3 className="lng-solution-second-subtitle">{getLangText("solution-second-subtitle")}</h3>
            <p className="lng-solution-second-description">
            {getLangText("solution-second-description")}
            </p>
          </div>
          <div className="solution__item">
            <h3 className="lng-solution-third-subtitle">{getLangText("solution-third-subtitle")}</h3>
            <p className="lng-solution-third-description">
            {getLangText("solution-third-description")}
            </p>
          </div>
          <div className="solution__item">
            <h3 className="lng-solution-fourth-subtitle">{getLangText("solution-fourth-subtitle")}</h3>
            <p className="lng-solution-fourth-description">
            {getLangText("solution-fourth-description")}
            </p>
          </div>
          <div className="solution__item">
            <h3 className="lng-solution-fifth-subtitle">{getLangText("solution-fifth-subtitle")}</h3>
            <p className="lng-solution-fifth-description">
            {getLangText("solution-fifth-description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
