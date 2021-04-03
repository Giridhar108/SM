import React from "react";
import classNames from "classnames";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { setCloth, setColor } from "../redux/action/calculator";

import AlbaProject from "../assets/images/cloth/ALBA-PROJECT.jpg";
import ArtVision from "../assets/images/cloth/ART-VISION.jpg";
import CaspiaSmocky from "../assets/images/cloth/CaspiaSmocky.jpg";
import GlenBlue from "../assets/images/cloth/glen-blue.jpg";
import LoftMarrone from "../assets/images/cloth/loft-marrone.jpg";
import LorinAspen from "../assets/images/cloth/lorin-aspen.jpg";
import Monolith from "../assets/images/cloth/monolith.jpg";
import RefreshRomb from "../assets/images/cloth/refresh-romb.jpg";
import RichardArctic from "../assets/images/cloth/RichardArctic.jpg";
import VenusPremium from "../assets/images/cloth/VenusPremium.jpg";


function CalcCloth() {
  const clothItem = [
    { name: "AlbaProject", img: AlbaProject },
    { name: "ArtVision", img: ArtVision },
    { name: "CaspiaSmocky", img: CaspiaSmocky },
    { name: "GlenBlue", img: GlenBlue },
    { name: "LoftMarrone", img: LoftMarrone },
    { name: "LorinAspen", img: LorinAspen },
    { name: "Monolith", img: Monolith },
    { name: "RefreshRomb", img: RefreshRomb },
    { name: "RichardArctic", img: RichardArctic },
    { name: "VenusPremium", img: VenusPremium },
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
        <h3 className="calccloth__title">Выберите ткань:</h3>
        <div className="calccloth__wrapper">

          <div className="calccloth__image">
            {clothItem.map((item) => {
              if (item.name === cloth) {
                return (
                  <Fade key={item.name} >
                    <img
                      src={item.img}
                      alt=""
                      className="calccloth__image-img"
                    />
                  </Fade>
                );
              }
            })}
            {/* <img src={calcClothImg} alt="" className="calccloth__image-img" /> */}

            {/* <div className="calccloth__image-color-items">
              {clothColor.map((item) => {
                if (cloth) {
                  const handleSetColor = () => {
                    if (item.color === color) {
                      return changeColor(null);
                    }
                    return changeColor(item.color);
                  };
                  return (
                    <Fade key={item.color} left>
                      <div
                        onClick={handleSetColor}
                        className={
                          ("calccloth__image-color",
                          classNames({
                            "calccloth__image-color--active":
                              item.color === color,
                            "calccloth__image-color": true,
                          }))
                        }
                        style={{ background: `${item.color}` }}
                      ></div>
                    </Fade>
                  );
                }
              })}
              <Fade left>
                <h3 style={{ display: cloth ? "inherit" : "none" }}>
                  Выберите цвет
                </h3>
              </Fade>
            </div> */}
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
