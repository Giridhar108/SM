import React from "react";
import FurnitureItems from "./FurnitureItems";
import bed from "../assets/images/bed.webp";
import sofa from "../assets/images/sofa.webp";
import panel from "../assets/images/panel.webp";
import armchair from "../assets/images/armchair.webp";
import cheir from "../assets/images/cheir.webp";
import commode from "../assets/images/commode.webp";
import curbstone from "../assets/images/curbstone.webp";
import glass from "../assets/images/glass.webp";
import pouf from "../assets/images/pouf.webp";

import CalcSofa from "../assets/images/kind/CalcKindSofa.png";
import CalcArmchair from "../assets/images/kind/armchair.png";
import CalcBed from "../assets/images/kind/bed.png";
import CalcChair from "../assets/images/kind/chair.png";
import CalcChest from "../assets/images/kind/chest.png";
import CalcDoublebed from "../assets/images/kind/double-bed.png";
import CalcMirror from "../assets/images/kind/mirror.png";
import CalcNightstand from "../assets/images/kind/nightstand.png";
import CalcPouf from "../assets/images/kind/pouf.png";

import { useDispatch, useSelector } from "react-redux";
import { setKind } from "../redux/action/calculator";
import Zoom from "react-reveal/Zoom";

const furnitureItems = [
  {
    title: "Кровать",
    img: bed,
    webp: CalcSofa,
  },
  {
    title: "Диван",
    img: sofa,
    webp: CalcBed,
  },
  {
    title: "Панель",
    img: panel,
    webp: CalcDoublebed,
  },
  {
    title: "Кресло",
    img: armchair,
    webp: CalcArmchair,
  },
  {
    title: "Стул",
    img: cheir,
    webp: CalcChair,
  },
  {
    title: "Комод",
    img: commode,
    webp: CalcChest,
  },
  {
    title: "Тумба",
    img: curbstone,
    webp: CalcNightstand,
  },
  {
    title: "Зеркало",
    img: glass,
    webp: CalcMirror,
  },
  {
    title: "Пуф",
    img: pouf,
    webp: CalcPouf,
  },
];

function CalcKind() {
  const dispatch = useDispatch();
  const kind = useSelector(({ calculator }) => calculator.kind);

  const changeKind = (kind) => {
    dispatch(setKind(kind));
  };

  return (
    <div className="calckind">
      <div className="container">

        <h3 className="calckind__title">Выберите вид мебели:</h3>
        <div className="calckind__wrapper">
          <div className="calckind__webp">
            {furnitureItems.map((item) => {
              if (item.title === kind) {
                return (
                  <Zoom key={item.title}>
                    <img
                      src={item.webp}
                      alt=""
                      className="calckind__webp-img"
                    />
                  </Zoom>
                );
              }
            })}
          </div>

          <div className="calckind__items">
            {furnitureItems.map((item) => {
              const onChangeKind = () => {
                return changeKind(item.title);
              };

              return (
                <div
                  key={item.title}
                  className={
                    kind === item.title ? "boxshadow" : "furniture__item"
                  }
                  onClick={onChangeKind}
                >
                  <div className="furniture__item-wrapper">
                    <div className="furniture__item-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="furniture__item-title">{item.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcKind;
