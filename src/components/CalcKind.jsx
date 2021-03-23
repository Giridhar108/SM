import React from "react";
import FurnitureItems from "./FurnitureItems";
import bed from "../assets/images/bed.png";
import sofa from "../assets/images/sofa.png";
import panel from "../assets/images/panel.png";
import armchair from "../assets/images/armchair.png";
import cheir from "../assets/images/cheir.png";
import commode from "../assets/images/commode.png";
import curbstone from "../assets/images/curbstone.png";
import glass from "../assets/images/glass.png";
import pouf from "../assets/images/pouf.png";

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
    png: CalcSofa,
  },
  {
    title: "Диван",
    img: sofa,
    png: CalcBed,
  },
  {
    title: "Панель",
    img: panel,
    png: CalcDoublebed,
  },
  {
    title: "Кресло",
    img: armchair,
    png: CalcArmchair,
  },
  {
    title: "Стул",
    img: cheir,
    png: CalcChair,
  },
  {
    title: "Комод",
    img: commode,
    png: CalcChest,
  },
  {
    title: "Тумба",
    img: curbstone,
    png: CalcNightstand,
  },
  {
    title: "Зеркало",
    img: glass,
    png: CalcMirror,
  },
  {
    title: "Пуф",
    img: pouf,
    png: CalcPouf,
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
          <div className="calckind__png">
            {furnitureItems.map((item) => {
              if (item.title === kind) {
                return (
                  <Zoom key={item.title}>
                    <img
                      src={item.png}
                      alt=""
                      className="calckind__png-img"
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
