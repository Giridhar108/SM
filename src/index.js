import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'
import { hydrate, render } from "react-dom";

import "./scss/index.scss";

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter>
    <Provider store={store}>
        <App/>
      </Provider>
  </BrowserRouter>, rootElement, rootElement.firstElementChild);
} else {
  hydrate(<BrowserRouter>
    <Provider store={store}>
        <App/>
      </Provider>
  </BrowserRouter>, rootElement);
}

// ReactDOM.render(
  
//   <BrowserRouter>
//     <Provider store={store}>
//         <App/>
//       </Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
