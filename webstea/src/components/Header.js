import logo from "../images/logo.svg";
import "../styles/Header.css";
import "../styles/Header.scss";
import { useRef } from "react";
import LanguageSelector from "../scripts/currentLang.js";
import { useLang } from "../scripts/LangContext.js";



function Header() {
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);
  const { getLangText } = useLang();

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
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="header__top">
            <a href="#" className="logo__link">
              <img src={logo}></img>
            </a>
            <nav className="menu" ref={menuRef}>
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#about" className="menu__link lng-about" onClick={closeMenu}>
                  {getLangText("about")}
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#contact" className="menu__link lng-contact" onClick={closeMenu}>
                  {getLangText("contact")}
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    href="#services"
                    className="menu__link lng-services"
                    onClick={closeMenu}
                  >
                    {getLangText("services")}
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    href="#portfolio"
                    className="menu__link lng-portfolio"
                    onClick={closeMenu}
                  >
                    {getLangText("portfolio")}
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#blog" className="menu__link lng-blog" onClick={closeMenu}>
                  {getLangText("blog")}
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#faq" className="menu__link lng-faq" onClick={closeMenu}>
                  {getLangText("faq")}
                  </a>
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
