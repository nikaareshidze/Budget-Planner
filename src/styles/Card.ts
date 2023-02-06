import styled from "styled-components";

const Card = styled.div<{ backgroundColor?: string }>`
  width: 24em;
  height: 4em;
  background-color: ${(props) => props.backgroundColor};

  display: flex;
  align-items: center;
`;

export default Card;
