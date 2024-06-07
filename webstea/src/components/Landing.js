import "../styles/Landing.scss";
import landingImg from "../images/landing1x1.png";
import landingIcon1 from "../images/landing-icon-1.svg";
import landingIcon2 from "../images/landing-icon-2.svg";
import landingIcon3 from "../images/landing-icon-3.svg";


import { useLang } from "../scripts/LangContext.js";

function Landing() {
  const { getLangText } = useLang();

  return (
    <section className="landing section__mb section__first">
      <div className="container">
        <div className="section__mb">

          <h1 className="lng-landing-title text-center">{getLangText("landing-title")}</h1>
          <h2 className="lng-landing-subtitle text-center">
          {getLangText("landing-subtitle")}

          </h2>
        </div>
        <div className="inner__mb component__text-image">
          <div className="content-text">

            <h3 className="lng-landing-first-bold desktop-visible">{getLangText("landing-first-bold")}</h3>
            <p className="lng-landing-first-description inner__mb">
            {getLangText("landing-first-description")}
            </p>
            <h3 className="lng-landing-second-bold">{getLangText("landing-second-bold")}</h3>
          <ul className="list-plus inner__mb">
            <li className="lng-landing-second-a-description">{getLangText("landing-second-a-description")}</li>
            <li className="lng-landing-second-b-description">{getLangText("landing-second-b-description")}</li>
            <li className="lng-landing-second-c-description">{getLangText("landing-second-c-description")}</li>
            <li className="lng-landing-second-d-description">{getLangText("landing-second-d-description")}</li>
            <li className="lng-landing-second-e-description">{getLangText("landing-second-e-description")}</li>
            <li className="lng-landing-second-f-description">{getLangText("landing-second-f-description")}</li>
            <li className="lng-landing-second-g-description">{getLangText("landing-second-g-description")}</li>
          </ul>
          </div>
          <div className="content-img">
          <h3 className="lng-landing-first-bold mobile-visible text-center">{getLangText("landing-first-bold")}</h3>

            <img alt="landing" src={landingImg}></img>
          </div>
         
        </div>
        <div className="text-center inner__mb">

          <a className="lng-landing-order btn" href="#contact">{getLangText("landing-order")}</a>

          </div>
        {/* <div className="section__mb component__flex">
          <div className="component__flex-item">
            <img alt="icon" src={landingIcon1}></img>
            <h3>Простий Landing Page</h3>
            <ul>
              <li>1-3 екрани</li>
              <li>Стандартний дизайн</li>
              <li>Адаптивна верстка</li>
              <li>Кросбраузерність</li>
              <li>Форма зворотного зв'язку</li>
            </ul>
          </div>
          <div className="component__flex-item">
            <img alt="icon" src={landingIcon2}></img>
            <h3>Середній Landing Page</h3>
            <ul>
              <li>3-5 екранів</li>
              <li>Індивідуальний дизайн</li>
              <li>Адаптивна верстка</li>
              <li>Кросбраузерність</li>
              <li>Форми зворотного зв'язку</li>
            </ul>
          </div>
          <div className="component__flex-item">
            <img alt="icon" src={landingIcon3}></img>
            <h3>Складний Landing Page</h3>
            <ul>
              <li>від 5 екранів</li>
              <li>Індивідуальний дизайн</li>
              <li>Адаптивна верстка</li>
              <li>Кросбраузерність</li>
              <li>Форми зворотного зв'язку</li>
              <li>Калькулятори, квізи тощо</li>
            </ul>

          </div>*/}
          
        </div> 
        {/* <div className="inner__mb component__list">
          <h3 className="lng-landing-second-bold">{getLangText("landing-second-bold")}</h3>
          <ul className="list-plus inner__mb">
          <li className="lng-landing-second-a-description">{getLangText("landing-second-a-description")}</li>
            <li className="lng-landing-second-b-description">{getLangText("landing-second-b-description")}</li>
            <li className="lng-landing-second-c-description">{getLangText("landing-second-c-description")}</li>
            <li className="lng-landing-second-d-description">{getLangText("landing-second-d-description")}</li>
            <li className="lng-landing-second-e-description">{getLangText("landing-second-e-description")}</li>
            <li className="lng-landing-second-f-description">{getLangText("landing-second-f-description")}</li>
            <li className="lng-landing-second-g-description">{getLangText("landing-second-g-description")}</li>
          </ul>
        </div> */}
        <div className="section__mb component__list">
          <h3 className="lng-landing-third-bold">{getLangText("landing-third-bold")}</h3>
          <ul className="list-circle">
            <li className="lng-landing-third-a-description">{getLangText("landing-third-a-description")}</li>
            <li className="lng-landing-third-b-description">{getLangText("landing-third-b-description")}</li>
            <li className="lng-landing-third-c-description">{getLangText("landing-third-c-description")}</li>
            <li className="lng-landing-third-d-description">{getLangText("landing-third-d-description")}</li>
            <li className="lng-landing-third-e-description">{getLangText("landing-third-e-description")}</li>
            <li className="lng-landing-third-f-description">{getLangText("landing-third-f-description")}</li>
            <li className="lng-landing-third-g-description">{getLangText("landing-third-g-description")}</li>
            <li className="lng-landing-third-h-description">{getLangText("landing-third-h-description")}</li>
          </ul>
        </div>
      

    </section>
  );
}

export default Landing;
