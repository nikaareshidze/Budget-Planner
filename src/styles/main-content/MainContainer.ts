import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 24px;

  @media (max-width: 971px) {
    flex-direction: column;
  }
`;

export default MainContainer;
