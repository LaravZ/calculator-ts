import styled from "styled-components";

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  > * {
    justify-content: center;
    align-items: center;
  }
`;

export default ButtonGrid;
