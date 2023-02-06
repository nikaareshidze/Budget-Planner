import Card from "../styles/Card";
import Title from "../styles/fonts/Title";
import StyledCards from "../styles/StyledCards";

export default function Cards() {
  return (
    <StyledCards>
      <Card backgroundColor="#E6E2C3">
        <Title>Budget: $2000</Title>
      </Card>
      <Card backgroundColor="#227C70">
        <Title>Remaining: $860</Title>
      </Card>
      <Card backgroundColor="#1C315E">
        <Title>Spent so far: $1140</Title>
      </Card>
    </StyledCards>
  );
}
