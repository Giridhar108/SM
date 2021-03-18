import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Modal from "./Modal";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { setCountItems } from "../redux/action/calculator";
import { useSelector, useDispatch } from "react-redux";
// import menuSvg from '../assets/svg/menu.svg'

function Header() {
  const [modalActive, setModalActive] = useState(false);
  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }

  const dispatch = useDispatch();
  const countItems = useSelector((state) => state.calculator.countItems);

  const orederItems = () => {
    const result = [];
    for (let i = 1; i <= 50; i = i + 1) {
      if (localStorage.getItem(`${i}`)) {
        const item = JSON.parse(localStorage.getItem(`${i}`));
        if (item) {
          result.push(item);
        }
      }
    }
    dispatch(setCountItems(result.filter((item) => item).length));
    return result;
  };

  orederItems();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sortRef = React.useRef(null);
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setSidebar(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header  className="header">
      <div className="container">
        <div className="header__wrapper" >
          <Fade right>
            <div className="menu-burger"  >
              <svg
                ref={sortRef}
                onClick={showSidebar}
                width="32"
                height="16"
                viewBox="0 0 32 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.9032 0.7742H3.09677C1.39355 0.7742 0 1.47097 0 2.32259C0 3.1742 1.39355 3.87097 3.09677 3.87097H28.9032C30.6065 3.87097 32 3.1742 32 2.32259C32 1.47097 30.6065 0.7742 28.9032 0.7742Z"
                  fill="#FFD200"
                />
                <path
                  d="M28.9032 6.45163H3.09677C1.39355 6.45163 0 7.1484 0 8.00002C0 8.85163 1.39355 9.5484 3.09677 9.5484H28.9032C30.6065 9.5484 32 8.85163 32 8.00002C32 7.1484 30.6065 6.45163 28.9032 6.45163Z"
                  fill="#FFD200"
                />
                <path
                  d="M28.9032 12.129H3.09677C1.39355 12.129 0 12.8258 0 13.6774C0 14.529 1.39355 15.2258 3.09677 15.2258H28.9032C30.6065 15.2258 32 14.529 32 13.6774C32 12.8258 30.6065 12.129 28.9032 12.129Z"
                  fill="#FFD200"
                />
              </svg>
            </div>

            <nav

              className={sidebar ? "nav-menu-burger active" : "nav-menu-burger"}
              id="header"
            >
              <ul className="nav-menu-burger__list" onClick={showSidebar}>
                <li className="nav-menu-burger__item">
                  <div className="nav-menu-burger__toggle">
                    <div className="menu-arrow">
                      <svg
                        width="32"
                        height="16"
                        viewBox="0 0 32 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.5454 6.93942H4.9661L9.75572 2.54884C10.3238 2.02821 10.3238 1.18395 9.75572 0.663233C9.18777 0.14261 8.26675 0.14261 7.6987 0.663233L0.425975 7.32991C-0.142073 7.85053 -0.142073 8.6948 0.425975 9.21551L7.6987 15.8822C7.98282 16.1425 8.35499 16.2728 8.72726 16.2728C9.09953 16.2728 9.47179 16.1425 9.75572 15.8822C10.3238 15.3616 10.3238 14.5173 9.75572 13.9966L4.9661 9.60609H30.5454C31.3487 9.60609 32 9.00911 32 8.27276C32 7.5364 31.3487 6.93942 30.5454 6.93942Z"
                          fill="#FFD200"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/" className="nav-menu-burger__link">
                    Главная
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/create" className="nav-menu-burger__link">
                    Изготовление
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/recreate" className="nav-menu-burger__link">
                    Перетяжка
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/calculator" className="nav-menu-burger__link">
                    Калькулятор
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <a href="#footer" className="nav-menu-burger__link">
                    Контакты
                  </a>
                </li>
                <li className="nav-menu-burger__item nav-menu-burger__item-recall">
                  <a className="nav-menu-burger__link" onClick={setModal}>
                    Обратный звонок
                  </a>
                </li>
              </ul>
            </nav>

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
              <div
                className={classNames({
                  "menu-order__text":
                    navigator.userAgent.indexOf("Firefox") == -1,
                  "menu-order__text-moz":
                    navigator.userAgent.indexOf("Firefox") != -1,
                })}
              >
                Заказ
              </div>
              <div
                className={classNames({
                  "menu-order__num":
                    navigator.userAgent.indexOf("Firefox") == -1,
                  "menu-order__num-moz":
                    navigator.userAgent.indexOf("Firefox") != -1,
                })}
              >
                {countItems}
              </div>
            </Link>
          </Fade>
        </div>
      </div>
      <Modal
        className="modal"
        active={modalActive}
        setActive={setModalActive}
        location={"обратный звонок"}
      />
    </header>
  );
}

export default Header;
