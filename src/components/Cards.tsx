import styled from "styled-components";

import Card from "../styles/Card";
import Title from "../styles/fonts/Title";
import StyledCards from "../styles/StyledCards";
import Button from "../styles/buttons/Button";

export default function Cards() {
  return (
    <StyledCards>
      <Card
        backgroundColor="#E6E2C3"
        style={{ justifyContent: "space-between" }}
      >
        <ThisTitle>Budget: $2000</ThisTitle>
        <Button style={{ marginRight: "1em" }}>Edit</Button>
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
