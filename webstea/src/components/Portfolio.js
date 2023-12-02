import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Portfolio.scss";

import { Pagination } from "swiper/modules";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2>Наші проєкти</h2>
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
            >
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3>Сайт для Василя Пупкіна</h3>
                    <p>Ми зробили сайт і вийшло дуже прикольно</p>
                    <a href="#" className="btn">
                      Дивитися кейс
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3>Сайт для Укрпошти</h3>
                    <p>За це ми отримали магнітик Пес Патрон</p>
                    <a href="#" className="btn">
                      Дивитися магнітик
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3>Сайт для художника Адольфа</h3>
                    <p>Ціна за сайт склала близько 1488 євро</p>
                    <a href="#" className="btn">
                      \o Зіганути
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-content">
                    <h3>Сайт про меблі</h3>
                    <p>Ми зробили сайт, але який, то треба бачити</p>
                    <a href="#" className="btn">
                      Дивитися крісло
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
