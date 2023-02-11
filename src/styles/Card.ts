import styled from "styled-components";

const Card = styled.div<{ bgColor?: string }>`
  width: 32%;
  height: 4em;
  background-color: ${(props) => props.bgColor};

  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default Card;
