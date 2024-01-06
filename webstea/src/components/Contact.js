import "../styles/Contact.scss";
import { useLang } from "../scripts/LangContext.js";
import React, { useState } from 'react';

import axios from 'axios';



function Contact() {
  const { getLangText } = useLang();

  const [formState, setFormState] = useState({
    name: '',
    tel: '',
    email: '',
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/send-email', formState);
      console.log('Server response:', response.data);
    
    setFormState({
      name: '',
      tel: '',
      email: '',
      type: '',
      message: '',
    });

} catch (error) {
  console.error('Error sending data:', error);
}
};

  return (
    <section id="contact" className="contact section__mb">
      <div className="container">
        <h2 className="lng-contact-title">{getLangText("contact-title")}</h2>
        <div className="contact__inner">
          <form className="form" id="form" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="input__inner">
                <input
                  id="name"
                  className="form__input lng-contact-name _req"
                  type="text"
                  placeholder={getLangText("contact-name")}
                  required
                  value={formState.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="input__inner">
                <input
                  id="tel"
                  className="form__input lng-contact-tel _req"
                  type="tel"
                  placeholder={getLangText("contact-tel")}
                  required
                  value={formState.tel}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="form__row">
              <div className="input__inner">
                <input
                  id="email"
                  className="form__input lng-contact-mail _req _email"
                  type="email"
                  placeholder={getLangText("contact-mail")}
                  required
                  value={formState.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="select__inner">
                <select
                  placeholder="Тип сайту"
                  id="type"
                  className="form__select lng-contact-select"
                  required
                  value={formState.type}
                  onChange={handleChange}

                >
                  <option defaultValue className="lng-contact-select">{getLangText("contact-select")}</option>
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
              className="form__textarea lng-contact-details _req"
              placeholder={getLangText("contact-details")}
              value={formState.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn lng-contact-btn">
            {getLangText("contact-btn")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
