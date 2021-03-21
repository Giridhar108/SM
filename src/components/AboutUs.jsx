import React from "react";
import kushetka from "../assets/images/kushetka.png";
import aboutUsHorizont from "../assets/images/aboutUsHorizont.png";


function AboutUs() {

  const [state, setstate] = React.useState(false)

  React.useEffect(() => {
    const handleImg = () => {
      if (window.innerWidth <= 800) {
        setstate(true)
      }
      if (window.innerWidth > 800) {
        setstate(false)
      }
    }
    handleImg()
    window.addEventListener("resize", handleImg, { passive: false });
    return () => window.removeEventListener("resize", handleImg);

  }, [state])

  return (
    <div className="aboutus" id="aboutus">
      <div className="container">
        <div className="aboutus__wrapper">
          <div className="aboutus__img-wrapper">
            <img
              src={state ? aboutUsHorizont : kushetka}
              alt=""
              width="600"
              height="400"
              className="aboutus__img"
            />
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
