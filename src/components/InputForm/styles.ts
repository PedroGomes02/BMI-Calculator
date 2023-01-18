import styled from "styled-components";

const InputFormContainer = styled.form`
  width: 80%;
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding:2rem;
  p {
    font-size: 1rem;
  }
  input {
    width: 80%;
  }
`;

export { InputFormContainer };
