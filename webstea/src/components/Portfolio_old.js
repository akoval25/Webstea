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
import { useRef } from "react";

import { Pagination } from "swiper/modules";

function Portfolio() {
  // const { getLangText } = useLang();
  const { getLangText, currentLang } = useLang();
  const currentLangPath = generateUrl(currentLang, "");

  const infoBtnOpenRef = useRef(null);
  const infoBtnCloseRef = useRef(null);
  const infoRef = useRef(null);
  const openBtn = () => {
    infoBtnCloseRef.current.classList.toggle("active");
    infoRef.current.classList.toggle("active");
  };
  const closeBtn = () => {
    if (infoRef.current.classList.contains("active")) {
      infoBtnCloseRef.current.classList.remove("active");
      infoRef.current.classList.remove("active");
    }
  };

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
              <SwiperSlide>
                <div className="portfolio__slide">
                  <button className="portfolio__slide-info--close" ref={infoBtnCloseRef} onClick={closeBtn}>X</button>
                  <img src={portfolio1}></img>
                  <div className="portfolio__slide-content" ref={infoRef}>
                    <h3 className="lng-portfolio-first-subtitle">
                      {getLangText("portfolio-first-subtitle")}
                    </h3>
                    <p className="lng-portfolio-first-description">
                      {getLangText("portfolio-first-description")}
                    </p>
                    {/* <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a> */}
                  </div>
                  <button className="portfolio__slide-info--open" ref={infoBtnOpenRef} onClick={openBtn}>
                    <img src={infoIcon}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                <button className="portfolio__slide-info--close" ref={infoBtnCloseRef} onClick={closeBtn}>X</button>
                <img src={portfolio2}></img>
                  <div className="portfolio__slide-content" ref={infoRef}>
                    <h3 className="lng-portfolio-second-subtitle">
                      {getLangText("portfolio-second-subtitle")}
                    </h3>
                    <p className="lng-portfolio-second-description">
                      {getLangText("portfolio-second-description")}
                    </p>
                    {/* <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a> */}
                  </div>
                  <button className="portfolio__slide-info--open" ref={infoBtnOpenRef} onClick={openBtn}>
                    <img src={infoIcon}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                <button className="portfolio__slide-info--close" ref={infoBtnCloseRef} onClick={closeBtn}>X</button>
                <img src={portfolio3}></img>
                  <div className="portfolio__slide-content" ref={infoRef}>
                    <h3 className="lng-portfolio-third-subtitle">
                      {getLangText("portfolio-third-subtitle")}
                    </h3>
                    <p className="lng-portfolio-third-description">
                      {getLangText("portfolio-third-description")}
                    </p>
                    {/* <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a> */}
                  </div>
                  <button className="portfolio__slide-info--open" ref={infoBtnOpenRef} onClick={openBtn}>
                    <img src={infoIcon}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                <button className="portfolio__slide-info--close" ref={infoBtnCloseRef} onClick={closeBtn}>X</button>
                <img src={portfolio4}></img>
                  <div className="portfolio__slide-content" ref={infoRef}>
                    <h3 className="lng-portfolio-fouth-subtitle">
                      {getLangText("portfolio-fouth-subtitle")}
                    </h3>
                    <p className="lng-portfolio-fouth-description">
                      {getLangText("portfolio-fouth-description")}
                    </p>
                    {/* <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a> */}
                  </div>
                  <button className="portfolio__slide-info--open" ref={infoBtnOpenRef} onClick={openBtn}>
                    <img src={infoIcon}></img>
                  </button>
                </div>
              </SwiperSlide>
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
