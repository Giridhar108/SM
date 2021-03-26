import React from "react";
import { Route } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";

import lamp from "../assets/images/lamp.webp";
import couchMain from "../assets/images/couchMain.webp";
import couchMainTwo from "../assets/images/couchMainTwo.webp";
import bedMainThree from "../assets/images/bedMainThree.webp";

function Main() {
  const [modalActive, setModalActive] = useState(false);
  const setModal = () => setModalActive(true);
  if (modalActive) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }
  const local = document.getElementsByTagName("h1")[0];
  return (
    <div className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__left">
            <div className="main__logo">
              <Roll left>
                <div className="main__logo-svg">
                  <svg
                    className="svg__animate"
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
              </Roll>
              <Pulse>
                <div className="main__logo-text">Soul mebel</div>
              </Pulse>
            </div>
            <Route path="/" exact>
              <Fade left>
                <h1 className="main__title main__title-create">
                  Индивидуальное изготовление и перетяжка мебели
                </h1>
              </Fade>
            </Route>
            <Route path="/create" exact>
              <Fade left>
                <h1 className="main__title main__title-create">
                  Давайте вместе создадим мебель вашей мечты
                </h1>
              </Fade>
            </Route>
            <Route path="/recreate" exact>
              <Fade left>
                <h1 className="main__title main__title-recreate">
                  Вернем первосданный вид вашей мебели
                </h1>
              </Fade>
            </Route>
            <Zoom>
              <a className="main__btn" onClick={setModal}>
                Заказать
              </a>
            </Zoom>
            <Fade bottom>
              <div className="main__svg">
                <div className="main__svg-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.02815 2.71693H2.86615C2.73668 2.71693 2.63177 2.82187 2.63177 2.95131C2.63177 3.08075 2.73668 3.18568 2.86615 3.18568H3.02815C3.15762 3.18568 3.26252 3.08075 3.26252 2.95131C3.26252 2.82187 3.15762 2.71693 3.02815 2.71693Z"
                      fill="#333333"
                    />
                    <path
                      d="M4.65297 2.95131C4.65297 3.08075 4.75788 3.18568 4.88734 3.18568H5.04931C5.17878 3.18568 5.28369 3.08075 5.28369 2.95131C5.28369 2.82187 5.17878 2.71693 5.04931 2.71693H4.88734C4.75788 2.71693 4.65297 2.82187 4.65297 2.95131Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.90843 3.18568H7.07043C7.1999 3.18568 7.30481 3.08075 7.30481 2.95131C7.30481 2.82187 7.1999 2.71693 7.07043 2.71693H6.90843C6.77896 2.71693 6.67406 2.82187 6.67406 2.95131C6.67406 3.08075 6.77899 3.18568 6.90843 3.18568Z"
                      fill="#333333"
                    />
                    <path
                      d="M8.9296 3.18568H9.0916C9.22106 3.18568 9.32597 3.08075 9.32597 2.95131C9.32597 2.82187 9.22106 2.71693 9.0916 2.71693H8.9296C8.80013 2.71693 8.69522 2.82187 8.69522 2.95131C8.69522 3.08075 8.80013 3.18568 8.9296 3.18568Z"
                      fill="#333333"
                    />
                    <path
                      d="M10.9507 3.18568H11.1127C11.2422 3.18568 11.3471 3.08075 11.3471 2.95131C11.3471 2.82187 11.2422 2.71693 11.1127 2.71693H10.9507C10.8212 2.71693 10.7163 2.82187 10.7163 2.95131C10.7163 3.08075 10.8212 3.18568 10.9507 3.18568Z"
                      fill="#333333"
                    />
                    <path
                      d="M12.9719 3.18568H13.1339C13.2634 3.18568 13.3683 3.08075 13.3683 2.95131C13.3683 2.82187 13.2634 2.71693 13.1339 2.71693H12.9719C12.8424 2.71693 12.7375 2.82187 12.7375 2.95131C12.7375 3.08075 12.8424 3.18568 12.9719 3.18568Z"
                      fill="#333333"
                    />
                    <path
                      d="M3.02815 5.97244H2.86615C2.73668 5.97244 2.63177 6.07738 2.63177 6.20682C2.63177 6.33626 2.73668 6.44119 2.86615 6.44119H3.02815C3.15762 6.44119 3.26252 6.33626 3.26252 6.20682C3.26252 6.07738 3.15762 5.97244 3.02815 5.97244Z"
                      fill="#333333"
                    />
                    <path
                      d="M5.04928 5.97244H4.88731C4.75785 5.97244 4.65294 6.07738 4.65294 6.20682C4.65294 6.33626 4.75785 6.44119 4.88731 6.44119H5.04928C5.17875 6.44119 5.28366 6.33626 5.28366 6.20682C5.28366 6.07738 5.17875 5.97244 5.04928 5.97244Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.90843 6.44119H7.07043C7.1999 6.44119 7.30481 6.33626 7.30481 6.20682C7.30481 6.07738 7.1999 5.97244 7.07043 5.97244H6.90843C6.77896 5.97244 6.67406 6.07738 6.67406 6.20682C6.67406 6.33626 6.77899 6.44119 6.90843 6.44119Z"
                      fill="#333333"
                    />
                    <path
                      d="M8.9296 6.44119H9.0916C9.22106 6.44119 9.32597 6.33626 9.32597 6.20682C9.32597 6.07738 9.22106 5.97244 9.0916 5.97244H8.9296C8.80013 5.97244 8.69522 6.07738 8.69522 6.20682C8.69522 6.33626 8.80013 6.44119 8.9296 6.44119Z"
                      fill="#333333"
                    />
                    <path
                      d="M10.9507 6.44119H11.1127C11.2422 6.44119 11.3471 6.33626 11.3471 6.20682C11.3471 6.07738 11.2422 5.97244 11.1127 5.97244H10.9507C10.8212 5.97244 10.7163 6.07738 10.7163 6.20682C10.7163 6.33626 10.8212 6.44119 10.9507 6.44119Z"
                      fill="#333333"
                    />
                    <path
                      d="M12.9719 6.44119H13.1339C13.2634 6.44119 13.3683 6.33626 13.3683 6.20682C13.3683 6.07738 13.2634 5.97244 13.1339 5.97244H12.9719C12.8424 5.97244 12.7375 6.07738 12.7375 6.20682C12.7375 6.33626 12.8424 6.44119 12.9719 6.44119Z"
                      fill="#333333"
                    />
                    <path
                      d="M3.87674 4.34471C3.74727 4.34471 3.64236 4.44965 3.64236 4.57909C3.64236 4.70852 3.74727 4.81346 3.87674 4.81346H4.03874C4.16821 4.81346 4.27311 4.70852 4.27311 4.57909C4.27311 4.44965 4.16821 4.34471 4.03874 4.34471H3.87674Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.05986 4.81346C6.18933 4.81346 6.29423 4.70852 6.29423 4.57909C6.29423 4.44965 6.18933 4.34471 6.05986 4.34471H5.89786C5.76839 4.34471 5.66348 4.44965 5.66348 4.57909C5.66348 4.70852 5.76839 4.81346 5.89786 4.81346H6.05986Z"
                      fill="#333333"
                    />
                    <path
                      d="M8.08097 4.81346C8.21044 4.81346 8.31534 4.70852 8.31534 4.57909C8.31534 4.44965 8.21044 4.34471 8.08097 4.34471H7.91897C7.78951 4.34471 7.6846 4.44965 7.6846 4.57909C7.6846 4.70852 7.78951 4.81346 7.91897 4.81346H8.08097Z"
                      fill="#333333"
                    />
                    <path
                      d="M10.1022 4.81346C10.2316 4.81346 10.3365 4.70852 10.3365 4.57909C10.3365 4.44965 10.2316 4.34471 10.1022 4.34471H9.94016C9.81069 4.34471 9.70578 4.44965 9.70578 4.57909C9.70578 4.70852 9.81069 4.81346 9.94016 4.81346H10.1022Z"
                      fill="#333333"
                    />
                    <path
                      d="M12.1233 4.81346C12.2527 4.81346 12.3576 4.70852 12.3576 4.57909C12.3576 4.44965 12.2527 4.34471 12.1233 4.34471H11.9613C11.8318 4.34471 11.7269 4.44965 11.7269 4.57909C11.7269 4.70852 11.8318 4.81346 11.9613 4.81346H12.1233Z"
                      fill="#333333"
                    />
                    <path
                      d="M15.6115 11.532H15.5657V9.7967C15.5657 9.32267 15.1923 8.93427 14.7241 8.9103V2.77055C14.7241 1.69983 13.853 0.828735 12.7823 0.828735H5.71453C5.58506 0.828735 5.48016 0.933673 5.48016 1.06311C5.48016 1.19255 5.58506 1.29749 5.71453 1.29749H12.7823C13.5945 1.29749 14.2553 1.9583 14.2553 2.77055V8.90908H12.9041C12.9503 8.80795 12.9763 8.69574 12.9763 8.57749C12.9763 8.13617 12.6173 7.77714 12.176 7.77714H11.6656C11.5362 7.77714 11.4312 7.88208 11.4312 8.01152C11.4312 8.14095 11.5362 8.24589 11.6656 8.24589H12.176C12.3589 8.24589 12.5076 8.39467 12.5076 8.57749C12.5076 8.76036 12.3588 8.90908 12.176 8.90908H10.2182C10.0353 8.90908 9.88659 8.76033 9.88659 8.57749C9.88659 8.39464 10.0353 8.24589 10.2182 8.24589H10.7286C10.858 8.24589 10.9629 8.14099 10.9629 8.01152C10.9629 7.88205 10.858 7.77714 10.7286 7.77714H10.2182C9.77687 7.77714 9.41784 8.13617 9.41784 8.57749C9.41784 8.69574 9.44384 8.80799 9.49006 8.90908H6.51C6.55622 8.80795 6.58222 8.69574 6.58222 8.57749C6.58222 8.13617 6.22322 7.77717 5.78191 7.77717H3.82409C3.38278 7.77717 3.02375 8.13617 3.02375 8.57749C3.02375 8.69574 3.04975 8.80799 3.09597 8.90908H1.74472V2.77055C1.74472 1.9583 2.40553 1.29749 3.21778 1.29749H4.7775C4.90697 1.29749 5.01188 1.19255 5.01188 1.06311C5.01188 0.933673 4.90697 0.828735 4.7775 0.828735H3.21778C2.14706 0.828735 1.27597 1.69983 1.27597 2.77055V8.91027C0.807813 8.93427 0.434344 9.32267 0.434344 9.79667V11.532H0.388563C0.174281 11.532 0 11.7063 0 11.9205V13.0974C0 13.3115 0.174281 13.4859 0.388531 13.4859H1.17744L0.881031 14.0178C0.745719 14.2606 0.748969 14.5487 0.889813 14.7884C1.03066 15.0281 1.28069 15.1712 1.55869 15.1712C1.83984 15.1712 2.09953 15.0186 2.23638 14.773L2.95366 13.4859H3.95775C4.08722 13.4859 4.19212 13.381 4.19212 13.2515C4.19212 13.122 4.08722 13.0171 3.95775 13.0171H0.46875V12.0008H15.5312V13.0171H4.89484C4.76537 13.0171 4.66047 13.122 4.66047 13.2515C4.66047 13.381 4.76537 13.4859 4.89484 13.4859H13.0464L13.7637 14.773C13.9005 15.0186 14.1602 15.1712 14.4413 15.1712C14.7193 15.1712 14.9693 15.0281 15.1102 14.7884C15.251 14.5487 15.2543 14.2606 15.119 14.0178L14.8226 13.4859H15.6115C15.8257 13.4859 16 13.3116 16 13.0974V11.9205C16 11.7063 15.8257 11.532 15.6115 11.532ZM2.41703 13.4859L1.82687 14.5449C1.77275 14.6421 1.66997 14.7025 1.55869 14.7025C1.44703 14.7025 1.35053 14.6472 1.29394 14.551C1.23737 14.4547 1.23609 14.3435 1.2905 14.246L1.71406 13.4859H2.41703ZM14.7095 14.246C14.7639 14.3435 14.7626 14.4547 14.7061 14.551C14.6495 14.6473 14.553 14.7025 14.4413 14.7025C14.3301 14.7025 14.2273 14.6421 14.1732 14.5449L13.583 13.4859H14.2859L14.7095 14.246ZM3.49244 8.57749C3.49244 8.39464 3.64119 8.24592 3.82403 8.24592H5.78184C5.96469 8.24592 6.11341 8.39467 6.11341 8.57749C6.11341 8.76036 5.96466 8.90908 5.78184 8.90908H3.82403C3.64119 8.90908 3.49244 8.76033 3.49244 8.57749ZM0.903031 11.532V9.7967C0.903031 9.56574 1.09094 9.37786 1.32187 9.37786H14.6781C14.9091 9.37786 15.097 9.56577 15.097 9.7967V11.532H0.903031Z"
                      fill="#333333"
                    />
                  </svg>
                </div>

                <div className="main__svg-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7483 5.50091V5.22813C14.7483 3.81863 13.6028 2.67188 12.1947 2.67188H3.80525C2.39669 2.67188 1.25075 3.81859 1.25075 5.22813V5.50094C0.555969 5.65481 0 6.30394 0 7.03113C0 7.66972 0.336781 8.19419 0.893781 8.44797V13.0156C0.893781 13.1882 1.03369 13.3281 1.20628 13.3281H2.81491C2.9875 13.3281 3.12741 13.1882 3.12741 13.0156V12.0511H6.59644C6.76903 12.0511 6.90894 11.9112 6.90894 11.7386C6.90894 11.566 6.76903 11.4261 6.59644 11.4261H3.12741V10.5753H12.8726V11.4261H9.40269C9.23009 11.4261 9.09019 11.566 9.09019 11.7386C9.09019 11.9112 9.23009 12.0511 9.40269 12.0511H12.8726V13.0156C12.8726 13.1882 13.0125 13.3281 13.1851 13.3281H14.7937C14.9663 13.3281 15.1062 13.1882 15.1062 13.0156V8.44788C15.6632 8.19391 16 7.66944 16 7.03113C16 6.30387 15.4436 5.65472 14.7483 5.50091ZM3.80525 3.29688H12.1947C13.2582 3.29688 14.1233 4.16322 14.1233 5.22813V5.49784C13.4106 5.64316 12.8726 6.27541 12.8726 7.03113V8.60128C12.8474 8.58584 12.8217 8.57078 12.7951 8.55619C12.4359 8.35922 11.9623 8.24678 11.4614 8.23959C11.4584 8.23956 11.4554 8.23956 11.4524 8.23959C10.9512 8.24678 10.4772 8.35922 10.1179 8.55619C9.96341 8.64088 9.83322 8.74047 9.72787 8.85163C9.62262 8.74047 9.49253 8.64091 9.33816 8.55622C8.97903 8.35925 8.50525 8.24681 8.00406 8.23959C8.00106 8.23956 7.99809 8.23956 7.99506 8.23959C7.49422 8.24678 7.02053 8.35925 6.66134 8.55619C6.50691 8.64088 6.37675 8.74044 6.27144 8.85159C6.16619 8.74044 6.03609 8.64088 5.88172 8.55622C5.52259 8.35925 5.04881 8.24681 4.54759 8.23959C4.54459 8.23956 4.54162 8.23956 4.53862 8.23959C4.03744 8.24678 3.56362 8.35925 3.20453 8.55622C3.17809 8.57072 3.15247 8.58575 3.12741 8.60109V7.03109C3.12741 6.27531 2.589 5.64303 1.87575 5.49778V5.22809C1.87575 4.16322 2.74134 3.29688 3.80525 3.29688ZM3.12741 9.60922C3.12741 9.13981 3.85597 8.87559 4.54313 8.86459C5.23028 8.87559 5.95884 9.13981 5.95884 9.60922V9.95034H3.12741V9.60922ZM9.41528 9.95031H6.58388V9.60919C6.58388 9.15681 7.30288 8.87575 7.99959 8.86456C8.68675 8.87556 9.41528 9.13978 9.41528 9.60919V9.95031ZM12.8726 9.95031H10.0403V9.60919C10.0403 9.15681 10.7597 8.87575 11.4569 8.86456C12.1536 8.87575 12.8726 9.15681 12.8726 9.60919V9.95031H12.8726ZM2.50241 12.7031H1.51878V8.23191C1.51878 8.09372 1.42803 7.97194 1.29559 7.93244C0.869437 7.80534 0.625 7.47681 0.625 7.03113C0.625 6.58753 1.02625 6.09137 1.56325 6.09137C2.08109 6.09137 2.50241 6.51294 2.50241 7.03113V12.7031ZM14.7043 7.9325C14.5719 7.97206 14.4812 8.09381 14.4812 8.23194V12.7031H13.4976V7.03113C13.4976 6.51294 13.9185 6.09137 14.4358 6.09137C14.9733 6.09137 15.375 6.5875 15.375 7.03113C15.375 7.47656 15.1305 7.80512 14.7043 7.9325Z"
                      fill="#333333"
                    />
                    <path
                      d="M4.83987 6.72282C5.01247 6.72282 5.15237 6.58291 5.15237 6.41032V6.40853C5.15237 6.23594 5.01247 6.09691 4.83987 6.09691C4.66728 6.09691 4.52737 6.23769 4.52737 6.41028C4.52737 6.58288 4.66728 6.72282 4.83987 6.72282Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.42015 6.72282C6.59274 6.72282 6.73265 6.58291 6.73265 6.41032V6.40853C6.73265 6.23594 6.59274 6.09691 6.42015 6.09691C6.24756 6.09691 6.10765 6.23769 6.10765 6.41028C6.10765 6.58288 6.24756 6.72282 6.42015 6.72282Z"
                      fill="#333333"
                    />
                    <path
                      d="M7.99957 6.72282C8.17217 6.72282 8.31207 6.58291 8.31207 6.41032V6.40853C8.31207 6.23594 8.17217 6.09691 7.99957 6.09691C7.82698 6.09691 7.68707 6.23769 7.68707 6.41028C7.68707 6.58288 7.82698 6.72282 7.99957 6.72282Z"
                      fill="#333333"
                    />
                    <path
                      d="M9.57985 6.72282C9.75244 6.72282 9.89235 6.58291 9.89235 6.41032V6.40853C9.89235 6.23594 9.75244 6.09691 9.57985 6.09691C9.40726 6.09691 9.26735 6.23769 9.26735 6.41028C9.26735 6.58288 9.40726 6.72282 9.57985 6.72282Z"
                      fill="#333333"
                    />
                    <path
                      d="M11.1593 6.72282C11.3319 6.72282 11.4718 6.58291 11.4718 6.41032V6.40853C11.4718 6.23594 11.3319 6.09691 11.1593 6.09691C10.9867 6.09691 10.8468 6.23769 10.8468 6.41028C10.8468 6.58288 10.9867 6.72282 11.1593 6.72282Z"
                      fill="#333333"
                    />
                    <path
                      d="M4.04973 4.96947C4.22232 4.96947 4.36223 4.82956 4.36223 4.65697V4.65431C4.36223 4.48172 4.22232 4.34312 4.04973 4.34312C3.87713 4.34312 3.73723 4.48437 3.73723 4.65694C3.73723 4.8295 3.87713 4.96947 4.04973 4.96947Z"
                      fill="#333333"
                    />
                    <path
                      d="M5.63 4.96947C5.8026 4.96947 5.9425 4.82956 5.9425 4.65697V4.65431C5.9425 4.48172 5.8026 4.34312 5.63 4.34312C5.45741 4.34312 5.3175 4.48437 5.3175 4.65694C5.3175 4.8295 5.45741 4.96947 5.63 4.96947Z"
                      fill="#333333"
                    />
                    <path
                      d="M7.20941 4.96947C7.38201 4.96947 7.52191 4.82956 7.52191 4.65697V4.65431C7.52191 4.48172 7.38201 4.34312 7.20941 4.34312C7.03682 4.34312 6.89691 4.48437 6.89691 4.65694C6.89691 4.8295 7.03682 4.96947 7.20941 4.96947Z"
                      fill="#333333"
                    />
                    <path
                      d="M8.7897 4.96947C8.9623 4.96947 9.1022 4.82956 9.1022 4.65697V4.65431C9.1022 4.48172 8.9623 4.34312 8.7897 4.34312C8.61711 4.34312 8.4772 4.48437 8.4772 4.65694C8.4772 4.8295 8.61711 4.96947 8.7897 4.96947Z"
                      fill="#333333"
                    />
                    <path
                      d="M10.37 4.96947C10.5426 4.96947 10.6825 4.82956 10.6825 4.65697V4.65431C10.6825 4.48172 10.5426 4.34312 10.37 4.34312C10.1974 4.34312 10.0575 4.48437 10.0575 4.65694C10.0575 4.8295 10.1974 4.96947 10.37 4.96947Z"
                      fill="#333333"
                    />
                    <path
                      d="M11.9494 4.96947C12.122 4.96947 12.2619 4.82956 12.2619 4.65697V4.65431C12.2619 4.48172 12.122 4.34312 11.9494 4.34312C11.7768 4.34312 11.6369 4.48437 11.6369 4.65694C11.6369 4.8295 11.7768 4.96947 11.9494 4.96947Z"
                      fill="#333333"
                    />
                    <path
                      d="M7.99957 11.4261C7.82698 11.4261 7.68707 11.566 7.68707 11.7386C7.68707 11.9112 7.82698 12.0511 7.99957 12.0511H8.00135C8.17395 12.0511 8.31298 11.9112 8.31298 11.7386C8.31298 11.566 8.17217 11.4261 7.99957 11.4261Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
                <div className="main__svg-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.13331 8.53333C1.69149 8.53333 1.33331 8.8915 1.33331 9.33332C1.33331 9.77515 1.69149 10.1333 2.13331 10.1333C2.57514 10.1333 2.93331 9.77515 2.93331 9.33332C2.93331 8.8915 2.57514 8.53333 2.13331 8.53333ZM2.13331 9.59999C1.98604 9.59999 1.86665 9.4806 1.86665 9.33332C1.86665 9.18605 1.98604 9.06666 2.13331 9.06666C2.28059 9.06666 2.39998 9.18605 2.39998 9.33332C2.39998 9.4806 2.28059 9.59999 2.13331 9.59999Z"
                      fill="#333333"
                    />
                    <path
                      d="M13.8667 8.53333C13.4249 8.53333 13.0667 8.8915 13.0667 9.33332C13.0667 9.77515 13.4249 10.1333 13.8667 10.1333C14.3085 10.1333 14.6667 9.77515 14.6667 9.33332C14.6667 8.8915 14.3085 8.53333 13.8667 8.53333ZM13.8667 9.59999C13.7194 9.59999 13.6 9.4806 13.6 9.33332C13.6 9.18605 13.7194 9.06666 13.8667 9.06666C14.014 9.06666 14.1333 9.18605 14.1333 9.33332C14.1333 9.4806 14.014 9.59999 13.8667 9.59999Z"
                      fill="#333333"
                    />
                    <path
                      d="M4.23491 7.45626C4.23143 7.52692 4.25617 7.59606 4.30369 7.64847C4.3512 7.70089 4.41759 7.73227 4.48825 7.73573C4.63459 7.74078 4.75842 7.62853 4.76771 7.48239C4.80289 6.50678 4.56469 5.54075 4.07998 4.69333C3.65865 3.92159 3.66878 3.22879 3.85678 2.91119C3.90318 2.83199 3.99998 2.66666 4.43731 2.66666C5.41484 2.69363 6.37716 2.42038 7.19465 1.88373C7.66503 1.50524 8.33546 1.50524 8.80585 1.88373C9.62316 2.42034 10.5853 2.69359 11.5626 2.66666C11.9992 2.66666 12.096 2.83199 12.144 2.91173C12.3306 3.22906 12.3418 3.92186 11.9208 4.69333C11.4358 5.54066 11.1973 6.5067 11.2322 7.48239C11.2392 7.62454 11.3566 7.73616 11.4989 7.73599H11.5122C11.5829 7.73254 11.6493 7.70116 11.6968 7.64874C11.7443 7.59633 11.7691 7.52718 11.7656 7.45653C11.7358 6.57917 11.9518 5.71095 12.3893 4.94986C12.9493 3.92453 12.8544 3.06533 12.6026 2.64133C12.3806 2.28821 11.9777 2.09139 11.5626 2.13333C10.683 2.16048 9.81649 1.91414 9.08265 1.42826C8.44146 0.94648 7.55903 0.94648 6.91785 1.42826C6.1839 1.91433 5.3172 2.16068 4.43731 2.13333C4.02256 2.09099 3.61962 2.28729 3.39731 2.63999C3.14611 3.06426 3.05065 3.92346 3.61065 4.94906C4.04848 5.71022 4.26471 6.57866 4.23491 7.45626Z"
                      fill="#333333"
                    />
                    <path
                      d="M13.8667 7.46668C13.5132 7.46682 13.1672 7.56775 12.8691 7.75761C12.7526 6.96248 12.9136 6.1515 13.3248 5.46108C13.9725 4.27388 14.0475 2.98375 13.5197 2.09468C13.1046 1.41974 12.354 1.02545 11.5627 1.06668C10.8774 1.09419 10.2015 0.900666 9.63465 0.514679C8.6529 -0.171539 7.34707 -0.171539 6.36532 0.514679C5.79847 0.900666 5.12255 1.09419 4.43732 1.06668C3.64591 1.02535 2.89515 1.41965 2.47998 2.09468C1.95225 2.98375 2.02665 4.27388 2.67492 5.46108C3.08624 6.15176 3.24718 6.96302 3.13065 7.75841C2.55645 7.39276 1.82855 7.36936 1.23205 7.69738C0.635557 8.02539 0.26543 8.65261 0.26665 9.33335C0.267964 9.92635 0.549701 10.4838 1.02638 10.8365C1.25115 11.0019 1.51043 11.1142 1.78478 11.1651C1.64611 11.54 1.58541 11.9392 1.60638 12.3384C1.6235 12.6594 1.746 12.9658 1.95492 13.2101C2.08534 13.3437 2.23543 13.4566 2.39998 13.5448V14.0333L2.01412 14.2904C1.67197 14.5188 1.51971 14.9443 1.63925 15.3379C1.75879 15.7315 2.12195 16.0005 2.53332 16C2.71778 15.9993 2.89803 15.9448 3.05198 15.8432L3.85198 15.3099C4.11152 15.1368 4.26718 14.8453 4.26665 14.5333V13.9467C5.51998 14.0645 6.86852 14.1333 7.99998 14.1333C9.13145 14.1333 10.4824 14.0656 11.7333 13.9467V14.5333C11.7328 14.8453 11.8885 15.1368 12.148 15.3099L12.9504 15.8448C13.1038 15.9455 13.2832 15.9995 13.4667 16C13.8781 16.0004 14.2412 15.7313 14.3607 15.3376C14.4801 14.9439 14.3276 14.5184 13.9853 14.2901L13.6 14.0333V13.5445C13.7644 13.4562 13.9144 13.3433 14.0448 13.2096C14.2541 12.9648 14.3768 12.6577 14.3939 12.336C14.4145 11.9375 14.3537 11.539 14.2152 11.1648C14.4895 11.1139 14.7487 11.0017 14.9736 10.8365C15.6231 10.3584 15.892 9.51708 15.6403 8.75081C15.3886 7.98453 14.6732 7.46659 13.8667 7.46668ZM3.99998 9.33335C3.99977 9.26285 3.9955 9.19242 3.98718 9.12241C5.54958 8.28081 7.97492 8.26668 7.99998 8.26668C8.02505 8.26668 10.4485 8.28081 12.0109 9.12161C12.0041 9.18548 12.0006 9.24965 12.0005 9.31388C11.9721 9.85741 12.0181 10.4023 12.1373 10.9333H3.86292C3.98169 10.4088 4.02781 9.87044 3.99998 9.33335ZM3.14345 5.20561C2.59358 4.19815 2.51332 3.08375 2.93892 2.36668C3.25796 1.85345 3.83444 1.55849 4.43732 1.60001C5.22005 1.62925 5.99184 1.40906 6.64132 0.971212C7.45303 0.387415 8.54694 0.387415 9.35865 0.971212C10.0081 1.40906 10.7799 1.62925 11.5627 1.60001C12.1655 1.55849 12.742 1.85345 13.0611 2.36668C13.4877 3.08375 13.4077 4.19815 12.8565 5.20561C12.1459 6.50775 12.2491 7.56881 12.4131 8.16135C12.3068 8.292 12.2187 8.43642 12.1512 8.59068C10.4741 7.74455 8.10665 7.73335 7.99998 7.73335C7.89332 7.73335 5.52318 7.74481 3.84585 8.59228C3.77887 8.43852 3.69151 8.29448 3.58612 8.16401C3.75065 7.57175 3.85492 6.50961 3.14345 5.20561ZM3.55598 14.8661L2.75865 15.3979C2.5736 15.5183 2.3264 15.47 2.20025 15.2888C2.1407 15.201 2.11907 15.0928 2.14025 14.9888C2.16093 14.8846 2.22224 14.7928 2.31065 14.7339L2.81465 14.3979C2.8888 14.3484 2.93333 14.2652 2.93332 14.176V13.7568C3.19531 13.8275 3.46301 13.8751 3.73332 13.8989V14.5333C3.73349 14.6669 3.66696 14.7918 3.55598 14.8661ZM13.6893 14.7328C13.7778 14.7917 13.8393 14.8834 13.86 14.9877C13.8808 15.092 13.8592 15.2002 13.8 15.2885C13.6733 15.4667 13.4296 15.5151 13.2445 15.3987L12.4445 14.8653C12.3336 14.7913 12.2669 14.6667 12.2667 14.5333V13.8989C12.5369 13.875 12.8046 13.8276 13.0667 13.7571V14.176C13.0666 14.2652 13.1112 14.3484 13.1853 14.3979L13.6893 14.7328ZM14.6576 10.4064C14.3052 10.6627 13.8513 10.7344 13.4371 10.5992C13.346 10.5711 13.2469 10.5936 13.177 10.6584C13.1071 10.7231 13.0771 10.8203 13.0982 10.9132C13.1193 11.0061 13.1884 11.0807 13.2795 11.1088C13.4021 11.1459 13.528 11.1712 13.6555 11.1843C13.8049 11.5335 13.8758 11.9113 13.8629 12.2909C13.8562 12.49 13.7858 12.6817 13.6621 12.8379C13.5329 12.9685 13.3787 13.0719 13.2088 13.1419C12.396 13.4989 8.88478 13.6 7.99998 13.6C7.10665 13.6 3.60985 13.5013 2.78985 13.1416C2.62053 13.0717 2.46693 12.9686 2.33812 12.8384C2.21484 12.6828 2.14465 12.4918 2.13785 12.2933C2.12459 11.9132 2.19533 11.5348 2.34505 11.1851C2.47251 11.1719 2.59841 11.1465 2.72105 11.1093C2.86177 11.0658 2.94057 10.9165 2.89705 10.7757C2.85353 10.635 2.70417 10.5562 2.56345 10.5997C2.14923 10.735 1.69529 10.6632 1.34292 10.4069C0.834846 10.0329 0.658527 9.35387 0.920397 8.77985C1.18227 8.20583 1.81063 7.89393 2.42617 8.03244C3.04171 8.17096 3.47591 8.72195 3.46665 9.35281C3.53092 10.2272 3.28638 11.1184 3.06185 11.9635C3.03641 12.0559 3.06252 12.1549 3.13026 12.2227C3.19799 12.2905 3.29692 12.3168 3.38938 12.2915C3.48183 12.2661 3.55359 12.1932 3.57732 12.1003C3.62638 11.9136 3.68158 11.7091 3.74158 11.4667H12.2579C12.3184 11.7115 12.3781 11.9341 12.4221 12.1003C12.4458 12.1932 12.5176 12.2661 12.6101 12.2915C12.7025 12.3168 12.8014 12.2905 12.8692 12.2227C12.9369 12.1549 12.963 12.0559 12.9376 11.9635C12.7099 11.1061 12.4688 10.2235 12.5333 9.33335C12.5333 8.70485 12.9723 8.16171 13.5868 8.02978C14.2013 7.89786 14.8245 8.21297 15.0825 8.78608C15.3405 9.35918 15.1632 10.0346 14.6571 10.4072L14.6576 10.4064Z"
                      fill="#333333"
                    />
                    <path
                      d="M4.80002 4.00001C4.9473 4.00001 5.06669 3.88062 5.06669 3.73334C5.06669 3.58607 4.9473 3.46667 4.80002 3.46667C4.65275 3.46667 4.53336 3.58607 4.53336 3.73334C4.53336 3.88062 4.65275 4.00001 4.80002 4.00001Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.93334 4.00001C7.08062 4.00001 7.20001 3.88062 7.20001 3.73334C7.20001 3.58607 7.08062 3.46667 6.93334 3.46667C6.78606 3.46667 6.66667 3.58607 6.66667 3.73334C6.66667 3.88062 6.78606 4.00001 6.93334 4.00001Z"
                      fill="#333333"
                    />
                    <path
                      d="M9.0667 4.00001C9.21397 4.00001 9.33336 3.88062 9.33336 3.73334C9.33336 3.58607 9.21397 3.46667 9.0667 3.46667C8.91942 3.46667 8.80003 3.58607 8.80003 3.73334C8.80003 3.88062 8.91942 4.00001 9.0667 4.00001Z"
                      fill="#333333"
                    />
                    <path
                      d="M5.86667 5.33334C6.01395 5.33334 6.13334 5.21395 6.13334 5.06667C6.13334 4.91939 6.01395 4.8 5.86667 4.8C5.7194 4.8 5.60001 4.91939 5.60001 5.06667C5.60001 5.21395 5.7194 5.33334 5.86667 5.33334Z"
                      fill="#333333"
                    />
                    <path
                      d="M7.99999 5.33334C8.14726 5.33334 8.26665 5.21395 8.26665 5.06667C8.26665 4.91939 8.14726 4.8 7.99999 4.8C7.85271 4.8 7.73332 4.91939 7.73332 5.06667C7.73332 5.21395 7.85271 5.33334 7.99999 5.33334Z"
                      fill="#333333"
                    />
                    <path
                      d="M10.1333 5.33334C10.2806 5.33334 10.4 5.21395 10.4 5.06667C10.4 4.91939 10.2806 4.8 10.1333 4.8C9.98603 4.8 9.86664 4.91939 9.86664 5.06667C9.86664 5.21395 9.98603 5.33334 10.1333 5.33334Z"
                      fill="#333333"
                    />
                    <path
                      d="M11.2 4.00001C11.3473 4.00001 11.4667 3.88062 11.4667 3.73334C11.4667 3.58607 11.3473 3.46667 11.2 3.46667C11.0527 3.46667 10.9333 3.58607 10.9333 3.73334C10.9333 3.88062 11.0527 4.00001 11.2 4.00001Z"
                      fill="#333333"
                    />
                    <path
                      d="M4.80002 12.8C4.9473 12.8 5.06669 12.6806 5.06669 12.5333C5.06669 12.3861 4.9473 12.2667 4.80002 12.2667C4.65275 12.2667 4.53336 12.3861 4.53336 12.5333C4.53336 12.6806 4.65275 12.8 4.80002 12.8Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.93334 12.8C7.08062 12.8 7.20001 12.6806 7.20001 12.5333C7.20001 12.3861 7.08062 12.2667 6.93334 12.2667C6.78606 12.2667 6.66667 12.3861 6.66667 12.5333C6.66667 12.6806 6.78606 12.8 6.93334 12.8Z"
                      fill="#333333"
                    />
                    <path
                      d="M9.0667 12.8C9.21397 12.8 9.33336 12.6806 9.33336 12.5333C9.33336 12.3861 9.21397 12.2667 9.0667 12.2667C8.91942 12.2667 8.80003 12.3861 8.80003 12.5333C8.80003 12.6806 8.91942 12.8 9.0667 12.8Z"
                      fill="#333333"
                    />
                    <path
                      d="M11.2 12.8C11.3473 12.8 11.4667 12.6806 11.4667 12.5333C11.4667 12.3861 11.3473 12.2667 11.2 12.2667C11.0527 12.2667 10.9333 12.3861 10.9333 12.5333C10.9333 12.6806 11.0527 12.8 11.2 12.8Z"
                      fill="#333333"
                    />
                    <path
                      d="M6.93334 6.66667C7.08062 6.66667 7.20001 6.54727 7.20001 6.4C7.20001 6.25272 7.08062 6.13333 6.93334 6.13333C6.78606 6.13333 6.66667 6.25272 6.66667 6.4C6.66667 6.54727 6.78606 6.66667 6.93334 6.66667Z"
                      fill="#333333"
                    />
                    <path
                      d="M9.0667 6.66667C9.21397 6.66667 9.33336 6.54727 9.33336 6.4C9.33336 6.25272 9.21397 6.13333 9.0667 6.13333C8.91942 6.13333 8.80003 6.25272 8.80003 6.4C8.80003 6.54727 8.91942 6.66667 9.0667 6.66667Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </div>
            </Fade>
          </div>

          <Route path="/" exact>
            <div className="main__right">
              <Fade top>
                <img className="main__lamp" src={lamp} alt="" />
              </Fade>

              <Fade right>
                <img className="main__couchMain" src={couchMain} alt="" />
              </Fade>
            </div>
          </Route>
          <Route path="/create" exact>
            <div className="main__right-create">
              <Fade right>
                <img className="main__couchMainTwo" src={couchMainTwo} alt="" />
              </Fade>
            </div>
          </Route>
          <Route path="/recreate" exact>
            <div className="main__right-create">
              <Fade right>
                <img className="main__couchMainTwo" src={bedMainThree} alt="" />
              </Fade>
            </div>
          </Route>
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

export default Main;
