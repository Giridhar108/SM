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

  const [sidebar, setSidebar] = React.useState(false);

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

  const [goingUp, setGoingUp] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth < 650 && currentScrollY > 0) {
        setGoingUp(true);
      }
      if (window.innerWidth < 650 && currentScrollY <= 0) {
        setGoingUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <header
      className={classNames("header", {
        "shadow-header": goingUp,
      })}
    >
      <div className="container">
        <div className="header__wrapper">
          <Fade right>
            <div className="menu-burger">
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
                      <div className="nav__logo">
                        <div className="nav__logo-svg">
                          <svg
                            className="nav__animate"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32 64C14.3354 63.9802 0.0197917 49.6646 0 32C0 31.4109 0.477604 30.9333 1.06667 30.9333C1.65573 30.9333 2.13333 31.4109 2.13333 32C2.13333 48.4948 15.5052 61.8667 32 61.8667C48.4948 61.8667 61.8667 48.4948 61.8667 32C61.8667 15.5052 48.4948 2.13333 32 2.13333C31.4109 2.13333 30.9333 1.65573 30.9333 1.06667C30.9333 0.477604 31.4109 0 32 0C49.6729 0 64 14.3271 64 32C64 49.6729 49.6729 64 32 64Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M25.6 2.13333H12.8C12.2109 2.13333 11.7333 1.65573 11.7333 1.06667C11.7333 0.477604 12.2109 0 12.8 0H25.6C26.1891 0 26.6667 0.477604 26.6667 1.06667C26.6667 1.65573 26.1891 2.13333 25.6 2.13333Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M9.60001 1.06667C9.60001 1.65573 9.1224 2.13333 8.53334 2.13333C7.94428 2.13333 7.46667 1.65573 7.46667 1.06667C7.46667 0.477604 7.94428 0 8.53334 0C9.1224 0 9.60001 0.477604 9.60001 1.06667Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M25.6 8.53333H12.8C12.2109 8.53333 11.7333 8.05572 11.7333 7.46666C11.7333 6.8776 12.2109 6.39999 12.8 6.39999H25.6C26.1891 6.39999 26.6667 6.8776 26.6667 7.46666C26.6667 8.05572 26.1891 8.53333 25.6 8.53333Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M9.60001 7.46666C9.60001 8.05572 9.1224 8.53333 8.53334 8.53333C7.94428 8.53333 7.46667 8.05572 7.46667 7.46666C7.46667 6.8776 7.94428 6.39999 8.53334 6.39999C9.1224 6.39999 9.60001 6.8776 9.60001 7.46666Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M25.6 14.9333H12.8C12.2109 14.9333 11.7333 14.4557 11.7333 13.8667C11.7333 13.2776 12.2109 12.8 12.8 12.8H25.6C26.1891 12.8 26.6667 13.2776 26.6667 13.8667C26.6667 14.4557 26.1891 14.9333 25.6 14.9333Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M9.60001 13.8667C9.60001 14.4557 9.1224 14.9333 8.53334 14.9333C7.94428 14.9333 7.46667 14.4557 7.46667 13.8667C7.46667 13.2776 7.94428 12.8 8.53334 12.8C9.1224 12.8 9.60001 13.2776 9.60001 13.8667Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M32 44.8C24.9307 44.8 19.2 39.0693 19.2 32C19.2 24.9307 24.9307 19.2 32 19.2C39.0693 19.2 44.8 24.9307 44.8 32C44.7922 39.0662 39.0661 44.7922 32 44.8ZM32 21.3333C26.1089 21.3333 21.3333 26.1089 21.3333 32C21.3333 37.8912 26.1089 42.6667 32 42.6667C37.8911 42.6667 42.6667 37.8912 42.6667 32C42.6604 26.1115 37.8885 21.3396 32 21.3333Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M32 57.6C19.5687 57.6255 8.92447 48.6974 6.78593 36.451C6.68436 35.8708 7.07186 35.3177 7.65207 35.2161C8.23228 35.1141 8.78541 35.5021 8.88749 36.0823C11.0495 48.3213 22.3797 56.7526 34.7245 55.3078C47.0687 53.8625 56.1458 43.0432 55.4234 30.6354C54.7005 18.2276 44.4286 8.53541 32 8.53333C31.4109 8.53333 30.9333 8.05572 30.9333 7.46666C30.9333 6.8776 31.4109 6.39999 32 6.39999C46.1385 6.39999 57.6 17.8615 57.6 32C57.6 46.1385 46.1385 57.6 32 57.6V57.6Z"
                              fill="#FFD200"
                            />
                            <path
                              d="M32 51.2C24.9104 51.2057 18.3953 47.3 15.0594 41.0443C14.8734 40.7078 14.8828 40.2974 15.0844 39.9698C15.2854 39.6422 15.6474 39.4484 16.0318 39.4625C16.4156 39.4766 16.7625 39.6958 16.9396 40.0375C20.8734 47.4062 29.563 50.8448 37.4739 48.1635C45.3854 45.4818 50.1927 37.4682 48.8349 29.226C47.4771 20.9838 40.3531 14.9354 32 14.9333C31.4109 14.9333 30.9333 14.4557 30.9333 13.8667C30.9333 13.2776 31.4109 12.8 32 12.8C42.6036 12.8 51.2 21.3963 51.2 32C51.2 42.6036 42.6036 51.2 32 51.2V51.2Z"
                              fill="#FFD200"
                            />
                          </svg>
                        </div>
                        <div className="nav__logo-text">Soul mebel</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/" className="nav-menu-burger__link">
                    ??????????????
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/create" className="nav-menu-burger__link">
                    ????????????????????????
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/recreate" className="nav-menu-burger__link">
                    ??????????????????
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <Link to="/calculator" className="nav-menu-burger__link">
                    ??????????????????????
                  </Link>
                </li>
                <li className="nav-menu-burger__item">
                  <a href="#footer" className="nav-menu-burger__link">
                    ????????????????
                  </a>
                </li>
                <li className="nav-menu-burger__item nav-menu-burger__item-recall">
                  <a className="nav-menu-burger__link" onClick={setModal}>
                    ???????????????? ????????????
                  </a>
                </li>
              </ul>
            </nav>

            <nav className="menu" id="header">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link to="/" className="menu__link">
                    ??????????????
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/create" className="menu__link">
                    ????????????????????????
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/recreate" className="menu__link">
                    ??????????????????
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/calculator" className="menu__link">
                    ??????????????????????
                  </Link>
                </li>
                <li className="menu__item">
                  <a href="#footer" className="menu__link">
                    ????????????????
                  </a>
                </li>
              </ul>
            </nav>

            <div className="pnone">
              <a className="phone__number" href="tel:+79193304769">
                <span>+7 919 330 47 69</span>
              </a>
              <div className="callback" onClick={setModal}>
                ???????????????? ????????????
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
                ??????????
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
        location={"???????????????? ????????????"}
      />
    </header>
  );
}

export default Header;
