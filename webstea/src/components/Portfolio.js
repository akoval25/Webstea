import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Portfolio.scss";
import { useLang } from "../scripts/LangContext.js";
import { Link } from "react-router-dom";
import { generateUrl } from "../scripts/url.js";
import portfolio1 from "../images/portfolio-1.png";
import portfolio2 from "../images/portfolio-2.png";
import portfolio3 from "../images/portfolio-3.png";
import portfolio4 from "../images/portfolio-4.png";
import infoIcon from "../images/info-icon.svg";
import React, { useRef } from "react";

import { Pagination } from "swiper/modules";

function Portfolio() {
  // const { getLangText } = useLang();
  const { getLangText, currentLang } = useLang();
  const currentLangPath = generateUrl(currentLang, "");


  const infoBtnCloseRefs = useRef([]);
  const infoBtnOpenRefs = useRef([]);
  const infoRefs = useRef([]);

  const openBtn = (index) => {
    infoBtnCloseRefs.current[index].classList.toggle("active");
    infoRefs.current[index].classList.toggle("active");
  };

  const closeBtn = (index) => {
    if (infoRefs.current[index].classList.contains("active")) {
      infoBtnCloseRefs.current[index].classList.remove("active");
      infoRefs.current[index].classList.remove("active");
    }
  };

  const portfolios = [portfolio1, portfolio2, portfolio3, portfolio4];

  return (
    <section id="portfolio" className="portfolio section__mb">
      <div className="container">
        <h2 className="lng-portfolio-title">
          {getLangText("portfolio-title")}
        </h2>
        <div className="portfolio__inner">
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="portfolio__slider"
              breakpoints={{
                901: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {portfolios.map((portfolio, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio__slide">
                  <button
                    className="portfolio__slide-info--close"
                    ref={(el) => (infoBtnCloseRefs.current[index] = el)}
                    onClick={() => closeBtn(index)}
                  >
                    X
                  </button>
                  <img src={portfolio} alt={`Portfolio ${index + 1}`} />
                  <div
                    className="portfolio__slide-content"
                    ref={(el) => (infoRefs.current[index] = el)}
                  >
                    <h3 className={`lng-portfolio-${index + 1}-subtitle`}>
                      {getLangText(`portfolio-${index + 1}-subtitle`)}
                    </h3>
                    <p className={`lng-portfolio-${index + 1}-description`}>
                      {getLangText(`portfolio-${index + 1}-description`)}
                    </p>
                  </div>
                  <button
                    className="portfolio__slide-info--open"
                    ref={(el) => (infoBtnOpenRefs.current[index] = el)}
                    onClick={() => openBtn(index)}
                  >
                    <img src={infoIcon} alt="Info Icon" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </>
          {/* <div className="portfolio__bottom">
          <Link 
            to={`${currentLangPath}/portfolio`} className="btn">See all</Link >
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
