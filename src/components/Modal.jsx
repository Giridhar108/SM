import React from "react";
import { useForm } from "react-hook-form";

function Modal({ active, setActive, children }) {
  const changeActive = () => {
    return setActive(false);
  };

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={changeActive}>
      <div
        className={active ? "modal--content active" : "modal--content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">Оставьте свои контактные данные.</h2>
        <p className="modal-text">
          Наш менеджер вам перезвонит в ближайшее время.
        </p>

        <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
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
              borderColor: `${errors.mobileNumber ? "#fb0909" : "#DDDDDD"}`,
            }}
            name="mobileNumber"
            ref={register({ required: true, maxLength: 11, minLength: 8 })}
            placeholder="Ваш телефон"
          />
          <input type="hidden" name="Location" value="main" />
          {/* <input
            type="text"
            name="Email"
            ref={register({
              required: false,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="Ваш электронный адрес"
          /> */}
          <button type="submit"  className="modal__btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
