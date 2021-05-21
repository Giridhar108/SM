import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'
// import { hydrate, render } from "react-dom";
import "./scss/index.scss";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  
  <BrowserRouter>
    <Provider store={store}>
        <App/>
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   render(<BrowserRouter>
//     <Provider store={store}>
//         <App/>
//       </Provider>
//   </BrowserRouter>, rootElement);
// } else {
  // render(<BrowserRouter>
  //   <Provider store={store}>
  //       <App/>
  //     </Provider>
  // </BrowserRouter>, rootElement);
// }