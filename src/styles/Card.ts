import styled from "styled-components";

const Card = styled.div<{ bgColor?: string }>`
  width: 24em;
  height: 4em;
  background-color: ${(props) => props.bgColor};

  display: flex;
  align-items: center;
`;

export default Card;
