import "../styles/Corporate.scss";
import landingImg from "../images/landing1x1.png";

import { useLang } from "../scripts/LangContext.js";



function Corporate() {
  const { getLangText } = useLang();
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">

          <h1 className="lng-corporate-title text-center">{getLangText("corporate-title")}</h1>
          <h2 className="lng-corporate-description text-center">
          {getLangText("corporate-description")}

          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">

            <h3 className="lng-corporate-first-bold desktop-visible">{getLangText("corporate-first-bold")}</h3>

            <p className="lng-corporate-first-description inner__mb">
            {getLangText("corporate-first-description")}</p>   
          </div>
          <div className="content-img">

            <h3 className="lng-corporate-first-bold mobile-visible text-center">{getLangText("corporate-first-bold")}</h3>

            <img alt="landing" src={landingImg}></img>
          </div>
        </div>
        <div className="text-center inner__mb">
          <a className="lng-corporate-order btn" href="#contact">{getLangText("corporate-order")}</a>
        </div>
        <div className="inner__mb component__list">
          <h3 className="lng-corporate-second-bold">{getLangText("corporate-second-bold")}</h3>
          <ul className="list-plus inner__mb">
            <li className="lng-corporate-second-a-description">{getLangText("corporate-second-a-description")}</li>
            <li className="lng-corporate-second-b-description">{getLangText("corporate-second-b-description")}</li>
            <li className="lng-corporate-second-c-description">{getLangText("corporate-second-c-description")}</li>
            <li className="lng-corporate-second-d-description">{getLangText("corporate-second-d-description")}</li>

          </ul>
        </div>
        <div className="section__mb component__list">
          <h3 className="lng-corporate-third-bold">{getLangText("ccorporate-third-bold")}</h3>
          <ul className="list-circle">
            <li className="lng-corporate-third-a-description">{getLangText("corporate-third-a-description")}</li>
            <li className="lng-corporate-third-b-description">{getLangText("corporate-third-b-description")}</li>
            <li className="lng-corporate-third-c-description">{getLangText("corporate-third-c-description")}</li>
            <li className="lng-corporate-third-d-description">{getLangText("corporate-third-d-description")}</li>
            <li className="lng-corporate-third-e-description">{getLangText("corporate-third-e-description")}</li>
            <li className="lng-corporate-third-f-description">{getLangText("corporate-third-f-description")}</li>
            <li className="lng-corporate-third-g-description">{getLangText("corporate-third-g-description")}</li>
            <li className="lng-corporate-third-h-description">{getLangText("corporate-third-h-description")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Corporate;