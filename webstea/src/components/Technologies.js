import "../styles/Technologies.scss";
import icon1 from "../images/icon_react.png";
import icon2 from "../images/icon_nodejs.png";
import icon3 from "../images/icon_html.png";
import icon4 from "../images/icon_css.png";
import icon5 from "../images/icon_javascript.png";
import icon6 from "../images/icon_python.png";
import icon7 from "../images/icon_php.png";
import icon8 from "../images/icon_wordpress.png";
import icon9 from "../images/icon_magento.png";
import icon10 from "../images/icon_moodle.png";
import icon11 from "../images/icon_joomla.png";
import icon12 from "../images/icon_drupal.png";
import icon13 from "../images/icon_photoshop.png";
import icon14 from "../images/icon_figma.png";
import icon15 from "../images/icon_github.png";

function Technologies() {
  return (
    <section className="technologies section__mb">
      <div className="container">
        <h2 className="text-right">Технології, з якими ми працюємо</h2>
        <div className="technologies__inner">
          <div className="technologies__group --code">
            <img alt="icon" src={icon1}></img>
            <img alt="icon" src={icon2}></img>
            <img alt="icon" src={icon3}></img>
            <img alt="icon" src={icon4}></img>
            <img alt="icon" src={icon5}></img>
            <img alt="icon" src={icon6}></img>
            <img alt="icon" src={icon7}></img>
          </div>
          <div className="technologies__group --cms">
            <img alt="icon" src={icon8}></img>
            <img alt="icon" src={icon9}></img>
            <img alt="icon" src={icon10}></img>
            <img alt="icon" src={icon11}></img>
            <img alt="icon" src={icon12}></img>
          </div>
          <div className="technologies__group --other">
            <img alt="icon" src={icon13}></img>
            <img alt="icon" src={icon14}></img>
            <img alt="icon" src={icon15}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
