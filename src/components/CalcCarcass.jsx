import React from "react";
import classNames from "classnames";

function CalcCarcass() {
  const boole = false;


  return (
    <div className={classNames("calccarcass", {
      "displaynone": !boole,
    })}>
      <div className="container">
        <div className="calccarcass__wrapper">

        </div>
      </div>
    </div>
  );
}

export default CalcCarcass;
