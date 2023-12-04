import "../styles/Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact section__mb">
      <div className="container">
        <h2>Давайте обговоримо вашу ідею!</h2>
        <div className="contact__inner">
          <form className="form">
            <div className="form__row">
              <div className="input__inner">
                <input
                  id="name"
                  className="form__input"
                  type="text"
                  placeholder="Ім’я"
                  require
                ></input>
              </div>
              <div className="input__inner">
                <input
                  id="tel"
                  className="form__input"
                  type="tel"
                  placeholder="Телефон"
                  require
                ></input>
              </div>
            </div>
            <div className="form__row">
              <div className="input__inner">
                <input
                  id="email"
                  className="form__input"
                  type="email"
                  placeholder="E-mail"
                  require
                ></input>
              </div>
              <div className="select__inner">
                <select
                  placeholder="Тип сайту"
                  id="type"
                  className="form__select"
                  require
                >
                  <option selected>Тип сайту</option>
                  <option value="landing">Landing page</option>
                  <option value="card">Сайт візитка</option>
                  <option value="eshop">Інтернет магазин</option>
                  <option value="corporate">Корпоративний сайт</option>
                  <option value="catalog">Сайт каталог</option>
                  <option value="individual">Індивідуальний проект</option>
                </select>
              </div>
            </div>

            <textarea
              id="message"
              className="form__textarea"
              placeholder="Подробиці проєкту"
            ></textarea>
            <submit type="submit" className="btn">
              Відправити
            </submit>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
