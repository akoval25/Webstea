import "../styles/Footer.scss";
import logo from "../images/logo.svg";
import Telegram from "../images/Telegram.svg";
import Linkedin from "../images/Linkedin.svg";
import Instagram from "../images/Instagram.svg";
import Facebook from "../images/Facebook.svg";
import Behance from "../images/Behance.svg";
import { useLang } from "../scripts/LangContext.js";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Footer() {
  const { getLangText } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="#" className="logo__link">
            <img src={logo}></img>
          </a>
          <ul className="footer__list">
            <li className="footer__item">
            <ScrollLink
                    to="about" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200}
                    className="footer__link lng-footer-about">
              {getLangText("footer-about")}
            </ScrollLink>
            </li>
            <li className="footer__item">
            <ScrollLink
                    to="services" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200} className="footer__link lng-footer-services">
              {getLangText("footer-services")}
            </ScrollLink>
            </li>
            <li className="footer__item">
            <ScrollLink
                    to="portfolio" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200}
                    className="footer__link lng-footer-portfolio">
              {getLangText("footer-portfolio")}
            </ScrollLink>
            </li>
            <li className="footer__item">
            <ScrollLink
                    to="blog" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200}
                    className="footer__link lng-footer-blog">
              {getLangText("footer-blog")}
              </ScrollLink>
            </li>
            <li className="footer__item">
            <ScrollLink
                    to="faq" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200} className="footer__link lng-footer-faq">
              {getLangText("footer-faq")}
            </ScrollLink>
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
