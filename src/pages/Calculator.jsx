import React from "react";
import {
  Header,
  MainCalc,
  Footer,
  CalcKind,
  CalcStyle,
  CalcCarcass,
  CalcCloth,
  CalcFiller,
  Calcyc,
} from "../components";



function Calculator() {
  return (
    <div>
      <Header/>
      <MainCalc/>
      <CalcKind />
      <CalcStyle />
      <CalcCarcass />
      <CalcCloth />
      <CalcFiller />
      <Calcyc/>
      <Footer />
    </div>
  );
}

export default Calculator;
