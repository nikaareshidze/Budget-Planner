import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import styled from "styled-components";

//typescript declarations
type Inputs = {
  search: string;
};

import { changeAllExpenseVisibility } from "../store/visibilitySlice";

export default function SearchExpense() {
  const dispatch = useDispatch();

  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const { register, handleSubmit } = useForm<Inputs>();

  let [searchValue, setSearchValue] = useState("");

  const search: SubmitHandler<Inputs> = (data) => {
    setSearchValue(data.search);
  };

  const searchResultObject = expenses.find((i) => i.name == searchValue);

  return (
    <div>
      <SearchForm onChange={handleSubmit(search)}>
        <SearchInput {...register("search")} placeholder="Type to search..." />
      </SearchForm>

      {searchResultObject && (
        <ExpenseDiv>
          <Title>{searchResultObject?.name}</Title>
          <ExpenseCostDiv>
            <Title>{`$${searchResultObject?.cost}`}</Title>
          </ExpenseCostDiv>
        </ExpenseDiv>
      )}
    </div>
  );
}

// style imports
import ExpenseDiv from "../styles/expense/ExpenseDiv";
import Title from "../styles/fonts/Title";
import ExpenseCostDiv from "../styles/expense/ExpenseCostDiv";

const SearchForm = styled.form`
  margin-bottom: 1em;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 4em;
  padding: 1em;
`;
