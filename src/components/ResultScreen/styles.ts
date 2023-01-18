import styled from "styled-components";

const ResultScreenContainer = styled.form`
  width: 80%;
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  p {
    font-size: 1.5rem;
  }
  p:last-child {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background-color: blue;
    padding:1rem;
    border-radius:10px;
  }
`;

export { ResultScreenContainer };
