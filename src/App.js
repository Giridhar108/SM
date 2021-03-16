import React from "react";
import { Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import Create from "./pages/Create";
import Recreate from "./pages/Recreate";
import Calculator from "./pages/Calculator";
import Order from "./pages/Order";
import Policy from "./pages/Policy";
import { Header } from "../src/components";
const MainPage = React.lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <div>
    <Header />
      <React.Suspense fallback={<Policy />}>
        <div className="wrapper">
          <Route path="/" component={MainPage} exact />
          <Route path="/create" component={Create} exact />
          <Route path="/recreate" component={Recreate} exact />
          <Route path="/calculator" component={Calculator} exact />
          <Route path="/order" component={Order} exact />
          <Route path="/Policy" component={Policy} exact />
        </div>
    </React.Suspense>
    </div>
  );
}

export default App;
