import styled from "styled-components";

import Card from "../styles/Card";
import Title from "../styles/fonts/Title";
import StyledCards from "../styles/StyledCards";
import Button from "../styles/buttons/Button";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

export default function Cards() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);
  const budget = useSelector((state: RootState) => state.expense.budget);

  let [spentSoFar, setSpentSoFar] = useState(0);

  const foo = expenses.map(function (item) {
    return (spentSoFar = spentSoFar + item.cost);
  });

  let remaining = 2000 - spentSoFar;

  return (
    <StyledCards>
      <Card
        backgroundColor="#E6E2C3"
        style={{ justifyContent: "space-between" }}
      >
        <ThisTitle>{`Budget: ${budget}`}</ThisTitle>
        <Button style={{ marginRight: "1em" }}>Edit</Button>
      </Card>
      <Card backgroundColor="#227C70">
        <ThisTitle>{`Remaining: ${
          expenses[0] ? remaining : budget
        }`}</ThisTitle>
      </Card>
      <Card backgroundColor="#1C315E">
        <ThisTitle>{`Spent so far: ${spentSoFar}`}</ThisTitle>
      </Card>
    </StyledCards>
  );
}

const ThisTitle = styled(Title)`
  padding-left: 1em;
`;
