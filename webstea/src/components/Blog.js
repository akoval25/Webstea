import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "../styles/Blog.scss";

import { Scrollbar } from "swiper/modules";

function Blog() {
  return (
    <section className="blog section__mb">
      <div className="container">
        <h2 className="text-right">Блог</h2>
        <div className="blog__inner">
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              scrollbar={{
                draggable: true,
              }}
              modules={[Scrollbar]}
              className="blog__slider"
            >
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3>Як правильно писати сайти?</h3>
                    <p>Може хтось знає? Серйозно, треба поміч, ми не шарим</p>
                    <a href="#" className="btn">
                      Дивитись
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3>Куди ми поїдем, коли заробим мільйон на вебсті?</h3>
                    <p>
                      На фото гори, бо було лінь шукати фото моря, але я за море
                    </p>
                    <a href="#" className="btn">
                      Дивитись
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3>Навіщо тут ці мокапи?</h3>
                    <p>Інтригує? Читайте в статті</p>
                    <a href="#" className="btn">
                      Дивитись
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3>Навіщо тут ці мокапи?</h3>
                    <p>Інтригує? Читайте в статті</p>
                    <a href="#" className="btn">
                      Дивитись
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3>Навіщо тут ці мокапи?</h3>
                    <p>Інтригує? Читайте в статті</p>
                    <a href="#" className="btn">
                      Дивитись
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

export default Blog;
