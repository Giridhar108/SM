import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components";
import { useForm } from "react-hook-form";
import {
  addItemOrder,
  reduceItemOrder,
  setOrderItems,
  delateOrderItems,
  setCountItems,
} from "../redux/action/calculator";
import { useSelector, useDispatch } from "react-redux";

function Order() {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.calculator.orderItems);
  const countItems = useSelector((state) => state.calculator.countItems);

  const orederItems = () => {
    const numbers = orderItems.map((item) => item && item.number);
    const result = [];
    for (let i = 1; i <= 50; i = i + 1) {
      if (localStorage.getItem(`${i}`)) {
        const item = JSON.parse(localStorage.getItem(`${i}`));
        result.push(item);
        if (item && !numbers.includes(item.number)) {
          dispatch(setOrderItems(item));
        }
      }
    }
    dispatch(setCountItems(result.filter((item) => item).length));
    return result;
  };

  const onSubmit = (data, e) => {
    const items = orederItems().reduce((acc, item, i) => {
      acc[i] = item;
      return acc;
    }, {});

    const dataSent = {
      data,
      items,
    };

    emailjs
      .send(
        "service_ti2ihya",
        "template_dxaxblw",
        dataSent,
        "user_4ZqDrYxLRPkGjqkED8yYq"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          e.target.reset();
          localStorage.clear();
          dispatch(setCountItems(orederItems().filter((item) => item).length));
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const deleteItem = (number) => {
    // localStorage.removeItem(number);
    localStorage.setItem(number, null);
    dispatch(delateOrderItems(number));
  };

  const addItem = (number) => {
    const item = JSON.parse(localStorage.getItem(number));
    item.count += 1;
    localStorage.removeItem(number);
    localStorage.setItem(number, JSON.stringify(item));
    dispatch(addItemOrder(number));
  };
  const reduceItem = (number) => {
    const item = JSON.parse(localStorage.getItem(number));
    item.count = item.count > 1 ? item.count - 1 : item.count;
    localStorage.removeItem(number);
    localStorage.setItem(number, JSON.stringify(item));
    dispatch(reduceItemOrder(number));
  };

  return (
    <div className="order-inner">
      {orederItems().filter((item) => item).length ? (
        <div className="order">
          <div className="container">
            <h3>Ваш заказ</h3>
            {orederItems()
              .filter((item) => item)
              .map(({ kind, style, cloth, color, filler, number, count }) => {
                const handleAddItemOrder = () => {
                  addItem(number);
                };
                const handleReduceItemOrder = () => {
                  reduceItem(number);
                };
                const handleDeleteItem = () => {
                  deleteItem(number);
                };
                return (
                  <div
                    className="calcyc__items"
                    key={`${kind}_${style}_${cloth}_${color}_${filler}`}
                  >
                    <div className="calcyc__item-svg">
                      <div className="calcyc__wrapper-item">
                        <div className="calcyc__item">
                          <div className="calcyc__title-inner">Вид:</div>
                          <div className="calcyc__choise">{kind}</div>
                        </div>
                        <div className="calcyc__item">
                          <div className="calcyc__title-inner">Стиль:</div>
                          <div className="calcyc__choise">{style}</div>
                        </div>
                        <div className="calcyc__item">
                          <div className="calcyc__title-inner">Ткань:</div>
                          <div className="calcyc__choise">
                            {cloth}
                            <div
                              className="calcyc__choise-color"
                              style={{
                                background: `${color ? color : "none"}`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="calcyc__item">
                          <div className="calcyc__title-inner">
                            Наполнитель:
                          </div>
                          <div className="calcyc__choise">{filler}</div>
                        </div>
                      </div>
                      <div className="calcyc__svg">
                        <svg
                          onClick={handleDeleteItem}
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 0C7.17725 0 0 7.17725 0 16C0 24.8228 7.17725 32 16 32C24.8228 32 32 24.8228 32 16C32 7.17725 24.8228 0 16 0Z"
                            fill="#EB5757"
                          />
                          <path
                            d="M16 32C7.17725 32 0 24.8228 0 16C0 7.17725 7.17725 0 16 0C24.8228 0 32 7.17725 32 16C32 24.8228 24.8228 32 16 32ZM16 2C8.28003 2 2 8.28003 2 16C2 23.72 8.28003 30 16 30C23.72 30 30 23.72 30 16C30 8.28003 23.72 2 16 2Z"
                            fill="black"
                          />
                          <path
                            d="M11.0508 21.9507C10.7947 21.9507 10.5386 21.8533 10.344 21.6572C9.95337 21.2666 9.95337 20.6333 10.344 20.2427L20.2439 10.3428C20.6348 9.9519 21.2681 9.9519 21.6587 10.3428C22.0493 10.7334 22.0493 11.3667 21.6587 11.7573L11.7585 21.6572C11.5613 21.8533 11.3054 21.9507 11.0508 21.9507V21.9507Z"
                            fill="black"
                          />
                          <path
                            d="M20.9492 21.9507C20.6934 21.9507 20.4373 21.8533 20.2427 21.6572L10.3428 11.7573C9.9519 11.3667 9.9519 10.7334 10.3428 10.3428C10.7334 9.9519 11.3667 9.9519 11.7573 10.3428L21.6572 20.2427C22.0481 20.6333 22.0481 21.2666 21.6572 21.6572C21.4614 21.8533 21.2053 21.9507 20.9492 21.9507Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="calcyc__item-count">
                      <p>Колличество:</p>
                      <div className="calcyc__item-count-plus">
                        <svg
                          onClick={handleAddItemOrder}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                            fill="#FFD200"
                          />
                          <path
                            d="M12 24C18.617 24 24 18.617 24 12C24 11.448 23.552 11 23 11C22.448 11 22 11.448 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C14.6845 2 17.204 3.0495 19.095 4.9545C19.484 5.3465 20.117 5.349 20.5095 4.96C20.9015 4.571 20.904 3.938 20.5145 3.546C18.2455 1.2595 15.2215 0 12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24Z"
                            fill="#333333"
                          />
                          <path
                            d="M12 17C12.552 17 13 16.552 13 16V13H16C16.552 13 17 12.552 17 12C17 11.448 16.552 11 16 11H13V8C13 7.448 12.552 7 12 7C11.448 7 11 7.448 11 8V11H8C7.448 11 7 11.448 7 12C7 12.552 7.448 13 8 13H11V16C11 16.552 11.448 17 12 17Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                      <div className="calcyc__item-count-num">{count}</div>
                      <div className="calcyc__item-count-minus">
                        <svg
                          onClick={handleReduceItemOrder}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                            fill="#FFD200"
                          />
                          <path
                            d="M12 24C18.617 24 24 18.617 24 12C24 11.448 23.552 11 23 11C22.448 11 22 11.448 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C14.6845 2 17.204 3.0495 19.095 4.9545C19.484 5.3465 20.117 5.349 20.5095 4.96C20.9015 4.571 20.904 3.938 20.5145 3.546C18.2455 1.2595 15.2215 0 12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24Z"
                            fill="#333333"
                          />
                          <path
                            d="M12.25 13.25C12.802 13.25 12.375 13.25 13.1822 13.25L13.25 13.25H16.25C16.802 13.25 17.25 12.802 17.25 12.25C17.25 11.698 16.802 11.25 16.25 11.25H13.25L12.875 11.25C12.5 11.25 12.802 11.25 12.25 11.25C11.698 11.25 12.25 11.25 11.5 11.25L11.25 11.25H8.25C7.698 11.25 7.25 11.698 7.25 12.25C7.25 12.802 7.698 13.25 8.25 13.25H11.25C12.25 13.25 11.698 13.25 12.25 13.25Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="calcyc__svg-resp">
                        <svg
                          onClick={handleDeleteItem}
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 0C7.17725 0 0 7.17725 0 16C0 24.8228 7.17725 32 16 32C24.8228 32 32 24.8228 32 16C32 7.17725 24.8228 0 16 0Z"
                            fill="#EB5757"
                          />
                          <path
                            d="M16 32C7.17725 32 0 24.8228 0 16C0 7.17725 7.17725 0 16 0C24.8228 0 32 7.17725 32 16C32 24.8228 24.8228 32 16 32ZM16 2C8.28003 2 2 8.28003 2 16C2 23.72 8.28003 30 16 30C23.72 30 30 23.72 30 16C30 8.28003 23.72 2 16 2Z"
                            fill="black"
                          />
                          <path
                            d="M11.0508 21.9507C10.7947 21.9507 10.5386 21.8533 10.344 21.6572C9.95337 21.2666 9.95337 20.6333 10.344 20.2427L20.2439 10.3428C20.6348 9.9519 21.2681 9.9519 21.6587 10.3428C22.0493 10.7334 22.0493 11.3667 21.6587 11.7573L11.7585 21.6572C11.5613 21.8533 11.3054 21.9507 11.0508 21.9507V21.9507Z"
                            fill="black"
                          />
                          <path
                            d="M20.9492 21.9507C20.6934 21.9507 20.4373 21.8533 20.2427 21.6572L10.3428 11.7573C9.9519 11.3667 9.9519 10.7334 10.3428 10.3428C10.7334 9.9519 11.3667 9.9519 11.7573 10.3428L21.6572 20.2427C22.0481 20.6333 22.0481 21.2666 21.6572 21.6572C21.4614 21.8533 21.2053 21.9507 20.9492 21.9507Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                  </div>
                );
              })}

            <div className="calcyc__order">
              <h2 className="modal-title">Оставьте свои контактные данные.</h2>
              <p className="modal-text">
                Наш менеджер позвонит вам и обсудит детали заказа.
              </p>

              <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  style={{
                    borderColor: `${errors.firstName ? "#fb0909" : "#DDDDDD"}`,
                  }}
                  name="firstName"
                  ref={register({ required: true, maxLength: 80 })}
                  placeholder="Ваше имя"
                />
                <input
                  type="tel"
                  style={{
                    borderColor: `${
                      errors.mobileNumber ? "#fb0909" : "#DDDDDD"
                    }`,
                  }}
                  name="mobileNumber"
                  ref={register({
                    required: true,
                    maxLength: 11,
                    minLength: 8,
                  })}
                  placeholder="Ваш телефон"
                />
                <div className="modal__policy">
                  <input
                    className="modal__policy-input"
                    name="policy"
                    type="checkbox"
                    value="No"
                    ref={register({ required: true })}
                  />
                  <label>
                    С{" "}
                    <a className="modal__policy-link" href="/Policy">
                      политикой конфиденциальности
                    </a>{" "}
                    ознакомлен
                  </label>
                </div>
                <button type="submit" className="calcyc__btn">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="order-empty">
            <h2>Заказ пуст 😕</h2>
            <p>
              Вероятнее всего, вы не заказывали мебель.
              <br />
              Для того, чтобы заказать мебель, воспользуйтесь калькулятором.
            </p>
            <hr />
            <Link
              to="/calculator"
              className="order-empty__button button--black"
            >
              <span>Калькулятор</span>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Order;
