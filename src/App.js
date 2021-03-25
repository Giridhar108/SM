import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Create from "./pages/Create";
import Recreate from "./pages/Recreate";
import Calculator from "./pages/Calculator";
import Order from "./pages/Order";
import Policy from "./pages/Policy";
import NotFoundPage from "./pages/NotFoundPage";
import { Header, ScrollToTop } from "../src/components";

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <ScrollToTop />
            <MainPage />
          </Route>
          <Route path="/create" exact>
            <ScrollToTop />
            <Create />
          </Route>
          <Route path="/recreate" exact>
            <ScrollToTop />
            <Recreate />
          </Route>
          <Route path="/calculator" exact>
            <ScrollToTop />
            <Calculator />
          </Route>
          <Route path="/order" exact>
            <ScrollToTop />
            <Order />
          </Route>
          <Route path="/policy" exact>
            <ScrollToTop />
            <Policy />
          </Route>
          <Route path="*" component={NotFoundPage} exact />
        </Switch>
      </div>
      {/* </React.Suspense> */}
    </div>
  );
}

export default App;
