import "../styles/Store.scss";
import landingImg from "../images/service-3.png";

import { useLang } from "../scripts/LangContext.js";


function Store() {
  const { getLangText } = useLang();
  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="inner__mb">

          <h1 className="lng-store-title text-center">{getLangText("store-title")}</h1>
          <h2 className="lng-store-subtitle text-center">
          {getLangText("store-subtitle")}

          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">

            <h3 className="lng-store-first-bold desktop-visible">{getLangText("store-first-bold")}</h3>
            <p className="lng-store-first-description inner__mb">
            {getLangText("store-first-description")}</p>  
            <div className="inner__mb component__list">
          <h3 className="lng-store-second-bold">{getLangText("store-second-bold")}</h3>
          <ul className="list-circle inner__mb">
            <li className="lng-store-second-a-description">{getLangText("store-second-a-description")}</li>
            <li className="lng-store-second-b-description">{getLangText("store-second-b-description")}</li>
            <li className="lng-store-second-c-description">{getLangText("store-second-c-description")}</li>
            <li className="lng-store-second-d-description">{getLangText("store-second-d-description")}</li>
            <li className="lng-store-second-e-description">{getLangText("store-second-e-description")}</li>



          </ul>
        </div> 
          </div>
          <div className="content-img">
            <h3 className="lng-store-first-bold mobile-visible text-center">{getLangText("store-first-bold")}</h3>

            <div className="content-img-wrapper">
              <img alt="landing" src={landingImg}></img>
            </div>
          </div>
        </div>
        <div className="text-center inner__mb">

          <a className="lng-store-order btn" href="#contact">{getLangText("store-order")}</a>
        </div>
        
        <div className="section__mb component__list">

          <h3 className="lng-store-third-bold">{getLangText("store-third-bold")}</h3>
          <ul className="list-circle">
            <li className="lng-store-third-a-description">{getLangText("store-third-a-description")}</li>
            <li className="lng-store-third-b-description">{getLangText("store-third-b-description")}</li>
            <li className="lng-store-third-c-description">{getLangText("store-third-c-description")}</li>
            <li className="lng-store-third-d-description">{getLangText("store-third-d-description")}</li>
            <li className="lng-store-third-e-description">{getLangText("store-third-e-description")}</li>
            <li className="lng-store-third-f-description">{getLangText("store-third-f-description")}</li>
            <li className="lng-store-third-g-description">{getLangText("store-third-g-description")}</li>
            <li className="lng-store-third-h-description">{getLangText("store-third-h-description")}</li>

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Store;