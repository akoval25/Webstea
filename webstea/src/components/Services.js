import "../styles/Services.scss";
import servicesIcon1 from "../images/services__bottom-img-1.svg";
import servicesIcon2 from "../images/services__bottom-img-2.svg";
import servicesIcon3 from "../images/services__bottom-img-3.svg";
import servicesIcon4 from "../images/services__bottom-img-4.svg";
import { useLang } from "../scripts/LangContext.js";
import { handleLandingSwitch } from "../scripts/url.js";

function Services() {
  const { getLangText } = useLang();
  const currentLang = window.location.pathname.split('/')[1];
  return (
    <section id="services" className="services section__mb">
      <div className="container">
        <h2 className="lng-services-title">{getLangText("services-title")}</h2>
        <div className="services__inner">
          <a href="#" className="services__item" onClick={(e) => handleLandingSwitch(e, currentLang)}>
            <h3 className="lng-services-landing-title">{getLangText("services-landing-title")}</h3>
            <p className="lng-services-landing-description">
            {getLangText("services-landing-description")}
            </p>
            <a href="#" className="services__link lng-services-landing-btn">
            {getLangText("services-landing-btn")}
            </a>
          </a>
          <a href="#" className="services__item">
            <h3 className="lng-services-card-title">{getLangText("services-card-title")}</h3>
            <p className="lng-services-card-description">
            {getLangText("services-card-description")}
            </p>
            <a href="#" className="services__link lng-services-landing-btn">
            {getLangText("services-landing-btn")}
            </a>
          </a>
          <a href="#" className="services__item">
            <h3 className="lng-services-shop-title">{getLangText("services-shop-title")}</h3>
            <p className="lng-services-shop-description">
            {getLangText("services-shop-description")}
            </p>
            <a href="#" className="services__link lng-services-landing-btn">
            {getLangText("services-landing-btn")}
            </a>
          </a>
          <a href="#" className="services__item">
            <h3 className="lng-services-corporate-title">{getLangText("services-corporate-title")}</h3>
            <p className="lng-services-corporate-description">
            {getLangText("services-corporate-description")}
            </p>
            <a href="#" className="services__link lng-services-landing-btn">
            {getLangText("services-landing-btn")}
            </a>
          </a>
          <a href="#" className="services__item">
            <h3 className="lng-services-catalog-title">{getLangText("services-catalog-title")}</h3>
            <p className="lng-services-catalog-description">
            {getLangText("services-catalog-description")}
            </p>
            <a href="#" className="services__link lng-services-landing-btn">
            {getLangText("services-landing-btn")}
            </a>
          </a>
          <a href="#" className="services__item">
            <h3 className="lng-services-project-title">{getLangText("services-project-title")}</h3>
            <p className="lng-services-project-description">
            {getLangText("services-project-description")}
            </p>
            <a href="#" className="services__link lng-services-landing-btn">
            {getLangText("services-landing-btn")}
            </a>
          </a>
        </div>
        <div className="services__bottom">
          <div className="services__bottom-item">
            <img src={servicesIcon1}></img>
            <h3 className="lng-services-support-title">{getLangText("services-support-title")}</h3>
            <p className="lng-services-support-description">
            {getLangText("services-support-description")}
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon2}></img>
            <h3 className="lng-services-fix-title">{getLangText("services-fix-title")}</h3>
            <p className="lng-services-fix-description">
            {getLangText("services-fix-description")}
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon3}></img>
            <h3 className="lng-services-design-title">{getLangText("services-design-title")}</h3>
            <p className="lng-services-design-description">{getLangText("services-design-description")}</p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon4}></img>
            <h3 className="lng-services-seo-title">{getLangText("services-seo-title")}</h3>
            <p className="lng-services-seo-description">
            {getLangText("services-seo-description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
