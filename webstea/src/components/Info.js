import "../styles/Info.scss";

function Info() {
  return (
    <section className="info section__mb">
      <div className="container">
        <div className="info__inner">
          <div className="info__text">
            <h3>
              <span className="orange">Хороший сайт</span> неможливо зробити за
              два дні.
            </h3>
            <h3>
              Розробка по-справжньому робочого сайту триває{" "}
              <span className="orange">від 1 місяця</span>, зате на виході ви
              отримаєте продукт, який{" "}
              <span className="orange">принесе прибуток</span>.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
