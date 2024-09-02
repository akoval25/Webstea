import "../styles/Business.scss";
import landingImg from "../images/service-2.png";

import { useLang } from "../scripts/LangContext.js";

function Business() {
  const { getLangText } = useLang();

  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="inner__mb">

          <h1 className="lng-business-title text-center">{getLangText("business-title")}</h1>
          <h2 className="lng-business-description text-center">
          {getLangText("business-description")}
          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">

            <h3 className="lng-business-first-bold desktop-visible">{getLangText("business-first-bold")}</h3>
            <p className="lng-business-first-description inner__mb">
            {getLangText("business-first-description")}
            </p>  
            <div className="inner__mb component__list">
          <h3 className="lng-business-second-bold">{getLangText("business-second-bold")}</h3>
          <ul className="list-circle inner__mb">
            <li className="lng-business-a-second-description">{getLangText("business-a-second-description")}</li>
            <li className="lng-business-b-second-description">{getLangText("business-b-second-description")}</li>
            <li className="lng-business-c-second-description">{getLangText("business-c-second-description")}</li>
            <li className="lng-business-d-second-description">{getLangText("business-d-second-description")}</li>
            <li className="lng-business-e-second-description">{getLangText("business-e-second-description")}</li>
            <li className="lng-business-f-second-description">{getLangText("business-f-second-description")}</li>


          </ul>
        </div> 
          </div>
          <div className="content-img">
            <h3 className="lng-business-first-bold mobile-visible text-center">{getLangText("business-first-bold")}</h3>

            <div className="content-img-wrapper">
              <img alt="landing" src={landingImg}></img>
            </div>
          </div>
        </div>
        <div className="text-center inner__mb">

          <a className="lng-business-order btn" href="#contact">{getLangText("business-order")}</a>
        </div>
        
        <div className="section__mb component__list">

          <h3 className="lng-business-third-bold">{getLangText("business-third-bold")}</h3>
          <ul className="list-circle">
            <li className="lng-business-a-third-description">{getLangText("business-a-third-description")}</li>
            <li className="lng-business-b-third-description">{getLangText("business-b-third-description")}</li>
            <li className="lng-business-c-third-description">{getLangText("business-c-third-description")}</li>
            <li className="lng-business-d-third-description">{getLangText("business-d-third-description")}</li>
            <li className="lng-business-e-third-description">{getLangText("business-e-third-description")}</li>
            <li className="lng-business-f-third-description">{getLangText("business-f-third-description")}</li>
            <li className="lng-business-g-third-description">{getLangText("business-g-third-description")}</li>
            <li className="lng-business-h-third-description">{getLangText("business-h-third-description")}</li>

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Business;
