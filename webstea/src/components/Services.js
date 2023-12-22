import "../styles/Services.scss";
import servicesIcon1 from "../images/services__bottom-img-1.svg";
import servicesIcon2 from "../images/services__bottom-img-2.svg";
import servicesIcon3 from "../images/services__bottom-img-3.svg";
import servicesIcon4 from "../images/services__bottom-img-4.svg";
import { useLang } from "../scripts/LangContext.js";
import { Link } from 'react-router-dom';
import { generateUrl } from '../scripts/url.js';


function Services() {
 

  const { getLangText, currentLang } = useLang();
  const currentLangPath = generateUrl(currentLang, '');

  return (
    <section id="services" className="services section__mb">
      <div className="container">
        <h2 className="lng-services-title">{getLangText("services-title")}</h2>
        <div className="services__inner">
          <Link 
            to={`${currentLangPath}/landing-page`}
            className="services__item"
          >
            <h3 className="lng-services-landing-title">
              {getLangText("services-landing-title")}
            </h3>
            <p className="services__text lng-services-landing-description">
              {getLangText("services-landing-description")}
            </p>
            <p className="services__link lng-services-landing-btn">
              {getLangText("services-landing-btn")}
            </p>
          </Link>
          <Link 
            to={`${currentLangPath}/business-card`} 
            className="services__item">
            <h3 className="lng-services-card-title">
              {getLangText("services-card-title")}
            </h3>
            <p className="services__text lng-services-card-description">
              {getLangText("services-card-description")}
            </p>
            <p href="#" className="services__link lng-services-landing-btn">
              {getLangText("services-landing-btn")}
            </p>
            </Link>
            <Link 
            to={`${currentLangPath}/e-store`}  className="services__item">
            <h3 className="lng-services-shop-title">
              {getLangText("services-shop-title")}
            </h3>
            <p className="services__text lng-services-shop-description">
              {getLangText("services-shop-description")}
            </p>
            <p href="#" className="services__link lng-services-landing-btn">
              {getLangText("services-landing-btn")}
            </p>
            </Link>
            <Link 
            to={`${currentLangPath}/corporate`} className="services__item">
            <h3 className="lng-services-corporate-title">
              {getLangText("services-corporate-title")}
            </h3>
            <p className="services__text lng-services-corporate-description">
              {getLangText("services-corporate-description")}
            </p>
            <p href="#" className="services__link lng-services-landing-btn">
              {getLangText("services-landing-btn")}
            </p>
            </Link>
            <Link 
            to={`${currentLangPath}/catalog`} className="services__item">
            <h3 className="lng-services-catalog-title">
              {getLangText("services-catalog-title")}
            </h3>
            <p className="services__text lng-services-catalog-description">
              {getLangText("services-catalog-description")}
            </p>
            <p href="#" className="services__link lng-services-landing-btn">
              {getLangText("services-landing-btn")}
            </p>
            </Link>
            <Link 
            to={`${currentLangPath}/custom`}  className="services__item">
            <h3 className="lng-services-project-title">
              {getLangText("services-project-title")}
            </h3>
            <p className="services__text lng-services-project-description">
              {getLangText("services-project-description")}
            </p>
            <p href="#" className="services__link lng-services-landing-btn">
              {getLangText("services-landing-btn")}
            </p>
            </Link>
        </div>
        <div className="services__bottom">
          <div className="services__bottom-item">
            <img src={servicesIcon1}></img>
            <h3 className="lng-services-support-title">
              {getLangText("services-support-title")}
            </h3>
            <p className="services__text lng-services-support-description">
              {getLangText("services-support-description")}
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon2}></img>
            <h3 className="lng-services-fix-title">
              {getLangText("services-fix-title")}
            </h3>
            <p className="services__text lng-services-fix-description">
              {getLangText("services-fix-description")}
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon3}></img>
            <h3 className="lng-services-design-title">
              {getLangText("services-design-title")}
            </h3>
            <p className="services__text lng-services-design-description">
              {getLangText("services-design-description")}
            </p>
          </div>
          <div className="services__bottom-item">
            <img src={servicesIcon4}></img>
            <h3 className="lng-services-seo-title">
              {getLangText("services-seo-title")}
            </h3>
            <p className="services__text lng-services-seo-description">
              {getLangText("services-seo-description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
