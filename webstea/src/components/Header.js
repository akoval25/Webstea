import logo from "../images/logo.svg";
import "../styles/Header.css";
import "../styles/Header.scss";
import { useRef } from "react";
import LanguageSelector from  "../scripts/currentLang.js";


function Header() {
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

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
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Про нас
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Контакти
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Послуги
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Портфоліо
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Блог
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    FAQ
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


