import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import Card from "../styles/Card";
import Title from "../styles/fonts/Title";
import StyledCards from "../styles/StyledCards";
import Button from "../styles/buttons/Button";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

import { setBudget } from "../store/expenseSlice";

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

  const [newBudgetIsShown, setNewBudgetIsShown] = useState(false);

  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setBudget(data.newBudget));
    resetField("newBudget");
    setNewBudgetIsShown(!newBudgetIsShown);
  };

  return (
    <>
      <StyledCards>
        <Card
          backgroundColor="#E6E2C3"
          style={{ justifyContent: "space-between" }}
        >
          <ThisTitle>{`Budget: ${budget}`}</ThisTitle>
          <Button
            style={{ marginRight: "1em" }}
            onClick={() => {
              setNewBudgetIsShown(!newBudgetIsShown);
            }}
          >
            Edit
          </Button>
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
      {newBudgetIsShown && (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
          <div
            style={{
              display: "flex",
              gap: "1em",
              alignItems: "center",
            }}
          >
            <Title>Please, set the new budget</Title>
            <input
              {...register("newBudget", { required: true })}
              style={inputStyle}
            />
            <Button>Choose</Button>
          </div>
        </form>
      )}
    </>
  );
}

const ThisTitle = styled(Title)`
  padding-left: 1em;
`;

const inputStyle = {
  width: "15rem",
  height: "2rem",
};

const formStyle: {} = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
};
