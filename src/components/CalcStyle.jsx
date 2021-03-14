import React from "react";
import classNames from "classnames";
import barroko from "../assets/images/barroko.png";
import gothica from "../assets/images/gothica.png";
import minimals from "../assets/images/minimals.png";
import country from "../assets/images/country.png";
import popArt from "../assets/images/popArt.png";
import etnika from "../assets/images/etnika.png";

import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../redux/action/calculator";
import Fade from "react-reveal/Fade";

function CalcStyle() {
  const styleItem = [
    {
      name: "Барокко",
      img: barroko,
      description:
        'В переводе с итальянского "причудливый". Мебель воспринимается как предмет искусства, украшает интерьер. Учитывая особенности и "размах" данного стиля, он не подойдет для маленьких помещений.',
    },
    {
      name: "Готика",
      img: gothica,
      description:
        'В переводе с итальянского "причудливый". Мебель воспринимается как предмет искусства, украшает интерьер. Учитывая особенности и "размах" данного стиля, он не подойдет для маленьких помещений.',
    },
    {
      name: "Минимализм",
      img: minimals,
      description:
        'В переводе с итальянского "причудливый". Мебель воспринимается как предмет искусства, украшает интерьер. Учитывая особенности и "размах" данного стиля, он не подойдет для маленьких помещений.',
    },
    {
      name: "Этника",
      img: etnika,
      description:
        'В переводе с итальянского "причудливый". Мебель воспринимается как предмет искусства, украшает интерьер. Учитывая особенности и "размах" данного стиля, он не подойдет для маленьких помещений.',
    },
    {
      name: "Поп-арт",
      img: popArt,
      description:
        'В переводе с итальянского "причудливый". Мебель воспринимается как предмет искусства, украшает интерьер. Учитывая особенности и "размах" данного стиля, он не подойдет для маленьких помещений.',
    },
    {
      name: "Кантри",
      img: country,
      description:
        'В переводе с итальянского "причудливый". Мебель воспринимается как предмет искусства, украшает интерьер. Учитывая особенности и "размах" данного стиля, он не подойдет для маленьких помещений.',
    },
  ];

  const dispatch = useDispatch();
  const style = useSelector(({ calculator }) => calculator.style);
  const kind = useSelector(({ calculator }) => calculator.kind);

  const changeStyle = (name) => {
    dispatch(setStyle(name));
  };

  return (
    <div
      className="calcstyle"
      // className={classNames("calcstyle", {
      //   displaynone: !kind,
      // })}
    >
      <div className="container">
        <h3 className="calcstyle__title">Выберите стиль:</h3>
        <div className="calcstyle__wrapper">
          <div className="calcstyle__items">
            {styleItem.map((item) => {
              const handleChangeStyle = () => {
                changeStyle(item.name);
              };
              return (
                <div
                  key={item.name}
                  className={
                    item.name === style ? "boxshadow-small" : "calcstyle__item"
                  }
                  onClick={handleChangeStyle}
                >
                  <div className="calcstyle__item-text">{item.name}</div>
                </div>
              );
            })}
          </div>

          <div className="calcstyle__description">
            {styleItem.map((item) => {
              if (item.name === style) {
                return (
                  <Fade key={item.name} right>
                    <img
                      src={item.img}
                      alt=""
                      className="calcstyle__description-img"
                    />
                  </Fade>
                );
              }
            })}
            <div className="calcstyle__description-content">
              {styleItem.map((item) => {
                if (item.name === style) {
                  return (
                    <Fade key={item.name} right>
                      <div className="calcstyle__description-text">
                        {item.description}
                      </div>
                    </Fade>
                  );
                }
              })}

              {/* <a href="" className="calcstyle__description-btn">
                Подробнее
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcStyle;
