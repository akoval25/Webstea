import "../styles/Info.scss";
import { useLang } from "../scripts/LangContext.js";

function Info() {
  const { getLangText } = useLang();
  return (
    <section className="info section__mb">
      <div className="info__inner">
        <div className="container">
          <div className="info__text">
            <h3 className="lng-info-second">
              <span className="orange lng-info-first">{getLangText("info-first")}</span> {getLangText("info-second")}
            </h3>
            <h3 className="lng-info-third lng-info-fifth">
            {getLangText("info-third")}{" "}
              <span className="orange lng-info-fourth">{getLangText("info-fourth")}</span>{getLangText("info-fifth")}{" "}
              <span className="orange lng-info-sixth">{getLangText("info-sixth")}</span>.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
