import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="footer" id="footer">
      <Fade bottom>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logo">
              <Link className="footer__logo-svg" to="/">
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
                <div className="footer__logo-text">Soul mebel</div>
              </Link>

              <div className="footer__logo-subtitle">
                Индивидуальное изготовление и перетяжка мебели
              </div>
            </div>

            <div className="footer__kinds">
              <div className="footer__kinds-title">Виды услуг:</div>
              <ul className="footer__kinds-ul">
                <li className="footer__kinds-ind">
                  <Link to="/create">Индивидуальное изготовление мебели</Link>
                </li>
                <li className="footer__kinds-re">
                  <Link to="/recreate">Перетяжка мебели</Link>
                </li>
              </ul>
            </div>

            <div className="footer__menu">
              <div className="footer__menu-title">Меню:</div>
              <ul className="footer__menu-ul">
                <li className="footer__menu-item">
                  <a href="/#aboutus">О нас</a>
                </li>
                <li className="footer__menu-item">
                  <a href="/#howwork">Как мы работаем</a>
                </li>
                <li className="footer__menu-item">
                  <Link to="/calculator" className="menu__link">
                    Калькулятор
                  </Link>
                </li>
                <li className="footer__menu-item">
                  <Link to="/order" className="menu__link">
                    Заказ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__contacts">
              <div className="footer__contacts-title">Контакты:</div>
              <ul className="footer__contacts-ul">
                <li className="footer__contacts-tel">
                  <a href="tel:+79962283009">8 996 228 3009</a>
                </li>
                <li className="footer__contacts-social">
                  <div className="footer__contacts-social-item">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#4D76A1"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.3956 23.0175H16.6514C16.6514 23.0175 17.0308 22.9759 17.2244 22.7671C17.4027 22.5755 17.397 22.2155 17.397 22.2155C17.397 22.2155 17.3725 20.5305 18.1545 20.2823C18.9255 20.0379 19.9154 21.9109 20.9648 22.6311C21.7582 23.1761 22.3612 23.0566 22.3612 23.0566L25.1668 23.0175C25.1668 23.0175 26.6345 22.9271 25.9386 21.7732C25.8816 21.6787 25.5333 20.9195 23.8526 19.3594C22.0933 17.7265 22.3289 17.9906 24.4481 15.1661C25.7387 13.446 26.2546 12.3958 26.0935 11.9461C25.9398 11.5177 24.9906 11.6309 24.9906 11.6309L21.8315 11.6506C21.8315 11.6506 21.5974 11.6186 21.4237 11.7225C21.254 11.8243 21.1447 12.0616 21.1447 12.0616C21.1447 12.0616 20.6447 13.3927 19.9779 14.5247C18.5712 16.9134 18.0088 17.0394 17.7789 16.8911C17.2441 16.5454 17.3776 15.5024 17.3776 14.7614C17.3776 12.4466 17.7287 11.4814 16.6939 11.2316C16.3505 11.1486 16.0978 11.0938 15.2197 11.085C14.0925 11.0733 13.1384 11.0884 12.5983 11.3531C12.2389 11.5291 11.9616 11.9212 12.1305 11.9438C12.3393 11.9717 12.8122 12.0713 13.0629 12.4127C13.3866 12.853 13.3752 13.8422 13.3752 13.8422C13.3752 13.8422 13.5611 16.5671 12.9408 16.9057C12.515 17.1378 11.9308 16.6638 10.6768 14.4967C10.0342 13.3867 9.54902 12.1597 9.54902 12.1597C9.54902 12.1597 9.45547 11.9304 9.28861 11.8077C9.08611 11.6591 8.80318 11.6118 8.80318 11.6118L5.80129 11.6315C5.80129 11.6315 5.35065 11.644 5.18522 11.84C5.03805 12.0142 5.17353 12.3747 5.17353 12.3747C5.17353 12.3747 7.5237 17.8731 10.1848 20.644C12.6248 23.1844 15.3956 23.0175 15.3956 23.0175Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="footer__contacts-social-item">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#6F3FAA"
                      />
                      <path
                        d="M24.4641 11.2453L24.4589 11.2241C24.0314 9.49583 22.104 7.64133 20.334 7.25552L20.3141 7.25139C17.4512 6.70527 14.5484 6.70527 11.6862 7.25139L11.6656 7.25552C9.89621 7.64133 7.96878 9.49595 7.54071 11.2241L7.53596 11.2453C7.00746 13.6588 7.00746 16.1066 7.53596 18.5201L7.54071 18.5413C7.95059 20.1958 9.7344 21.9651 11.4383 22.4517V24.381C11.4383 25.0793 12.2893 25.4222 12.7732 24.9183L14.7278 22.8865C15.1518 22.9101 15.576 22.9234 16.0001 22.9234C17.4412 22.9234 18.8829 22.7871 20.314 22.5141L20.334 22.51C22.104 22.1241 24.0313 20.2695 24.4588 18.5413L24.4641 18.5202C24.9926 16.1066 24.9926 13.659 24.4641 11.2453ZM22.9172 18.1702C22.6318 19.2978 21.1684 20.6995 20.0057 20.9585C18.4835 21.248 16.9492 21.3717 15.4164 21.3293C15.3859 21.3284 15.3566 21.3403 15.3354 21.3621C15.1178 21.5854 13.9082 22.8273 13.9082 22.8273L12.3902 24.3853C12.2792 24.501 12.0842 24.4222 12.0842 24.2625V21.0665C12.0842 21.0137 12.0465 20.9689 11.9946 20.9586C11.9943 20.9585 11.9941 20.9585 11.9938 20.9585C10.831 20.6995 9.36815 19.2977 9.08221 18.1701C8.60652 15.9885 8.60652 13.7769 9.08221 11.5953C9.36815 10.4677 10.831 9.06595 11.9938 8.80695C14.6523 8.30133 17.3478 8.30133 20.0057 8.80695C21.169 9.06595 22.6318 10.4677 22.9173 11.5953C23.3935 13.777 23.3935 15.9886 22.9172 18.1702Z"
                        fill="white"
                      />
                      <path
                        d="M18.5293 19.6456C18.3506 19.5913 18.1803 19.5548 18.022 19.4893C16.3825 18.8091 14.8738 17.9316 13.6787 16.5865C12.9991 15.8216 12.4672 14.9581 12.0175 14.0442C11.8043 13.6108 11.6246 13.1605 11.4414 12.713C11.2744 12.305 11.5204 11.8835 11.7794 11.576C12.0225 11.2874 12.3353 11.0667 12.674 10.9039C12.9384 10.7769 13.1992 10.8501 13.3923 11.0742C13.8097 11.5587 14.1932 12.0679 14.5035 12.6296C14.6945 12.975 14.6421 13.3973 14.296 13.6323C14.2119 13.6894 14.1353 13.7566 14.057 13.8211C13.9882 13.8776 13.9236 13.9348 13.8765 14.0113C13.7904 14.1514 13.7863 14.3167 13.8417 14.469C14.2683 15.6416 14.9875 16.5534 16.1678 17.0446C16.3567 17.1232 16.5463 17.2146 16.764 17.1893C17.1283 17.1468 17.2463 16.747 17.5017 16.5382C17.7513 16.3341 18.0703 16.3314 18.3391 16.5016C18.608 16.6718 18.8687 16.8544 19.1278 17.0391C19.3822 17.2204 19.6353 17.3976 19.8699 17.6043C20.0955 17.8029 20.1732 18.0636 20.0462 18.3331C19.8137 18.8269 19.4752 19.2376 18.9872 19.4999C18.8493 19.5738 18.6847 19.5977 18.5293 19.6456C18.3506 19.5913 18.6847 19.5977 18.5293 19.6456Z"
                        fill="white"
                      />
                      <path
                        d="M16.0044 10.3392C18.1487 10.3994 19.91 11.8224 20.2874 13.9424C20.3517 14.3037 20.3746 14.6729 20.4032 15.0396C20.4153 15.1938 20.3279 15.3403 20.1616 15.3424C19.9897 15.3444 19.9124 15.2005 19.9011 15.0465C19.8791 14.7414 19.8637 14.4348 19.8217 14.1323C19.5997 12.5349 18.326 11.2133 16.736 10.9297C16.4967 10.887 16.2519 10.8759 16.0095 10.8504C15.8563 10.8344 15.6557 10.8251 15.6217 10.6346C15.5933 10.4749 15.7281 10.3478 15.8801 10.3396C15.9213 10.3372 15.9629 10.3391 16.0044 10.3392C18.1488 10.3994 15.9629 10.3391 16.0044 10.3392Z"
                        fill="white"
                      />
                      <path
                        d="M19.2632 14.5638C19.2597 14.5906 19.2578 14.6535 19.2421 14.7128C19.1852 14.928 18.8587 14.9549 18.7837 14.7378C18.7613 14.6733 18.758 14.5999 18.7579 14.5306C18.7572 14.0764 18.6585 13.6227 18.4294 13.2275C18.194 12.8213 17.8342 12.48 17.4124 12.2733C17.1573 12.1484 16.8815 12.0708 16.6018 12.0246C16.4797 12.0043 16.3562 11.9921 16.2333 11.975C16.0845 11.9543 16.005 11.8595 16.0122 11.7129C16.0187 11.5755 16.1192 11.4766 16.2689 11.4851C16.761 11.513 17.2363 11.6195 17.6739 11.8511C18.5635 12.3223 19.0718 13.0659 19.2202 14.059C19.2269 14.1041 19.2376 14.1486 19.241 14.1937C19.2494 14.3051 19.2547 14.4166 19.2632 14.5638C19.2597 14.5904 19.2547 14.4166 19.2632 14.5638Z"
                        fill="white"
                      />
                      <path
                        d="M17.9295 14.5117C17.7501 14.515 17.6541 14.4156 17.6356 14.2512C17.6227 14.1366 17.6125 14.0204 17.5851 13.9087C17.5312 13.6889 17.4144 13.4853 17.2296 13.3506C17.1423 13.287 17.0434 13.2407 16.9398 13.2107C16.8082 13.1727 16.6715 13.1832 16.5403 13.151C16.3977 13.1161 16.3189 13.0006 16.3413 12.8669C16.3617 12.7452 16.4801 12.6502 16.6131 12.6599C17.4445 12.7199 18.0387 13.1497 18.1235 14.1284C18.1296 14.1975 18.1366 14.2704 18.1212 14.3366C18.0949 14.4495 18.0111 14.5062 17.9295 14.5117C17.7501 14.5149 18.0111 14.5062 17.9295 14.5117Z"
                        fill="white"
                      />
                      <path
                        d="M18.5294 19.6455C18.6848 19.5977 18.3506 19.5912 18.5294 19.6455V19.6455Z"
                        fill="white"
                      />
                      <path
                        d="M16.0099 10.3393C16.0081 10.3393 16.0064 10.3392 16.0046 10.3392C16.0028 10.339 16.0051 10.3392 16.0099 10.3393Z"
                        fill="white"
                      />
                      <path
                        d="M16.0045 10.3391C16.0063 10.3391 16.0081 10.3393 16.0099 10.3393C16.1289 10.3435 18.0644 10.3969 16.0045 10.3391Z"
                        fill="white"
                      />
                      <path
                        d="M19.2632 14.5638C19.2547 14.4166 19.2597 14.5904 19.2632 14.5638V14.5638Z"
                        fill="white"
                      />
                      <path
                        d="M17.9295 14.5117C17.9323 14.5115 17.935 14.5101 17.9377 14.5098C17.9301 14.5098 17.9185 14.51 17.9066 14.5104C17.9143 14.5106 17.9214 14.5118 17.9295 14.5117Z"
                        fill="white"
                      />
                      <path
                        d="M17.9295 14.5118C17.9215 14.5119 17.9143 14.5107 17.9066 14.5105C17.8678 14.5116 17.8277 14.5136 17.9295 14.5118Z"
                        fill="white"
                      />
                      <path
                        d="M17.9377 14.5098C17.9349 14.5101 17.9323 14.5115 17.9296 14.5117C17.9506 14.5103 17.9487 14.5098 17.9377 14.5098Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  {/* <div className="footer__contacts-social-item">
                    <svg
                      width="33"
                      height="34"
                      viewBox="0 0 33 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.99998 3.17723C0.485314 5.78924 0.999981 8.56391 0.999981 16.9932C0.999981 23.9933 -0.221353 31.0106 6.17065 32.6626C8.16665 33.1759 25.852 33.1759 27.8453 32.6599C30.5066 31.9733 32.672 29.8146 32.968 26.0506C33.0093 25.5253 33.0093 8.47057 32.9666 7.93457C32.652 3.92524 30.184 1.61457 26.932 1.14657C26.1866 1.03857 26.0373 1.00657 22.2133 0.999899C8.64931 1.00657 5.67598 0.402565 2.99998 3.17723Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M16.9974 5.18523C12.156 5.18523 7.5587 4.75456 5.8027 9.26123C5.07737 11.1226 5.1827 13.5399 5.1827 17.0012C5.1827 20.0386 5.08537 22.8932 5.8027 24.7399C7.5547 29.2492 12.1894 28.8172 16.9947 28.8172C21.6307 28.8172 26.4107 29.2999 28.188 24.7399C28.9147 22.8599 28.808 20.4786 28.808 17.0012C28.808 12.3852 29.0627 9.40523 26.824 7.1679C24.5574 4.90123 21.492 5.18523 16.992 5.18523H16.9974ZM15.9387 7.31456C26.0374 7.29856 27.3227 6.1759 26.6134 21.7719C26.3614 27.2879 22.1614 26.6826 16.9987 26.6826C7.58537 26.6826 7.3147 26.4132 7.3147 16.9959C7.3147 7.46923 8.06137 7.3199 15.9387 7.3119V7.31456ZM23.304 9.2759C22.5214 9.2759 21.8867 9.91056 21.8867 10.6932C21.8867 11.4759 22.5214 12.1106 23.304 12.1106C24.0867 12.1106 24.7214 11.4759 24.7214 10.6932C24.7214 9.91056 24.0867 9.2759 23.304 9.2759ZM16.9974 10.9332C13.6467 10.9332 10.9307 13.6506 10.9307 17.0012C10.9307 20.3519 13.6467 23.0679 16.9974 23.0679C20.348 23.0679 23.0627 20.3519 23.0627 17.0012C23.0627 13.6506 20.348 10.9332 16.9974 10.9332ZM16.9974 13.0626C22.204 13.0626 22.2107 20.9399 16.9974 20.9399C11.792 20.9399 11.784 13.0626 16.9974 13.0626Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="3.06134"
                          y1="30.956"
                          x2="32.802"
                          y2="5.21589"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFDD55" />
                          <stop offset="0.5" stopColor="#FF543E" />
                          <stop offset="1" stopColor="#C837AB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div> */}
                </li>
                <li className="footer__contacts-policy">
                  <a href="/Policy">Политика конфиденциальности</a>
                </li>
                <li>
                  <div className="footer__contacts-copyright">
                    ©2020-2021 Soul mebel. Все права защищены.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__contacts-end">
            <div className="footer__contacts-end-title">Контакты:</div>
            <ul className="footer__contacts-end-ul">
              <li className="footer__contacts-end-tel">
                <a href="tel:+79962283009">8 996 228 3009</a>
              </li>

              <li className="footer__contacts-end-social">
                <div className="footer__contacts-social-item">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#4D76A1"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3956 23.0175H16.6514C16.6514 23.0175 17.0308 22.9759 17.2244 22.7671C17.4027 22.5755 17.397 22.2155 17.397 22.2155C17.397 22.2155 17.3725 20.5305 18.1545 20.2823C18.9255 20.0379 19.9154 21.9109 20.9648 22.6311C21.7582 23.1761 22.3612 23.0566 22.3612 23.0566L25.1668 23.0175C25.1668 23.0175 26.6345 22.9271 25.9386 21.7732C25.8816 21.6787 25.5333 20.9195 23.8526 19.3594C22.0933 17.7265 22.3289 17.9906 24.4481 15.1661C25.7387 13.446 26.2546 12.3958 26.0935 11.9461C25.9398 11.5177 24.9906 11.6309 24.9906 11.6309L21.8315 11.6506C21.8315 11.6506 21.5974 11.6186 21.4237 11.7225C21.254 11.8243 21.1447 12.0616 21.1447 12.0616C21.1447 12.0616 20.6447 13.3927 19.9779 14.5247C18.5712 16.9134 18.0088 17.0394 17.7789 16.8911C17.2441 16.5454 17.3776 15.5024 17.3776 14.7614C17.3776 12.4466 17.7287 11.4814 16.6939 11.2316C16.3505 11.1486 16.0978 11.0938 15.2197 11.085C14.0925 11.0733 13.1384 11.0884 12.5983 11.3531C12.2389 11.5291 11.9616 11.9212 12.1305 11.9438C12.3393 11.9717 12.8122 12.0713 13.0629 12.4127C13.3866 12.853 13.3752 13.8422 13.3752 13.8422C13.3752 13.8422 13.5611 16.5671 12.9408 16.9057C12.515 17.1378 11.9308 16.6638 10.6768 14.4967C10.0342 13.3867 9.54902 12.1597 9.54902 12.1597C9.54902 12.1597 9.45547 11.9304 9.28861 11.8077C9.08611 11.6591 8.80318 11.6118 8.80318 11.6118L5.80129 11.6315C5.80129 11.6315 5.35065 11.644 5.18522 11.84C5.03805 12.0142 5.17353 12.3747 5.17353 12.3747C5.17353 12.3747 7.5237 17.8731 10.1848 20.644C12.6248 23.1844 15.3956 23.0175 15.3956 23.0175Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footer__contacts-social-item">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#6F3FAA"
                    />
                    <path
                      d="M24.4641 11.2453L24.4589 11.2241C24.0314 9.49583 22.104 7.64133 20.334 7.25552L20.3141 7.25139C17.4512 6.70527 14.5484 6.70527 11.6862 7.25139L11.6656 7.25552C9.89621 7.64133 7.96878 9.49595 7.54071 11.2241L7.53596 11.2453C7.00746 13.6588 7.00746 16.1066 7.53596 18.5201L7.54071 18.5413C7.95059 20.1958 9.7344 21.9651 11.4383 22.4517V24.381C11.4383 25.0793 12.2893 25.4222 12.7732 24.9183L14.7278 22.8865C15.1518 22.9101 15.576 22.9234 16.0001 22.9234C17.4412 22.9234 18.8829 22.7871 20.314 22.5141L20.334 22.51C22.104 22.1241 24.0313 20.2695 24.4588 18.5413L24.4641 18.5202C24.9926 16.1066 24.9926 13.659 24.4641 11.2453ZM22.9172 18.1702C22.6318 19.2978 21.1684 20.6995 20.0057 20.9585C18.4835 21.248 16.9492 21.3717 15.4164 21.3293C15.3859 21.3284 15.3566 21.3403 15.3354 21.3621C15.1178 21.5854 13.9082 22.8273 13.9082 22.8273L12.3902 24.3853C12.2792 24.501 12.0842 24.4222 12.0842 24.2625V21.0665C12.0842 21.0137 12.0465 20.9689 11.9946 20.9586C11.9943 20.9585 11.9941 20.9585 11.9938 20.9585C10.831 20.6995 9.36815 19.2977 9.08221 18.1701C8.60652 15.9885 8.60652 13.7769 9.08221 11.5953C9.36815 10.4677 10.831 9.06595 11.9938 8.80695C14.6523 8.30133 17.3478 8.30133 20.0057 8.80695C21.169 9.06595 22.6318 10.4677 22.9173 11.5953C23.3935 13.777 23.3935 15.9886 22.9172 18.1702Z"
                      fill="white"
                    />
                    <path
                      d="M18.5293 19.6456C18.3506 19.5913 18.1803 19.5548 18.022 19.4893C16.3825 18.8091 14.8738 17.9316 13.6787 16.5865C12.9991 15.8216 12.4672 14.9581 12.0175 14.0442C11.8043 13.6108 11.6246 13.1605 11.4414 12.713C11.2744 12.305 11.5204 11.8835 11.7794 11.576C12.0225 11.2874 12.3353 11.0667 12.674 10.9039C12.9384 10.7769 13.1992 10.8501 13.3923 11.0742C13.8097 11.5587 14.1932 12.0679 14.5035 12.6296C14.6945 12.975 14.6421 13.3973 14.296 13.6323C14.2119 13.6894 14.1353 13.7566 14.057 13.8211C13.9882 13.8776 13.9236 13.9348 13.8765 14.0113C13.7904 14.1514 13.7863 14.3167 13.8417 14.469C14.2683 15.6416 14.9875 16.5534 16.1678 17.0446C16.3567 17.1232 16.5463 17.2146 16.764 17.1893C17.1283 17.1468 17.2463 16.747 17.5017 16.5382C17.7513 16.3341 18.0703 16.3314 18.3391 16.5016C18.608 16.6718 18.8687 16.8544 19.1278 17.0391C19.3822 17.2204 19.6353 17.3976 19.8699 17.6043C20.0955 17.8029 20.1732 18.0636 20.0462 18.3331C19.8137 18.8269 19.4752 19.2376 18.9872 19.4999C18.8493 19.5738 18.6847 19.5977 18.5293 19.6456C18.3506 19.5913 18.6847 19.5977 18.5293 19.6456Z"
                      fill="white"
                    />
                    <path
                      d="M16.0044 10.3392C18.1487 10.3994 19.91 11.8224 20.2874 13.9424C20.3517 14.3037 20.3746 14.6729 20.4032 15.0396C20.4153 15.1938 20.3279 15.3403 20.1616 15.3424C19.9897 15.3444 19.9124 15.2005 19.9011 15.0465C19.8791 14.7414 19.8637 14.4348 19.8217 14.1323C19.5997 12.5349 18.326 11.2133 16.736 10.9297C16.4967 10.887 16.2519 10.8759 16.0095 10.8504C15.8563 10.8344 15.6557 10.8251 15.6217 10.6346C15.5933 10.4749 15.7281 10.3478 15.8801 10.3396C15.9213 10.3372 15.9629 10.3391 16.0044 10.3392C18.1488 10.3994 15.9629 10.3391 16.0044 10.3392Z"
                      fill="white"
                    />
                    <path
                      d="M19.2632 14.5638C19.2597 14.5906 19.2578 14.6535 19.2421 14.7128C19.1852 14.928 18.8587 14.9549 18.7837 14.7378C18.7613 14.6733 18.758 14.5999 18.7579 14.5306C18.7572 14.0764 18.6585 13.6227 18.4294 13.2275C18.194 12.8213 17.8342 12.48 17.4124 12.2733C17.1573 12.1484 16.8815 12.0708 16.6018 12.0246C16.4797 12.0043 16.3562 11.9921 16.2333 11.975C16.0845 11.9543 16.005 11.8595 16.0122 11.7129C16.0187 11.5755 16.1192 11.4766 16.2689 11.4851C16.761 11.513 17.2363 11.6195 17.6739 11.8511C18.5635 12.3223 19.0718 13.0659 19.2202 14.059C19.2269 14.1041 19.2376 14.1486 19.241 14.1937C19.2494 14.3051 19.2547 14.4166 19.2632 14.5638C19.2597 14.5904 19.2547 14.4166 19.2632 14.5638Z"
                      fill="white"
                    />
                    <path
                      d="M17.9295 14.5117C17.7501 14.515 17.6541 14.4156 17.6356 14.2512C17.6227 14.1366 17.6125 14.0204 17.5851 13.9087C17.5312 13.6889 17.4144 13.4853 17.2296 13.3506C17.1423 13.287 17.0434 13.2407 16.9398 13.2107C16.8082 13.1727 16.6715 13.1832 16.5403 13.151C16.3977 13.1161 16.3189 13.0006 16.3413 12.8669C16.3617 12.7452 16.4801 12.6502 16.6131 12.6599C17.4445 12.7199 18.0387 13.1497 18.1235 14.1284C18.1296 14.1975 18.1366 14.2704 18.1212 14.3366C18.0949 14.4495 18.0111 14.5062 17.9295 14.5117C17.7501 14.5149 18.0111 14.5062 17.9295 14.5117Z"
                      fill="white"
                    />
                    <path
                      d="M18.5294 19.6455C18.6848 19.5977 18.3506 19.5912 18.5294 19.6455V19.6455Z"
                      fill="white"
                    />
                    <path
                      d="M16.0099 10.3393C16.0081 10.3393 16.0064 10.3392 16.0046 10.3392C16.0028 10.339 16.0051 10.3392 16.0099 10.3393Z"
                      fill="white"
                    />
                    <path
                      d="M16.0045 10.3391C16.0063 10.3391 16.0081 10.3393 16.0099 10.3393C16.1289 10.3435 18.0644 10.3969 16.0045 10.3391Z"
                      fill="white"
                    />
                    <path
                      d="M19.2632 14.5638C19.2547 14.4166 19.2597 14.5904 19.2632 14.5638V14.5638Z"
                      fill="white"
                    />
                    <path
                      d="M17.9295 14.5117C17.9323 14.5115 17.935 14.5101 17.9377 14.5098C17.9301 14.5098 17.9185 14.51 17.9066 14.5104C17.9143 14.5106 17.9214 14.5118 17.9295 14.5117Z"
                      fill="white"
                    />
                    <path
                      d="M17.9295 14.5118C17.9215 14.5119 17.9143 14.5107 17.9066 14.5105C17.8678 14.5116 17.8277 14.5136 17.9295 14.5118Z"
                      fill="white"
                    />
                    <path
                      d="M17.9377 14.5098C17.9349 14.5101 17.9323 14.5115 17.9296 14.5117C17.9506 14.5103 17.9487 14.5098 17.9377 14.5098Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* <div className="footer__contacts-social-item">
                  <svg
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99998 3.17723C0.485314 5.78924 0.999981 8.56391 0.999981 16.9932C0.999981 23.9933 -0.221353 31.0106 6.17065 32.6626C8.16665 33.1759 25.852 33.1759 27.8453 32.6599C30.5066 31.9733 32.672 29.8146 32.968 26.0506C33.0093 25.5253 33.0093 8.47057 32.9666 7.93457C32.652 3.92524 30.184 1.61457 26.932 1.14657C26.1866 1.03857 26.0373 1.00657 22.2133 0.999899C8.64931 1.00657 5.67598 0.402565 2.99998 3.17723Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M16.9974 5.18523C12.156 5.18523 7.5587 4.75456 5.8027 9.26123C5.07737 11.1226 5.1827 13.5399 5.1827 17.0012C5.1827 20.0386 5.08537 22.8932 5.8027 24.7399C7.5547 29.2492 12.1894 28.8172 16.9947 28.8172C21.6307 28.8172 26.4107 29.2999 28.188 24.7399C28.9147 22.8599 28.808 20.4786 28.808 17.0012C28.808 12.3852 29.0627 9.40523 26.824 7.1679C24.5574 4.90123 21.492 5.18523 16.992 5.18523H16.9974ZM15.9387 7.31456C26.0374 7.29856 27.3227 6.1759 26.6134 21.7719C26.3614 27.2879 22.1614 26.6826 16.9987 26.6826C7.58537 26.6826 7.3147 26.4132 7.3147 16.9959C7.3147 7.46923 8.06137 7.3199 15.9387 7.3119V7.31456ZM23.304 9.2759C22.5214 9.2759 21.8867 9.91056 21.8867 10.6932C21.8867 11.4759 22.5214 12.1106 23.304 12.1106C24.0867 12.1106 24.7214 11.4759 24.7214 10.6932C24.7214 9.91056 24.0867 9.2759 23.304 9.2759ZM16.9974 10.9332C13.6467 10.9332 10.9307 13.6506 10.9307 17.0012C10.9307 20.3519 13.6467 23.0679 16.9974 23.0679C20.348 23.0679 23.0627 20.3519 23.0627 17.0012C23.0627 13.6506 20.348 10.9332 16.9974 10.9332ZM16.9974 13.0626C22.204 13.0626 22.2107 20.9399 16.9974 20.9399C11.792 20.9399 11.784 13.0626 16.9974 13.0626Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="3.06134"
                        y1="30.956"
                        x2="32.802"
                        y2="5.21589"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFDD55" />
                        <stop offset="0.5" stopColor="#FF543E" />
                        <stop offset="1" stopColor="#C837AB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div> */}
              </li>

              <li className="footer__contacts-end-policy">
                <a href="/Policy">Политика конфиденциальности</a>
              </li>
              <li>
                <div className="footer__contacts-end-copyright">
                  ©2020-2021 Soul mebel. Все права защищены.
                </div>
              </li>
            </ul>
          </div>

          <div className="footer__logo-end">
            <a className="footer__logo-end-svg" href="/">
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
              <div className="footer__logo-end-text">Soul mebel</div>
            </a>

            <div className="footer__logo-end-subtitle">
              Индивидуальное изготовление и перетяжка мебели
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
}

export default footer;
