import one from "../assets/svg/1c.svg";
import two from "../assets/svg/2c.svg";
import three from "../assets/svg/3c.svg";
import four from "../assets/svg/4c.svg";
import five from "../assets/svg/5c.svg";
import six from "../assets/svg/6c.svg";
import HowWorkItem from "./HowWorkItem";
import { Route } from "react-router-dom";

function HowWork() {
  const howWorkDescription = [
    {
      title: "Принимаем заказ",
      text:
        "На этом этапе утверждаем дизайн учитывая все ваши пожелания и основываясь на нашем опыте  предлагаем лучшие решения.",
      svg: one,
    },
    {
      title: "Согласовываем дизайн",
      text:
        "Вы можете оставить заявку у нас на сайте, прислав нам фотографии или собрать заказ с помощью нашего калькулятора",
      svg: two,
    },
    {
      title: "Изготовление мебели",
      text:
        "Здесь происходит распиловка каркаса, его сборка. ОТК. Задаётся форма паралоном. Раскройка изделия, пошив, обивка. ",
      svg: three,
    },
    {
      title: "Приём изделия технологом",
      text:
        "Контроль соответсвия изделия установленным требованиям качества в нашей компании. Высылаем фото вам. ",
      svg: four,
    },
    {
      title: "Упаковка и доставка",
      text:
        "Упаковываем изделие в жесткий каркас, обеспечиваем сохранную транспортировку до места назначения.",
      svg: five,
    },
  ];

  const howWorkDescriptionRecreate = [
    {
      title: "Принимаем заказ",
      text:
        "Вы присылаете нам фото и размеры. Выбираем ткань.",
      svg: one,
    },
    {
      title: "Считаем примерную стоимость",
      text:
        "Что бы сказать точную стоимость нужно увидеть внутренности изделия.На этом этапе проиходит предоплата.",
      svg: two,
    },
    {
      title: "Доставка в цех",
      text:
        "Разбираем мебель, смотрим, что внутри. Выставляем окончательную стоимость.",
      svg: three,
    },
    {
      title: "Работы по восстановлению",
      text:
        "Отлекаливание, раскрой, пошив, обивка.",
      svg: four,
    },
    {
      title: "Приёмка ОТК",
      text:
        "Отправляем вам фото. Окончательный рачет.",
      svg: five,
    },
    {
      title: "Упаковка и доставка",
      text:
        "Упаковываем изделие в жесткий каркас, обеспечиваем сохранную транспортировку до места назначения.",
      svg: six,
    },
  ];

  return (
    <div className="howwork" id="howwork">
      <div className="container">
        <div className="howwork__wrapper">
          <h3 className="howwork__title">Как мы работаем:</h3>
          <div className="howwork__items">
            <Route path="/" exact>
              {howWorkDescription.map((item, index) => (
                <HowWorkItem key={index} {...item} />
              ))}
            </Route>
            <Route path="/recreate" exact>
              {howWorkDescriptionRecreate.map((item, index) => (
                <HowWorkItem key={index} {...item} />
              ))}
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
