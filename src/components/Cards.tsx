import styled from "styled-components";

import Card from "../styles/Card";
import Title from "../styles/fonts/Title";
import StyledCards from "../styles/StyledCards";

export default function Cards() {
  return (
    <StyledCards>
      <Card backgroundColor="#E6E2C3">
        <ThisTitle>Budget: $2000</ThisTitle>
      </Card>
      <Card backgroundColor="#227C70">
        <ThisTitle>Remaining: $860</ThisTitle>
      </Card>
      <Card backgroundColor="#1C315E">
        <ThisTitle>Spent so far: $1140</ThisTitle>
      </Card>
    </StyledCards>
  );
}

const ThisTitle = styled(Title)`
  padding-left: 1em;
`;
