import logo from "../images/logo.svg";
import "../styles/Header.css";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="header__top">
            <a href="#" className="logo__link">
              <img src={logo}></img>
            </a>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Про нас
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Контакти
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Послуги
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Портфоліо
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Блог
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
            <div className="lang">
              <ul className="lang__list">
                <li className="lang__item">
                  <a href="#" className="lang__link">
                    EN
                  </a>
                </li>
                <li className="lang__item">
                  <a href="#" className="lang__link current">
                    UA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
