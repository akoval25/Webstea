import logo from "../images/logo.svg";
import "../styles/Header.css";
import "../styles/Header.scss";
import { useRef } from "react";
import LanguageSelector from "../scripts/currentLang.js";
import { useLang } from "../scripts/LangContext.js";
// import { Link as ScrollLink, animateScroll, scroller as scroll } from "react-scroll";
// import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';



// function Header() {
//   const menuBtnRef = useRef(null);
//   const menuRef = useRef(null);
//   const { getLangText } = useLang();


//   const toggleMenu = () => {
//     menuBtnRef.current.classList.toggle("menu__btn--active");
//     menuRef.current.classList.toggle("menu--active");
//   };

//   const closeMenu = () => {
//     if (menuRef.current.classList.contains("menu--active")) {
//       menuBtnRef.current.classList.remove("menu__btn--active");
//       menuRef.current.classList.remove("menu--active");
//     }
//   };



function Header() {
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);
  const { getLangText, currentLang } = useLang();
  const navigate = useNavigate();

  const toggleMenu = () => {
    menuBtnRef.current.classList.toggle("menu__btn--active");
    menuRef.current.classList.toggle("menu--active");
  };

  const closeMenu = () => {
    if (menuRef.current.classList.contains("menu--active")) {
      menuBtnRef.current.classList.remove("menu__btn--active");
      menuRef.current.classList.remove("menu--active");
    }
  };

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
    <div className="App">
      <header className="App-header header">
        <div className="container">
          <div className="header__top">

          <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                className="logo__link"
                onClick={() => { handleMenuItemClick('hero');}}
              >
                    <img src={logo}></img>
                  </ScrollLink>
            {/* <Link 
            to={`/${currentLang}`}
            className="logo__link"
            >
              <img src={logo}></img>
            </Link> */}
            {/* <a href= "/${currentLang}" className="logo__link">
              <img src={logo}></img>
            </a> */}
            <nav className="menu" ref={menuRef}>
              <ul className="menu__list">
                <li className="menu__item">
                <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                className="menu__link lng-about"
                onClick={() => { handleMenuItemClick('about'); closeMenu(); }}
              >
                    {getLangText("about")}
                  </ScrollLink>
                
                  {/* <ScrollLink
                  to="about"
                    // to="about"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={200}
                    className="menu__link lng-about"
                    onClick={closeMenu}
                  >
                    {getLangText("about")}
                  </ScrollLink> */}

                </li>
                <li className="menu__item">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={200}
                    className="menu__link lng-contact"
                    // onClick={closeMenu}
                    onClick={() => { handleMenuItemClick('contact'); closeMenu(); }}
                  >
                    {getLangText("contact")}
                  </ScrollLink>
                  {/* <a href="#contact" className="menu__link lng-contact" onClick={closeMenu}>
                  {getLangText("contact")}
                  </a> */}
                </li>
                <li className="menu__item">
                  {/* <a
                    href="#services"
                    className="menu__link lng-services"
                    onClick={closeMenu}
                  >
                    {getLangText("services")}
                  </a> */}
                  <ScrollLink
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={200}
                    className="menu__link lng-services"
                    // onClick={closeMenu}
                    onClick={() => { handleMenuItemClick('services'); closeMenu(); }}
                  >
                    {getLangText("services")}
                  </ScrollLink>
                </li>
                <li className="menu__item">
                  <ScrollLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={200}
                    className="menu__link lng-portfolio"
                    // onClick={closeMenu}
                    onClick={() => { handleMenuItemClick('portfolio'); closeMenu(); }}
                  >
                    {getLangText("portfolio")}
                  </ScrollLink>
                  {/* <a
                    href="#portfolio"
                    className="menu__link lng-portfolio"
                    onClick={closeMenu}
                  >
                    {getLangText("portfolio")}
                  </a> */}
                </li>
                <li className="menu__item">
                  <ScrollLink
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={200}
                    className="menu__link lng-blog"
                    // onClick={closeMenu}
                    onClick={() => { handleMenuItemClick('blog'); closeMenu(); }}
                  >
                    {getLangText("blog")}
                  </ScrollLink>
                  {/* <a href="#blog" className="menu__link lng-blog" onClick={closeMenu}>
                  {getLangText("blog")}
                  </a> */}
                </li>
                <li className="menu__item">
                  <ScrollLink
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={200}
                    className="menu__link lng-faq"
                    // onClick={closeMenu}
                    onClick={() => { handleMenuItemClick('faq'); closeMenu(); }}
                  >
                    {getLangText("faq")}
                  </ScrollLink>
                  {/* <a href="#faq" className="menu__link lng-faq" onClick={closeMenu}>
                  {getLangText("faq")}
                  </a> */}
                </li>
              </ul>
            </nav>
            <LanguageSelector />
            <div className="menu__btn-wrapper">
              <button
                className="menu__btn"
                ref={menuBtnRef}
                onClick={toggleMenu}
              >
                <span className="burger"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;