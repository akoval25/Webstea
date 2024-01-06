import "../styles/Hero.css";
import "../styles/Hero.scss";
import React from "react";
import { useLang } from "../scripts/LangContext.js";

import { Link as ScrollLink, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Hero() {
  // const { getLangText } = useLang();

  const { getLangText, currentLang } = useLang();
  const navigate = useNavigate();

  const handleMenuItemClick = (to) => {
    const newUrl = `/${currentLang}`;
  
    navigate(newUrl);
  
    setTimeout(() => {
      scroller.scrollTo(to, {
        spy: true,
        smooth: true,
        offset: -200,
        duration: 200,
      });
    }, 0);
  };

  return (
    <section id="hero" className="hero section__mb">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="lng-hero-title">{getLangText("hero-title")}</h1>
            <p className="lng-hero-description">
              {getLangText("hero-description")}
            </p>

            <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                className="btn lng-hero-link"
                onClick={() => { handleMenuItemClick('contact');}}
              >
                  {getLangText("hero-link")}
                  </ScrollLink>

            {/* <a href="#" className="btn lng-hero-link">
              {getLangText("hero-link")}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
