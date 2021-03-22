import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { Route } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import calcChair from "../assets/images/calcChair.png";
import calcChairWhite from "../assets/images/calcChairWhite.png";

function LinkCalc() {
  const [modalActive, setModalActive] = useState(false);

  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }
  const local = document.getElementsByTagName('h1')[0]
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
              <Route path="/recreate" exact>
                <img src={calcChairWhite} alt="" className="linkcalc__img" />
              </Route>
            </div>
            <div className="linkcalc__right">
              <Route path="/" exact>
                <div className="linkcalc__title">Калькулятор заказа</div>
                <p className="linkcalc__text">
                  Вы можете самостоятельно собрать предмет мебели, который вам
                  нужен с помощью нашего калькулятора. Мы с вами свяжемся,
                  обсудим детали заказа и дальнейшей работы.
                </p>
                <a href="/calculator" className="linkcalc__btn">
                  Калькулятор
                </a>
              </Route>
              <Route path="/create" exact>
                <div className="linkcalc__title">Калькулятор заказа</div>
                <p className="linkcalc__text">
                  Вы можете самостоятельно собрать предмет мебели, который вам
                  нужен с помощью нашего калькулятора. Мы с вами свяжемся,
                  обсудим детали заказа и дальнейшей работы.
                </p>
                <a href="/calculator" className="linkcalc__btn">
                  Калькулятор
                </a>
              </Route>
              <Route path="/recreate" exact>
                <div className="linkcalc__title">Хотите обновить мебель?</div>
                <p className="linkcalc__text">
                  Оставьте заявку, наш менеджер свяжется с вами и обсудит детали
                  работы. Если вас устроят сроки и цена, то будем работать.
                </p>
                <a onClick={setModal} className="linkcalc__btn">
                  Заказать
                </a>
              </Route>
            </div>
          </div>
        </div>
      </Zoom>
      <Modal
        className="modal"
        active={modalActive}
        setActive={setModalActive}
        location={local}
      />
    </div>
  );
}

export default LinkCalc;
