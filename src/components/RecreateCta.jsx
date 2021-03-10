import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import calcChairWhite from "../assets/images/calcChairWhite.png";


function RecreateCta() {
  const [modalActive, setModalActive] = useState(false);

  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }

  return (
    <div className="linkcalc">
      <div className="container">
        <div className="linkcalc__wrapper">
          <div className="linkcalc__left">
              <img src={calcChairWhite} alt="" className="linkcalc__img" />
          </div>
          <div className="linkcalc__right">
            <div className="linkcalc__title">Хотите обновить мебель?</div>
            <p className="linkcalc__text">
              Оставьте заявку, наш менеджер свяжется с вами и обсудит детали работы. Если вас устроят сроки и цена, то будем работать.
            </p>
            <a onClick={setModal} className="linkcalc__btn">
              Заказать
            </a>
          </div>
        </div>
      </div>
      <Modal
        className="modal"
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}

export default RecreateCta;
