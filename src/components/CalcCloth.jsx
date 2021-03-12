import React from "react";
import classNames from "classnames";
import calcClothImg from "../assets/images/calcClothImg.jpg";

import { useDispatch, useSelector } from "react-redux";
import { setCloth, setColor } from "../redux/action/calculator";

function CalcCloth() {
  const clothItem = [
    { name: "Cabrio" },
    { name: "Mouse" },
    { name: "Korfu" },
    { name: "Viva" },
    { name: "Matting sacking" },
    { name: "Silver ostrich" },
    { name: "Stitch" },
    { name: "Scale" },
    { name: "Arcadia" },
    { name: "Glance" },
    { name: "Blue-gray wave" },
    { name: "Cracks milk" },
  ];

  const clothColor = [
    { color: "#4D5FBC" },
    { color: "#C75A4C" },
    { color: "#4B822A" },
    { color: "#4D8FBC" },
  ];
  const dispatch = useDispatch();
  const style = useSelector(({ calculator }) => calculator.style);
  const cloth = useSelector(({ calculator }) => calculator.cloth);
  const color = useSelector(({ calculator }) => calculator.color);

  const changeCloth = (name) => {
    dispatch(setCloth(name));
  };

  const changeColor = (name) => {
    dispatch(setColor(name));
  };

  return (
    <div
      className="calccloth"
      // className={classNames("calccloth", {
      //   displaynone: !style,
      // })}
    >
      <div className="container">
        <h3 className="calccloth__title">Выберите ткань и цвет:</h3>
        <div className="calccloth__wrapper">
          <div className="calccloth__image">
            <img src={calcClothImg} alt="" className="calccloth__image-img" />
            <div className="calccloth__image-color-items">
              {clothColor.map((item) => {
                const handleSetColor = () => {
                  if (item.color === color) {
                    return changeColor(null);
                  }
                  return changeColor(item.color);
                };
                return (
                  <div
                    key={item.color}
                    onClick={handleSetColor}
                    className={
                      ("calccloth__image-color",
                      classNames({
                        "calccloth__image-color--active": item.color === color,
                        "calccloth__image-color": true,
                      }))
                    }
                    style={{ background: `${item.color}` }}
                  ></div>
                );
              })}
              <h3>Выберите цвет</h3>
            </div>
          </div>
          <div className="calccloth__items">
            {clothItem.map((item) => {
              const handleChangeCloth = () => {
                changeCloth(item.name);
              };
              return (
                <div
                  key={item.name}
                  className={
                    item.name === cloth ? "boxshadow-small" : "calccloth__item"
                  }
                  onClick={handleChangeCloth}
                >
                  <div className="calccloth__item-text">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcCloth;
