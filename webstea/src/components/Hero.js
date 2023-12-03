import "../styles/Hero.css";
import "../styles/Hero.scss";
import React from "react";
import { useLang } from "../scripts/LangContext.js";

function Hero() {
  const { getLangText } = useLang();

  return (
    <section className="hero section__mb">
      <div className="container">
        <div className="hero__inner">
          <h1 className="lng-hero-title">{getLangText("hero-title")}</h1>
          <p className="lng-hero-description">
            {getLangText("hero-description")}
          </p>
          <a href="#" className="btn lng-hero-link">
            {getLangText("hero-link")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
