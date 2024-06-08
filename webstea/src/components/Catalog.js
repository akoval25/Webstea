import "../styles/Catalog.scss";
import landingImg from "../images/landing1x1.png";
import { useLang } from "../scripts/LangContext.js";

function Catalog() {
  const { getLangText } = useLang();
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">
          <h1 className="lng-catalog-title text-center">{getLangText("catalog-title")}</h1>
          <h2 className="lng-catalog-description text-center">
          {getLangText("catalog-description")}
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="lng-catalog-first-bold desktop-visible">{getLangText("catalog-first-bold")}</h3>
            <p className="lng-catalog-first-description inner__mb">
            {getLangText("catalog-first-description")}</p>   
          </div>
          <div className="content-img">
            <h3 className="lng-catalog-first-bold mobile-visible text-center">{getLangText("catalog-first-bold")}</h3>
            <img alt="landing" src={landingImg}></img>
          </div>
        </div>
        <div className="text-center inner__mb">
          <a className="lng-catalog-order btn" href="#contact">{getLangText("catalog-order")}</a>
        </div>
        <div className="inner__mb component__list">
          <h3 className="lng-catalog-second-bold">{getLangText("catalog-second-bold")}</h3>
          <ul className="list-plus inner__mb">
            <li className="lng-catalog-second-a-description">{getLangText("catalog-second-a-description")}</li>
            <li className="lng-catalog-second-b-description">{getLangText("catalog-second-b-description")}</li>
            <li className="lng-catalog-second-c-description">{getLangText("catalog-second-c-description")}</li>
            <li className="lng-catalog-second-d-description">{getLangText("catalog-second-d-description")}</li>
            <li className="lng-catalog-second-e-description">{getLangText("catalog-second-e-description")}</li>


          </ul>
        </div>
        <div className="section__mb component__list">
          <h3 className="lng-catalog-third-bold">{getLangText("catalog-third-bold")}</h3>
          <ul className="list-circle">
            <li className="lng-catalog-third-a-description">{getLangText("catalog-third-a-description")}</li>
            <li className="lng-catalog-third-b-description">{getLangText("catalog-third-b-description")}</li>
            <li className="lng-catalog-third-c-description">{getLangText("catalog-third-c-description")}</li>
            <li className="lng-catalog-third-d-description">{getLangText("catalog-third-d-description")}</li>
            <li className="lng-catalog-third-e-description">{getLangText("catalog-third-e-description")}</li>
            <li className="lng-catalog-third-f-description">{getLangText("catalog-third-f-description")}</li>
            <li className="lng-catalog-third-g-description">{getLangText("catalog-third-g-description")}</li>
            <li className="lng-catalog-third-h-description">{getLangText("catalog-third-h-description")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Catalog;