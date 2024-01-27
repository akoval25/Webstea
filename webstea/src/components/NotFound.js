import "../styles/NotFound.scss";

function NotFound() {
  return (
    <section className="notfound section__mb section__first">
      <div className="notfound__inner">
        <div className="container">
          <h2 className="text-404"> 404</h2>
          <div className="notfound__bottom">
            <p>Упс! Сторінка не знайдена.</p>
            <a className="btn">Назад</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
