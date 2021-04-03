import React from "react";
import divan from "../assets/images/imgdivan.webp";
import puf from "../assets/images/imgpuf.webp";
import stul from "../assets/images/imgstul.webp";
import kreslo from "../assets/images/imgkreslo.webp";
import krovat from "../assets/images/imgkrovat.webp";

function OurWorks() {
  return (
    <div className="ourworks">
      <div className="container">
          <h3 className="ourworks__title">Наши работы:</h3>
        <div className="ourworks__wrapper">
          <div className="ourworks__items">
            <div className="ourworks__item ">
              <h4 className="ourworks__item-title">Диван</h4>
              {/* <a href="#" className="ourworks__item-link">Подробнее</a> */}
              <img src={divan} alt="" className="ourworks__item-img"/>
            </div>
            <div className="ourworks__item ">
              <h4 className="ourworks__item-title">Пуф</h4>
              {/* <a href="#" className="ourworks__item-link">Подробнее</a> */}
              <img src={puf} alt="" className="ourworks__item-img"/>
            </div>
            <div className="ourworks__item ">
              <h4 className="ourworks__item-title">Стул</h4>
              {/* <a href="#" className="ourworks__item-link">Подробнее</a> */}
              <img src={stul} alt="" className="ourworks__item-img"/>
            </div>
            <div className="ourworks__item ">
              <h4 className="ourworks__item-title">Кресло</h4>
              {/* <a href="#" className="ourworks__item-link">Подробнее</a> */}
              <img src={kreslo} alt="" className="ourworks__item-img"/>
            </div>
            <div className="ourworks__item ">
              <h4 className="ourworks__item-title">Кровать</h4>
              {/* <a href="#" className="ourworks__item-link">Подробнее</a> */}
              <img src={krovat} alt="" className="ourworks__item-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
