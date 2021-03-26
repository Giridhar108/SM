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
  ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
      </Provider>
  </BrowserRouter>, rootElement);
} else {
  ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
      </Provider>
  </BrowserRouter>, rootElement, rootElement.firstElementChild);
}

// ReactDOM.render(
  
//   <BrowserRouter>
//     <Provider store={store}>
//         <App/>
//       </Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
