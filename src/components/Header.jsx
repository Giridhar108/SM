import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Header() {
  const [modalActive, setModalActive] = useState(false);

  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Fade right>
            <nav className="menu" id="header">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link to="/" className="menu__link">
                    Главная
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/create" className="menu__link">
                    Изготовление
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/recreate" className="menu__link">
                    Перетяжка
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/calculator" className="menu__link">
                    Калькулятор
                  </Link>
                </li>
                <li className="menu__item">
                  <a href="#footer" className="menu__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>


            <div className="pnone">
              <a className="phone__number" href="tel:+79962283009">
                <span>8 996 228 3009</span>
              </a>
              <div className="callback" onClick={setModal}>
                Обратный звонок
              </div>
            </div>



          <Link className="menu-order" to="/order">
            <div className="menu-order__text">Заказ</div>
            <div className="menu-order__num">{localStorage.length}</div>
          </Link>

        </Fade>
        </div>
      </div>
      <Modal
        className="modal"
        active={modalActive}
        setActive={setModalActive}
        location={'обратный звонок'}
      />
    </header>
  );
}

export default Header;
