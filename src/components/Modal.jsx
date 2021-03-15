import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Modal({ active, setActive, children, location }) {
  const [send, setSend] = React.useState(null);

  const changeActive = () => {
    return setActive(false);
  };
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const dataSent = {
      data,
      local: (location && location.innerHTML) || location,
    };
    emailjs
      .send(
        "service_ti2ihya",
        "template_98q7f81",
        dataSent,
        "user_4ZqDrYxLRPkGjqkED8yYq"
      )
      .then(
        function (response) {
          setSend(true);
          console.log("SUCCESS!", response.status, response.text);
          e.target.reset();
        },
        function (error) {
          setSend(false);
          console.log("FAILED...", error);
        }
      );
  };

  return !send ? (
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
              ознакомлен.
            </label>
          </div>

          {/* <input
            type="text"
            name="Email"
            ref={register({
              required: false,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="Ваш электронный адрес"
          /> */}
          <button type="submit" className="modal__btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className={active ? "modal active" : "modal"} onClick={changeActive}>
      <div
        className={active ? "modal--content active" : "modal--content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">Ваши данные успешно отправлены</h2>
        {/* <p className="modal-text">
          Наш менеджер вам перезвонит в ближайшее время.
        </p> */}
      </div>
    </div>
  );
}

export default Modal;
