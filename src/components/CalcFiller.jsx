import React from "react";
import classNames from "classnames";
import sintepon from "../assets/images/sintepon.jpg";
import sintepuh from "../assets/images/sintepuh.jpg";
import sinteshar from "../assets/images/sinteshar.jpg";
import spanbond from "../assets/images/spanbond.jpg";
import vatin from "../assets/images/vatin.jpg";
import brezent from "../assets/images/brezent.jpg";

import { useDispatch, useSelector } from "react-redux";
import { setFiller } from "../redux/action/calculator";

function CalcFiller() {
  const fillerItem = [
    {
      name: "Синтепон",
      img: sintepon,
      description:
        "Синтепон - легкий, объемный, упругий нетканый материал, в котором смесь полиэфирных волокон скрепляется клеевым (эмульсионным) или термическим способом. Преимущества синтепона заключаются в легкости, хороших теплозащитных свойствах и малом весе. Синтепон используется как утеплитель, фильтровальный материал.",
    },
    {
      name: "Синтепух",
      img: sintepuh,
      description:
        "Синтепух - это синтетический аналог натурального пуха. Мягкий, эластичный, гипоаллергенный материал, максимально близкий по свойствам к натуральному пуху водоплавающих птиц. Применяется в качестве наполнителя для подушек, одеял, мягкой мебели и детских игрушек, а также в качестве утеплителя при производстве верхней одежды.",
    },
    {
      name: "Синтешар",
      img: sinteshar,
      description:
        "Синтешар - это синтетический наполнитель из силиконизированного полиэфирного волокна сферической формы. Из-за отсутствия натуральных компонентов волоконные шары не вызывают аллергии. Хорошо восстанавливается после деформации, покрытие силиконом уменьшает трение между волокнами при сжатии и восстановлении, что увеличивает долговечность наполнителя.",
    },
    {
      name: "Спанбонд",
      img: spanbond,
      description:
        "Спанбонд - используется в матрасе в качестве технологического чехла, для укрытия посевов, дачных теплиц, для защиты от неблагоприятных погодных условий, при пошиве медицинской одежды и одноразового постельного белья. Материал легок и защищает мягкие наполнители матраса от изнашивания. Спанбонд равномерно распределяет вес на пружины блока.",
    },
    {
      name: "Ватин",
      img: vatin,
      description:
        "Ватин подразделяется на нитепрошивной и иглопробивной. Применяется при изготовлении матрасов, мебели, гладильных досок, обивки дверей, при пошиве верхней спецодежды. Также ватин используют для укрытия пола при отделочных работах, для упаковки оборудования.",
    },
    {
      name: "Брезент",
      img: brezent,
      description:
        "Брезент - полотно из натурального льна, пропитанное специальным составом, который обеспечивает огнеупорные и водоотталкивающие свойства.",
    },
  ];

  const dispatch = useDispatch();
  const cloth = useSelector(({ calculator }) => calculator.cloth);
  const filler = useSelector(({ calculator }) => calculator.filler);

  const changeFiller = (name) => {
    dispatch(setFiller(name));
  };

  return (
    <div
      className="calcfiller"
      // className={classNames("calcfiller", {
      //   displaynone: !cloth,
      // })}
    >
      <div className="container">
        <h3 className="calcfiller__title">Выберите наполнитель:</h3>
        <div className="calcfiller__wrapper">
          <div className="calcfiller__items">
            {fillerItem.map((item) => {
              const handleChangeFiller = () => {
                return changeFiller(item.name);
              };
              return (
                <div
                  key={item.name}
                  className={
                    item.name === filler
                      ? "boxshadow-small"
                      : "calcfiller__item"
                  }
                  onClick={handleChangeFiller}
                >
                  <div className="calcfiller__item-text">{item.name}</div>
                </div>
              );
            })}
          </div>

          <div className="calcfiller__description">
            {fillerItem.map((item) => {
              if (item.name === filler) {
                return (
                  <img
                    key={item.name}
                    src={item.img}
                    alt=""
                    className="calcfiller__description-img"
                  />
                );
              }
            })}
            <div className="calcfiller__description-content">
              {fillerItem.map((item) => {
                if (item.name === filler) {
                  return (
                    <div
                      key={item.name}
                      className="calcfiller__description-text"
                    >
                      {item.description}
                    </div>
                  );
                }
              })}
              {/* <a href="" className="calcfiller__description-btn">
                Подробнее
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcFiller;
