import "../styles/Footer.scss";
import logo from "../images/logo.svg";
import Telegram from "../images/Telegram.svg";
import Linkedin from "../images/Linkedin.svg";
import Instagram from "../images/Instagram.svg";
import Facebook from "../images/Facebook.svg";
import Behance from "../images/Behance.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="#" className="logo__link">
            <img src={logo}></img>
          </a>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#about" className="footer__link">
                Про нас
              </a>
            </li>
            <li className="footer__item">
              <a href="#services" className="footer__link">
                Послуги
              </a>
            </li>
            <li className="footer__item">
              <a href="#portfolio" className="footer__link">
                Портфоліо
              </a>
            </li>
            <li className="footer__item">
              <a href="#blog" className="footer__link">
                Блог
              </a>
            </li>
            <li className="footer__item">
              <a href="#faq" className="footer__link">
                FAQ
              </a>
            </li>
          </ul>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <p>E-mail:</p>
              <a href="#">webstea@webstea.com</a>
            </div>
            {/* <div className="footer__contact-item">
              <p>Телефон:</p>
              <a href="#">+3809333333333</a>
            </div> */}
            <div className="footer__contact-social">
              <a href="#">
                <img src={Telegram} alt="Telegram"></img>
              </a>
              <a href="#">
                <img src={Linkedin} alt="Linkedin"></img>
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram"></img>
              </a>
              <a href="#">
                <img src={Facebook} alt="Facebook"></img>
              </a>
              {/* <a href="#">
                <img src={Behance} alt="Behance"></img>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
