import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

//component imports
import EditBudgetForm from "./EditBudgetForm";

//store imports
import { changeEditBudgetVisibility } from "../store/visibilitySlice";

//typescript declarations
type Inputs = {
  newBudget: number;
};

import { FaWallet } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";

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
      <div style={{ marginBottom: "16px" }}>
        <SectionTitle>Overview</SectionTitle>
      </div>
      <StyledCards>
        <Card>
          <div style={{ backgroundColor: "transparent" }}>
            <CardTitle>Total Budget</CardTitle>
            <CardMoneyTitle>{`$${budget}`}</CardMoneyTitle>
          </div>
          <IconContainer>
            <FaWallet size={20} />
          </IconContainer>
          {/* <ThisButton
            onClick={() => {
              dispatch(changeEditBudgetVisibility());
            }}
          >
            Edit
          </ThisButton> */}
        </Card>

        <Card>
          <div style={{ backgroundColor: "transparent" }}>
            <CardTitle>Total Expenses</CardTitle>
            <CardMoneyTitle>{`$${spentSoFar}`}</CardMoneyTitle>
          </div>
          <IconContainer>
            <GiPayMoney size={20} />
          </IconContainer>
        </Card>

        <Card>
          <div style={{ backgroundColor: "transparent" }}>
            <CardTitle>Total Savings</CardTitle>
            <CardMoneyTitle>{`$${
              expenses[0] ? remaining : budget
            }`}</CardMoneyTitle>
          </div>
          <IconContainer>
            <MdSavings size={20} />
          </IconContainer>
        </Card>
      </StyledCards>

      <EditBudgetForm />
    </>
  );
}

// style imports & declarations

const CardTitle = styled(Title)`
  padding-top: 10px;
  padding-left: 20px;
  color: #2c3333;
  font-size: 14px;
  background-color: transparent;
`;

const CardMoneyTitle = styled(Title)`
  padding-top: 10px;
  font-size: 28px;
  color: #2c3333;
  font-weight: 600;
  padding-left: 20px;
  background-color: transparent;
`;

import Card from "../styles/Card";
import Title from "../styles/Title";
import StyledCards from "../styles/StyledCards";
import SectionTitle from "../styles/SectionTitle";
import IconContainer from "../styles/IconContainer";
