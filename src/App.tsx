import React, { useMemo, useState } from "react";
import InputForm from "./components/InputForm";
import ResultScreen from "./components/ResultScreen";

import "./App.css";
import { AppContainer } from "./styles";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputHeight = event.target.value;
    setHeight(Number(inputHeight));
  }

  function onWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputWeight = event.target.value;
    setWeight(Number(inputWeight));
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(2);
  }, [weight, height]);

  return (
    <AppContainer className="App">
      <h1>BMI Calculator</h1>
      <InputForm
        weight={weight}
        onWeightChange={onWeightChange}
        height={height}
        onHeightChange={onHeightChange}
      />
      <ResultScreen output={output} />
    </AppContainer>
  );
}
