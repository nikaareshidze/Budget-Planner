import styled from "styled-components";

const Container = styled.div`
  width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    width: 800px;
  }
  @media (max-width: 850px) {
    width: 700px;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;

export default Container;
