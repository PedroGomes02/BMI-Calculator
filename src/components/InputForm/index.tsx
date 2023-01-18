import React from "react";
import { InputFormContainer } from "./styles";

interface Props {
  weight: number;
  onWeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  height: number;
  onHeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props: Props) => {
  return (
    <InputFormContainer>
      <p>Weight: {props.weight} kg</p>
      <input
        onChange={props.onWeightChange}
        type="range"
        step="1"
        min="40"
        max="220"
      />
      <p>Height: {props.height} cm</p>
      <input onChange={props.onHeightChange} type="range" min="140" max="220" />
    </InputFormContainer>
  );
};

export default InputForm;
