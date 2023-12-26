import "../styles/Footer.scss";
import logo from "../images/logo.svg";
import Telegram from "../images/Telegram.svg";
import Linkedin from "../images/Linkedin.svg";
import Instagram from "../images/Instagram.svg";
import Facebook from "../images/Facebook.svg";
import Behance from "../images/Behance.svg";
import { useLang } from "../scripts/LangContext.js";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { Link as ScrollLink, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Footer() {
  // const { getLangText } = useLang();

  const { getLangText, currentLang } = useLang();
  const navigate = useNavigate();

  const handleMenuItemClick = (to) => {
    const newUrl = `/${currentLang}`;
    console.log('New URL:', newUrl);
  
    navigate(newUrl);
  
    setTimeout(() => {
      console.log('Scrolling to:', to);
      scroller.scrollTo(to, {
        spy: true,
        smooth: true,
        offset: -200,
        duration: 200,
      });
    }, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
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
          {/* <a href="#" className="logo__link">
            <img src={logo}></img>
          </a> */}
          <ul className="footer__list">
            <li className="footer__item">
            <ScrollLink
                    to="about" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200}
                    className="footer__link lng-footer-about"
                    onClick={() => { handleMenuItemClick('about'); }}>
              {getLangText("footer-about")}
            </ScrollLink>
            </li>
            <li className="footer__item">
            <ScrollLink
                    to="services" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200} className="footer__link lng-footer-services"
                    onClick={() => { handleMenuItemClick('services'); }}>
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
                    className="footer__link lng-footer-portfolio"
                    onClick={() => { handleMenuItemClick('portfolio'); }}>
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
                    className="footer__link lng-footer-blog"
                    onClick={() => { handleMenuItemClick('blog'); }}>
              {getLangText("footer-blog")}
              </ScrollLink>
            </li>
            <li className="footer__item">
            <ScrollLink
                    to="faq" 
                    spy={true}
                    smooth={true}
                    offset={-50} 
                    duration={200} className="footer__link lng-footer-faq"
                    onClick={() => { handleMenuItemClick('faq'); }}>
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
