import React from "react";
import { ResultScreenContainer } from "./styles";

const ResultScreen = (props: any) => {
  return (
    <ResultScreenContainer>
      <p>Your BMI is:</p>
      <p>{props.output}</p>
    </ResultScreenContainer>
  );
};

export default ResultScreen;
