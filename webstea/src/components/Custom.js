import "../styles/Custom.scss";
import landingImg from "../images/service-6.png";
import { useLang } from "../scripts/LangContext.js";

function Custom() {
  const { getLangText } = useLang();
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="inner__mb">
          <h1 className="lng-custom-title text-center">{getLangText("custom-title")}</h1>
          <h2 className="lng-custom-description text-center">
          {getLangText("custom-description")}
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">
            <h3 className="lng-custom-first-bold desktop-visible">{getLangText("custom-first-bold")}</h3>
            <p className="lng-custom-first-description inner__mb">
            {getLangText("custom-first-description")}</p>   
            <div className="inner__mb component__list">
          <h3 className="lng-custom-second-bold">{getLangText("custom-second-bold")}</h3>
          <ul className="list-circle inner__mb">
            <li className="lng-custom-second-a-description">{getLangText("custom-second-a-description")}</li>
            <li className="lng-custom-second-b-description">{getLangText("custom-second-b-description")}</li>
            <li className="lng-custom-second-c-description">{getLangText("custom-second-c-description")}</li>
            <li className="lng-custom-second-d-description">{getLangText("custom-second-d-description")}</li>
          </ul>
        </div>
          </div>
          <div className="content-img">
            <h3 className="lng-custom-first-bold mobile-visible text-center">{getLangText("custom-first-bold")}</h3>
            <div className="content-img-wrapper">
              <img alt="landing" src={landingImg}></img>
            </div>
          </div>
        </div>
        <div className="text-center inner__mb">
          <a className="lng-custom-order btn" href="#contact">{getLangText("custom-order")}</a>
        </div>
        
        <div className="section__mb component__list">
          <h3 className="lng-custom-third-bold">{getLangText("custom-third-bold")}</h3>
          <ul className="list-circle">
            <li className="lng-custom-third-a-description">{getLangText("custom-third-a-description")}</li>
            <li className="lng-custom-third-b-description">{getLangText("custom-third-b-description")}</li>
            <li className="lng-custom-third-c-description">{getLangText("custom-third-c-description")}</li>
            <li className="lng-custom-third-d-description">{getLangText("custom-third-d-description")}</li>
            <li className="lng-custom-third-e-description">{getLangText("custom-third-e-description")}</li>
            <li className="lng-custom-third-f-description">{getLangText("custom-third-f-description")}</li>
            <li className="lng-custom-third-g-description">{getLangText("custom-third-g-description")}</li>
            <li className="lng-custom-third-h-description">{getLangText("custom-third-h-description")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Custom;