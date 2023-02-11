import styled from "styled-components";

const StyledCards = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export default StyledCards;
