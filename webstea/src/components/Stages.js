import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Stages.scss";

import { Pagination } from "swiper/modules";

function Stages() {
  const stagesPaginationTop = {
    clickable: true,
    renderBullet: function (index, className) {
      const stagesPaginationTopText = [
        "Аналіз",
        "Прототип",
        "Дизайн",
        "Розробка",
        "Запуск",
      ];
      return (
        '<span class="' +
        className +
        '">' +
        stagesPaginationTopText[index] +
        "</span>"
      );
    },
  };

  return (
    <section className="stages section__mb">
      <div className="container">
        <h2>Етапи створення вашого сайту</h2>
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
                      <h3>Аналіз</h3>
                      <p>
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3>Прототип</h3>
                      <p>
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3>Дизайн</h3>
                      <p>
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3>Розробка</h3>
                      <p>
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stages__slide">
                  <div className="stages__slide-inner">
                    <div className="stages__slide-text">
                      <h3>Запуск</h3>
                      <p>
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
                        Розробляємо оригінальний дизайн, що робить покупки
                        онлайн зрозумілими і приємними, та який візуально
                        відтворюватиме фірмовий стиль вашої компанії.
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
