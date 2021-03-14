import React from "react";

import { Route } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import calcChair from "../assets/images/calcChair.png";
import calcChairWhite from "../assets/images/calcChairWhite.png";

function LinkCalc() {
  return (
    <div className="linkcalc">
      <Zoom>
      <div className="container">
        <div className="linkcalc__wrapper">
          <div className="linkcalc__left">
            <Route path="/" exact>
              <img src={calcChair} alt="" className="linkcalc__img" />
            </Route>
            <Route path="/create" exact>
              <img src={calcChairWhite} alt="" className="linkcalc__img" />
            </Route>
            {/* <Route path="/recreate" exact>
              <img src={calcChairWhite} alt="" className="linkcalc__img" />
            </Route> */}
          </div>
          <div className="linkcalc__right">
            <div className="linkcalc__title">Калькулятор заказа</div>
            <p className="linkcalc__text">
              Вы можете самостоятельно собрать предмет мебели, который вам нужен
              с помощью нашего калькулятора. Мы с вами свяжемся, обсудим детали
              заказа и дальнейшей работы.
            </p>
            <a href="/calculator" className="linkcalc__btn">
              Калькулятор
            </a>
          </div>
        </div>
      </div>
            </Zoom>
    </div>
  );
}

export default LinkCalc;
