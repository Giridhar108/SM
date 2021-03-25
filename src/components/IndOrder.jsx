import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import armChairInd from "../assets/images/armChairInd.webp";
import redPufInd from "../assets/images/redPufInd.webp";
import blueCouchInd from "../assets/images/blueCouchInd.webp";

function Indorder() {
  const [modalActive, setModalActive] = useState(false);

  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }
  const local = document.getElementsByTagName("h1")[0];

  return (
    <div className="indorder">
      <div className="container">
        <div className="indorder__wrapper">
          <h3 className="indorder__title">
            <b>Индивидуальный</b> заказ
          </h3>
          <div className="indorder__items">
            <div className="indorder__item">
              <img src={armChairInd} alt="" className="indorder__img-1" />
              <p className="indorder__item-subtitle">
                Кресло <b>сделанное на заказ</b>
              </p>

              <div className="indorder__item-discription">
                <h4 className="indorder__item-text-title">
                  Производство <b>мебели</b>
                </h4>
                <p className="indorder__item-text">
                  Мы создадим мебель для вас индивидуально с помощью передовых
                  технологий производства.
                </p>
                <p className="indorder__item-text">
                  Мебель созданная индивидуально прекрасно впишется именно в ваш
                  интерьер. Будет идеальным отражением вашего вкуса и стиля.{" "}
                </p>
              </div>
            </div>

            <div className="indorder__item">
              <img src={redPufInd} alt="" className="indorder__img-2" />
              <div className="indorder__item-subtitle-two indorder__item-subtitle">
                <p>
                  Пуф <b> сделанный на заказ</b>
                </p>
              </div>

              <div className="indorder__item-discription">
                <p className="indorder__item-text">
                  Мебель в индивидуальном стиле выглядит необычно и роскошно.
                </p>
                <p className="indorder__item-text">
                  Вы можете сделать заказ прямо сейчас!
                </p>
                <a onClick={setModal} className="indorder__item-btn">
                  Заказать
                </a>
              </div>
            </div>

            <div className="indorder__item">
              <h4 className="indorder__item-text-title indorder__item-text-title-three">
                <b>Прекрасный</b> выбор
              </h4>
              <img src={blueCouchInd} alt="" className="indorder__img-3" />
              <p className="indorder__item-subtitle indorder__item-subtitle-three">
                <b>Необычный</b> диван
              </p>
              <div className="indorder__item-discription"></div>
            </div>
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

export default Indorder;
