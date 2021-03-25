import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import chairAfter from "../assets/images/chairAfter.webp";
import chairBefore from "../assets/images/chairBefore.webp";

function BeforeAfter() {
  const [modalActive, setModalActive] = useState(false);

  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }
  const local = document.getElementsByTagName('h1')[0]

  return (
    <div className="beforeafter" id="ba">
      <div className="container">
        <div className="beforeafter__wrapper">
          <div className="beforeafter__description">
            <h3 className="beforeafter__title">Перетяжка</h3>
            <p className="beforeafter__text">
              Вернём жизнь вашей медели. Мебель после перетяжки выглядит новой и
              не использованной. Это простой способ обновить интерьер в
              приемлемую стоимость.
            </p>
          </div>

          <div className="beforeafter__after">
            <img src={chairAfter} alt="" className="beforeafter__after-img" />
            <p className="beforeafter__after-textbold">После</p>
          </div>

          <div className="beforeafter__before">
            <div className="beforeafter__before-textbold">До</div>
            <img src={chairBefore} alt="" className="beforeafter__before-img" />
            <h3 className="beforeafter__before-title">Что такое перетяжка?</h3>
            <div className="beforeafter__before-text">
              Это полное востановление внешнего вида и частичная замена
              внутренностей изделия.
            </div>
            <a onClick={setModal} className="beforeafter__before-btn">
              Заказать
            </a>
          </div>
        </div>
      </div>
      <Modal
        className="modal"
        active={modalActive}
        setActive={setModalActive}
        location={local}
      />
    </div>
  );
}

export default BeforeAfter;
