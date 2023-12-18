import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Portfolio.scss";
import { useLang } from "../scripts/LangContext.js";

import { Pagination } from "swiper/modules";

function Portfolio() {
  const { getLangText } = useLang();
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
                  <div className="portfolio__slide-content">
                    <h3 className="lng-portfolio-first-subtitle">
                      {getLangText("portfolio-first-subtitle")}
                    </h3>
                    <p className="lng-portfolio-first-description">
                      {getLangText("portfolio-first-description")}
                    </p>
                    <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3 className="lng-portfolio-second-subtitle">
                      {getLangText("portfolio-second-subtitle")}
                    </h3>
                    <p className="lng-portfolio-second-description">
                      {getLangText("portfolio-second-description")}
                    </p>
                    <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3 className="lng-portfolio-third-subtitle">
                      {getLangText("portfolio-third-subtitle")}
                    </h3>
                    <p className="lng-portfolio-third-description">
                      {getLangText("portfolio-third-description")}
                    </p>
                    <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3 className="lng-portfolio-fouth-subtitle">
                      {getLangText("portfolio-fouth-subtitle")}
                    </h3>
                    <p className="lng-portfolio-fouth-description">
                      {getLangText("portfolio-fouth-description")}
                    </p>
                    <a
                      href="#"
                      className="portfolio__slide-link lng-portfolio-btn"
                    >
                      {getLangText("portfolio-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          <div className="portfolio__bottom">
            <a className="btn">See all</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
