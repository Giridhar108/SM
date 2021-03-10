import React from "react";
import MainPage from "./pages/MainPage";
import Create from "./pages/Create";
import Recreate from "./pages/Recreate";
import Calculator from "./pages/Calculator";
import Order from "./pages/Order";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Route path="/" component={MainPage} exact />
      <Route path="/create" component={Create} exact />
      <Route path="/recreate" component={Recreate} exact />
      <Route path="/calculator" component={Calculator} exact />
      <Route path="/order" component={Order} exact />
    </div>
  );
}

export default App;
