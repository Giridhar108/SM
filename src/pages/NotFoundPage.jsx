import React from "react";
import { Link } from "react-router-dom";
// import PageNotFound from "../assets/images/PageNotFound";

function NotFoundPage() {
  return (
    <div style={{ marginTop: "64px", textAlign: "center"  }}>
      {/* <img src={PageNotFound} /> */}
       Страница не найдена
      <p style={{ marginTop: "12px", textAlign: "center" }}>
        <Link to="/">На главную </Link>
      </p>
    </div>
  );
}
export default NotFoundPage;
