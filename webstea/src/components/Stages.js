import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Stages.scss";
import { useLang } from "../scripts/LangContext.js";

import { Pagination } from "swiper/modules";

function Stages() {
  const { getLangText } = useLang();
    const currentLang = window.location.pathname.split('/')[1].toLowerCase();
    const stagesPaginationTop = {
      clickable: true,
      renderBullet: function (index, className) {
        const langArr = {
          "ua": {
            "st1": "Аналіз",
            "st2": "Прототип",
            "st3": "Дизайн",
            "st4": "Розробка",
            "st5": "Запуск",
          },
          "en": {
            "st1": "Analysis",
            "st2": "Prototype",
            "st3": "Design",
            "st4": "Development",
            "st5": "Launching",
          },
        };
        const validLang = currentLang === 'en' || currentLang === 'ua' ? currentLang : 'ua';
        const text = langArr[validLang][`st${index + 1}`];
  
        return (
          `<span class="${className}">
            ${text}
          </span>`
        );
      },
    };
  



  return (
    <section className="stages section__mb">
      <div className="container">
        <h2 className="lng-stages-title">{getLangText("stages-title")}</h2>
        <div className="stages__inner">
          <>
            <Swiper
              pagination={stagesPaginationTop}
              modules={[Pagination]}
              className="stages__slider"
            >
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3 className="lng-st21">{getLangText("st21")}</h3>
                      <p className="lng-st21-description">
                      {getLangText("st21-description")}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3 className="lng-st22">{getLangText("st22")}</h3>
                      <p className="lng-st22-description">
                      {getLangText("st22-description")}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3 className="lng-st23">{getLangText("st23")}</h3>
                      <p className="lng-st23-description">
                      {getLangText("st23-description")}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3 className="lng-st24">{getLangText("st24")}</h3>
                      <p className="lng-st24-description">
                      {getLangText("st24-description")}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3 className="lng-st25">{getLangText("st25")}</h3>
                      <p className="lng-st25-description">
                      {getLangText("st25-description")}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          {/* <div className="pagination__bottom">
            <span className="pagination__bottom-item"></span>
            <span className="pagination__bottom-item"></span>
            <span className="pagination__bottom-item"></span>
            <span className="pagination__bottom-item"></span>
            <span className="pagination__bottom-item"></span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Stages;
