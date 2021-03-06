import React from "react";
import emailjs from "emailjs-com";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  reduceItem,
  setOrderItems,
  resetCalc,
} from "../redux/action/calculator";

function Calcyc() {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { kind, style, cloth, color, filler, count, deleteItems } = useSelector(
    (state) => state.calculator
  );
  const show = kind && style && cloth && filler && count;
  const [showText, setShowText] = React.useState(false);
  const [showSendEmail, setShowSendEmail] = React.useState(false);

  const onSubmit = async (data, e) => {
    const dataSent = {
      data,
      kind,
      style,
      cloth,
      color,
      filler,
      count,
    };

    e.target.reset();
    emailjs
      .send(
        "service_ti2ihya",
        "template_98q7f81",
        dataSent,
        "user_4ZqDrYxLRPkGjqkED8yYq"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          dispatch(resetCalc());
          setShowSendEmail(true);
          setShowText(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const addOrder = () => {
    setShowText(true);
    const item = {
      kind,
      style,
      cloth,
      color,
      filler,
      count,
      number: localStorage.length + 1,
    };
    localStorage.setItem(`${localStorage.length + 1}`, JSON.stringify(item));

    dispatch(
      setOrderItems({
        kind,
        style,
        cloth,
        color,
        filler,
        count,
        number: localStorage.length,
      })
    );
  };

  const changeAddItem = () => {
    dispatch(addItem());
  };
  const changeReduceItem = () => {
    dispatch(reduceItem());
  };

  return (
    <div className="calcyc">
      <div className="container">
        <h3 className="calcyc__title">?????? ??????????:</h3>

        <div className="calcyc__items">
          <div className="calcyc__item-svg">
            <div className="calcyc__wrapper-item">
              <div className="calcyc__item">
                <div className="calcyc__title-inner">??????:</div>
                <div className="calcyc__choise">{kind}</div>
              </div>
              <div className="calcyc__item">
                <div className="calcyc__title-inner">??????????:</div>
                <div className="calcyc__choise">{style}</div>
              </div>
              <div className="calcyc__item">
                <div className="calcyc__title-inner">??????????:</div>
                <div className="calcyc__choise">
                  {cloth}
                  <div
                    className="calcyc__choise-color"
                    style={{ background: `${color ? color : "none"}` }}
                  ></div>
                </div>
              </div>
              <div className="calcyc__item">
                <div className="calcyc__title-inner">??????????????????????:</div>
                <div className="calcyc__choise">{filler}</div>
              </div>
            </div>
            <div className="calcyc__svg" title="???????????????? ???????????? ?? ??????????">
              {show && (
                <svg
                  onClick={addOrder}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M31.4225 6.07153C30.8234 5.39404 29.9697 5.02075 29.0186 5.02075H21.8376V0.9375C21.8376 0.419678 21.4138 0 20.8909 0H15.8211C15.2982 0 14.8745 0.419678 14.8745 0.9375V5.02075H6.01905L5.78756 3.302C5.53808 1.45044 4.23642 0 2.82408 0H1.13416C0.611276 0 0.1875 0.419678 0.1875 0.9375C0.1875 1.45532 0.611276 1.875 1.13416 1.875H2.82408C3.1278 1.875 3.77099 2.51099 3.91077 3.5498L6.62057 23.6772C6.73989 24.5645 7.20015 25.395 7.91655 26.0161C8.44781 26.4768 9.07571 26.7832 9.73344 26.9114C9.46546 27.3994 9.31336 27.9585 9.31336 28.552C9.31336 30.4534 10.8751 32 12.7948 32C14.7145 32 16.2765 30.4534 16.2765 28.552C16.2765 27.9856 16.1369 27.4512 15.8914 26.9792H20.852C20.6064 27.4512 20.4669 27.9856 20.4669 28.552C20.4669 30.4534 22.0286 32 23.9486 32C25.8682 32 27.43 30.4534 27.43 28.552C27.43 27.9856 27.2904 27.4512 27.0452 26.9792H29.5254C30.0481 26.9792 30.4721 26.5593 30.4721 26.0417C30.4721 25.5239 30.0481 25.1042 29.5254 25.1042H10.4289C9.50392 25.1042 8.61939 24.3372 8.49711 23.4292L8.29916 21.9583H26.9904C27.8942 21.9583 28.7864 21.6162 29.5028 20.9954C30.2189 20.3743 30.6792 19.5435 30.799 18.6562L32.1566 8.5708C32.2823 7.63696 32.0218 6.74927 31.4225 6.07153ZM14.3831 28.552C14.3831 29.4194 13.6707 30.125 12.7948 30.125C11.9191 30.125 11.2067 29.4194 11.2067 28.552C11.2067 27.6848 11.9191 26.9792 12.7948 26.9792C13.6707 26.9792 14.3831 27.6848 14.3831 28.552ZM25.5369 28.552C25.5369 29.4194 24.8245 30.125 23.9486 30.125C23.0729 30.125 22.3604 29.4194 22.3604 28.552C22.3604 27.6848 23.0729 26.9792 23.9486 26.9792C24.8245 26.9792 25.5369 27.6848 25.5369 28.552ZM16.7678 1.875H19.9443V5.94751C19.9443 5.95117 19.9438 5.95459 19.9438 5.95825C19.9438 5.96191 19.9443 5.96558 19.9443 5.96924V10.9792C19.9443 11.4968 20.368 11.9167 20.8909 11.9167H21.2247L18.4126 14.6794L15.6005 11.9167H15.8211C16.344 11.9167 16.7678 11.4968 16.7678 10.9792V1.875ZM30.2798 8.32275L28.9222 18.4084C28.7999 19.3162 27.9154 20.0833 26.9904 20.0833H8.04671L6.27149 6.89575H14.8745V10.0417H13.3019C12.9183 10.0417 12.5727 10.271 12.4267 10.6221C12.2805 10.9734 12.3629 11.3772 12.6353 11.6448L17.746 16.6655C17.9304 16.8469 18.1715 16.9375 18.4126 16.9375C18.6537 16.9375 18.8948 16.8469 19.0792 16.6655L24.1899 11.6448C24.4623 11.3772 24.5447 10.9734 24.3985 10.6221C24.2525 10.271 23.9069 10.0417 23.5233 10.0417H21.8376V6.89575H29.0186C29.416 6.89575 29.7638 7.04175 29.998 7.30664C30.2322 7.57178 30.3323 7.93262 30.2798 8.32275V8.32275Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </div>

          <div className="calcyc__item-count">
            <p>??????????????????????:</p>
            <div className="calcyc__item-count-plus">
              <svg
                onClick={changeAddItem}
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
                onClick={changeReduceItem}
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
          <div className="calcyc__svg-resp" title="???????????????? ???????????? ?? ??????????">
            {show && (
              <svg
                onClick={addOrder}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M31.4225 6.07153C30.8234 5.39404 29.9697 5.02075 29.0186 5.02075H21.8376V0.9375C21.8376 0.419678 21.4138 0 20.8909 0H15.8211C15.2982 0 14.8745 0.419678 14.8745 0.9375V5.02075H6.01905L5.78756 3.302C5.53808 1.45044 4.23642 0 2.82408 0H1.13416C0.611276 0 0.1875 0.419678 0.1875 0.9375C0.1875 1.45532 0.611276 1.875 1.13416 1.875H2.82408C3.1278 1.875 3.77099 2.51099 3.91077 3.5498L6.62057 23.6772C6.73989 24.5645 7.20015 25.395 7.91655 26.0161C8.44781 26.4768 9.07571 26.7832 9.73344 26.9114C9.46546 27.3994 9.31336 27.9585 9.31336 28.552C9.31336 30.4534 10.8751 32 12.7948 32C14.7145 32 16.2765 30.4534 16.2765 28.552C16.2765 27.9856 16.1369 27.4512 15.8914 26.9792H20.852C20.6064 27.4512 20.4669 27.9856 20.4669 28.552C20.4669 30.4534 22.0286 32 23.9486 32C25.8682 32 27.43 30.4534 27.43 28.552C27.43 27.9856 27.2904 27.4512 27.0452 26.9792H29.5254C30.0481 26.9792 30.4721 26.5593 30.4721 26.0417C30.4721 25.5239 30.0481 25.1042 29.5254 25.1042H10.4289C9.50392 25.1042 8.61939 24.3372 8.49711 23.4292L8.29916 21.9583H26.9904C27.8942 21.9583 28.7864 21.6162 29.5028 20.9954C30.2189 20.3743 30.6792 19.5435 30.799 18.6562L32.1566 8.5708C32.2823 7.63696 32.0218 6.74927 31.4225 6.07153ZM14.3831 28.552C14.3831 29.4194 13.6707 30.125 12.7948 30.125C11.9191 30.125 11.2067 29.4194 11.2067 28.552C11.2067 27.6848 11.9191 26.9792 12.7948 26.9792C13.6707 26.9792 14.3831 27.6848 14.3831 28.552ZM25.5369 28.552C25.5369 29.4194 24.8245 30.125 23.9486 30.125C23.0729 30.125 22.3604 29.4194 22.3604 28.552C22.3604 27.6848 23.0729 26.9792 23.9486 26.9792C24.8245 26.9792 25.5369 27.6848 25.5369 28.552ZM16.7678 1.875H19.9443V5.94751C19.9443 5.95117 19.9438 5.95459 19.9438 5.95825C19.9438 5.96191 19.9443 5.96558 19.9443 5.96924V10.9792C19.9443 11.4968 20.368 11.9167 20.8909 11.9167H21.2247L18.4126 14.6794L15.6005 11.9167H15.8211C16.344 11.9167 16.7678 11.4968 16.7678 10.9792V1.875ZM30.2798 8.32275L28.9222 18.4084C28.7999 19.3162 27.9154 20.0833 26.9904 20.0833H8.04671L6.27149 6.89575H14.8745V10.0417H13.3019C12.9183 10.0417 12.5727 10.271 12.4267 10.6221C12.2805 10.9734 12.3629 11.3772 12.6353 11.6448L17.746 16.6655C17.9304 16.8469 18.1715 16.9375 18.4126 16.9375C18.6537 16.9375 18.8948 16.8469 19.0792 16.6655L24.1899 11.6448C24.4623 11.3772 24.5447 10.9734 24.3985 10.6221C24.2525 10.271 23.9069 10.0417 23.5233 10.0417H21.8376V6.89575H29.0186C29.416 6.89575 29.7638 7.04175 29.998 7.30664C30.2322 7.57178 30.3323 7.93262 30.2798 8.32275V8.32275Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        </div>

        <div className={show ? "calcyc__order" : "displaynone"}>
          <h2 className="modal-title">???????????????? ???????? ???????????????????? ????????????.</h2>
          <p className="modal-text">
            ?????? ???????????????? ???????????????? ?????? ?? ?????????????? ???????????? ????????????.
          </p>

          <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              style={{
                borderColor: `${errors.firstName ? "#fb0909" : "#DDDDDD"}`,
              }}
              name="firstName"
              ref={register({ required: true, maxLength: 80 })}
              placeholder="???????? ??????"
            />
            <input
              type="tel"
              style={{
                borderColor: `${errors.mobileNumber ? "#fb0909" : "#DDDDDD"}`,
              }}
              name="mobileNumber"
              ref={register({ required: true, maxLength: 11, minLength: 8 })}
              placeholder="?????? ??????????????"
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
                ??{" "}
                <a className="modal__policy-link" href="/Policy">
                  ?????????????????? ????????????????????????????????????
                </a>{" "}
                ????????????????????
              </label>
            </div>
            {/* <input
              type="text"
              name="Email"
              ref={register({
                required: false,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="?????? ?????????????????????? ??????????"
            /> */}
            <button type="submit" className="calcyc__btn">
              ??????????????????
            </button>
          </form>
        </div>
        <div
          className={classNames("calcyc__text-status", {
            displaynone: !showText || kind,
          })}
        >
          {showSendEmail ? (
            "???????? ???????????? ??????????????, ???????????????? ???????????? ???????????? ??????????????????."
          ) : (
            <p>
              ???????????? ?????????????????? ?? <a href="/order">??????????</a>!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calcyc;
