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

import CalcSofa from "../assets/images/kind/calckindsofa.webp";
import CalcArmchair from "../assets/images/kind/armchair.webp";
import CalcBed from "../assets/images/kind/bed.webp";
import CalcChair from "../assets/images/kind/chair.webp";
import CalcChest from "../assets/images/kind/chest.webp";
import CalcDoublebed from "../assets/images/kind/double-bed.webp";
import CalcMirror from "../assets/images/kind/mirror.webp";
import CalcNightstand from "../assets/images/kind/nightstand.webp";
import CalcPouf from "../assets/images/kind/pouf.webp";

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
