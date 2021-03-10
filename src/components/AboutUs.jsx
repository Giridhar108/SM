import kushetka from "../assets/images/kushetka.png";

function AboutUs() {
  return (
    <div className="aboutus" id='aboutus'>
      <div className="container">
        <div className="aboutus__wrapper">
          <div className="aboutus__img-wrapper">
          <img src={kushetka} alt="" width="600" height="400" className="aboutus__img" />
          </div>
          <div className="aboutus__description">
            <h3 className="aboutus__title">О нас:</h3>
            <p className="aboutus__subtitle">
              Мы влюбленны в мебель. Делаем все, что бы создать иммено то, что
              нужно вам, нашему клиенту.
            </p>
            <p className="aboutus__text">
              Более 25 лет работаем с мебелью, знаем все нюансы изготовления и
              перетяжки мебели. Занимались реставрацией мебели стоимостью более
              100 000 $. Работаем с клиентами по всей России и СНГ. Знаем где
              заказываеть лучшие материалы, налажены контакты с поставщиками из
              Италии, Китая, Германии и т.д.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
