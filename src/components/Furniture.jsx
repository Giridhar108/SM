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
import pillow from "../assets/images/pillow.webp";

const furnitureItems = [
  {
    title: "Кровати",
    img: bed,
  },
  {
    title: "Диваны",
    img: sofa,
  },
  {
    title: "Панели",
    img: panel,
  },
  {
    title: "Кресла",
    img: armchair,
  },
  {
    title: "Стулья",
    img: cheir,
  },
  {
    title: "Комоды",
    img: commode,
  },
  {
    title: "Тумбы",
    img: curbstone,
  },
  {
    title: "Зеркала",
    img: glass,
  },
  {
    title: "Пуфы",
    img: pouf,
  },
  {
    title: "Подушки",
    img: pillow,
  },
];

function Furniture() {
  return (
    <div className="furniture">
      <div className="container">
        <div className="furniture__wrapper">
          <h3 className="furniture__title">Виды изготавливаемой мебели:</h3>
          <div className="furniture__items">
            {furnitureItems.map((item) => (
              <FurnitureItems key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
