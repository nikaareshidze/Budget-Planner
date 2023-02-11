import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

// component imports
import EditBudgetForm from "./EditBudgetForm";

// store imports
import { changeEditBudgetVisibility } from "../store/visibilitySlice";

// typescript declarations
type Inputs = {
  newBudget: number;
};

export default function Cards() {
  const dispatch = useDispatch();

  const expenses = useSelector((state: RootState) => state.expense.expenses);
  const budget = useSelector((state: RootState) => state.expense.budget);

  let [spentSoFar, setSpentSoFar] = useState(0);

  const foo = expenses.map(function (item) {
    return (spentSoFar = spentSoFar + item.cost);
  });

  let remaining = budget - spentSoFar;

  return (
    <>
      <StyledCards>
        <Card bgColor="#E6E2C3" style={{ justifyContent: "space-between" }}>
          <ThisTitle>{`Budget: $${budget}`}</ThisTitle>
          <Button
            style={{ marginRight: "1em" }}
            onClick={() => {
              dispatch(changeEditBudgetVisibility());
            }}
          >
            Edit
          </Button>
        </Card>

        <Card bgColor="#227C70">
          <ThisTitle>{`Remaining: $${
            expenses[0] ? remaining : budget
          }`}</ThisTitle>
        </Card>

        <Card bgColor="#1C315E">
          <ThisTitle>{`Spent so far: $${spentSoFar}`}</ThisTitle>
        </Card>
      </StyledCards>

      <EditBudgetForm />
    </>
  );
}

// style imports & declarations
const ThisTitle = styled(Title)`
  padding-left: 1em;
`;

import Card from "../styles/Card";
import Title from "../styles/fonts/Title";
import StyledCards from "../styles/StyledCards";
import Button from "../styles/buttons/Button";
