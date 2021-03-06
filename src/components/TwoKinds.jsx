import React from "react";
import TwoKindsArmChairOne from "../assets/images/TwoKindsArmChairOne.webp";
import TwoKindsArmChairTwo from "../assets/images/TwoKindsArmChairTwo.webp";
import { Link } from "react-router-dom";

function TwoKinds() {
  return (
    <div className="twokinds" id="twokinds">
      <div className="container">
        <div className="twokinds__wrapper">
          <Link to="/create" className="twokinds__item twokinds__create">
            <div className="twokinds__img">
              <img src={TwoKindsArmChairOne} alt="" />
            </div>
            <div className="twokinds__content">
              <div className="twokinds__up">
                <div className="twokinds__title">
                  Индивидуальное изготовление мебели
                </div>
                <div className="twokinds__subtitle">
                  Изготавливаем мебель любой сложности и вида
                </div>
              </div>

              <div className="twokinds__more twokinds__create-more">Подробнее</div>
            </div>
          </Link>

          <Link to="/recreate" className="twokinds__item twokinds__recreate">
            <div className="twokinds__img">
              <img src={TwoKindsArmChairTwo} alt="" />
            </div>
            <div className="twokinds__content">
              <div className="twokinds__up">
                <div className="twokinds__title">Перетяжка мебели</div>
                <div className="twokinds__subtitle">
                  Берём мебель в любом виде, делаем полный ремонт.
                </div>
              </div>

              <div className="twokinds__more">Подробнее</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TwoKinds;
