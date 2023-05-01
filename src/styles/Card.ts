import styled from "styled-components";

const Card = styled.div<{ bgColor?: string }>`
  width: 32%;
  height: 6em;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  //background-color: ${(props) => props.bgColor};

  /* display: flex;
  flex-direction: column;
  align-items: center; */

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default Card;
