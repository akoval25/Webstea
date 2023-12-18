import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLang } from "../scripts/LangContext.js";

import "swiper/css";
import "swiper/css/scrollbar";
import "../styles/Blog.scss";

import { Scrollbar } from "swiper/modules";

function Blog() {
  const { getLangText } = useLang();
  return (
    <section id="blog" className="blog section__mb">
      <div className="container">
        <h2 className="text-right lng-blog-title">{getLangText("blog-title")}</h2>
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
              breakpoints={{
                769: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3 className="lng-blog-first-subtitle">{getLangText("blog-first-subtitle")}</h3>
                    <p className="lng-blog-first-description">{getLangText("blog-first-description")}</p>
                    <a href="#" className="btn lng-blog-btn">
                    {getLangText("blog-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3 className="lng-blog-second-subtitle">{getLangText("blog-second-subtitle")}</h3>
                    <p className="lng-blog-second-description">
                    {getLangText("blog-second-description")}
                    </p>
                    <a href="#" className="btn lng-blog-btn">
                    {getLangText("blog-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3 className="lng-blog-third-subtitle">{getLangText("blog-third-subtitle")}</h3>
                    <p className="lng-blog-third-description">{getLangText("blog-third-description")}</p>
                    <a href="#" className="btn lng-blog-btn">
                    {getLangText("blog-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                    <h3 className="lng-blog-fourth-subtitle">{getLangText("blog-fourth-subtitle")}</h3>
                    <p className="lng-blog-fourth-description">{getLangText("blog-fourth-description")}</p>
                    <a href="#" className="btn lng-blog-btn">
                    {getLangText("blog-btn")}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__slide">
                  <div className="blog__slide-content">
                  <h3 className="lng-blog-fifth-subtitle">{getLangText("blog-fifth-subtitle")}</h3>
                    <p className="lng-blog-fifth-description">{getLangText("blog-fifth-description")}</p>
                    <a href="#" className="btn lng-blog-btn">
                    {getLangText("blog-btn")}
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
