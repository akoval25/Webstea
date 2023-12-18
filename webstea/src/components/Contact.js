import "../styles/Contact.scss";
import { useLang } from "../scripts/LangContext.js";

function Contact() {
  const { getLangText } = useLang();
  return (
    <section id="contact" className="contact section__mb">
      <div className="container">
        <h2 className="lng-contact-title">{getLangText("contact-title")}</h2>
        <div className="contact__inner">
          <form className="form">
            <div className="form__row">
              <div className="input__inner">
                <input
                  id="name"
                  className="form__input lng-contact-name"
                  type="text"
                  placeholder={getLangText("contact-name")}
                  require
                ></input>
              </div>
              <div className="input__inner">
                <input
                  id="tel"
                  className="form__input lng-contact-tel"
                  type="tel"
                  placeholder={getLangText("contact-tel")}
                  require
                ></input>
              </div>
            </div>
            <div className="form__row">
              <div className="input__inner">
                <input
                  id="email"
                  className="form__input lng-contact-mail"
                  type="email"
                  placeholder={getLangText("contact-mail")}
                  require
                ></input>
              </div>
              <div className="select__inner">
                <select
                  placeholder="Тип сайту"
                  id="type"
                  className="form__select lng-contact-select"
                  require
                >
                  <option selected className="lng-contact-select">{getLangText("contact-select")}</option>
                  <option value="landing" className="lng-contact-landing">{getLangText("contact-landing")}</option>
                  <option value="card" className="lng-contact-card">{getLangText("contact-card")}</option>
                  <option value="eshop" className="lng-contact-shop">{getLangText("contact-shop")}</option>
                  <option value="corporate" className="lng-contact-site">{getLangText("contact-site")}</option>
                  <option value="catalog" className="lng-contact-catalog">{getLangText("contact-catalog")}</option>
                  <option value="individual" className="lng-contact-project">{getLangText("contact-project")}</option>
                </select>
              </div>
            </div>

            <textarea
              id="message"
              className="form__textarea lng-contact-details"
              placeholder={getLangText("contact-details")}
            ></textarea>
            <submit type="submit" className="btn lng-contact-btn">
            {getLangText("contact-btn")}
            </submit>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
