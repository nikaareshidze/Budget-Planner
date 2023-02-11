import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import styled from "styled-components";

//typescript declarations
type Inputs = {
  search: string;
};

//component imports
import ExpenseItem from "./ExpenseItem";

//store imports
import { setSearchWord } from "../store/expenseSlice";

export default function SearchExpense() {
  const dispatch = useDispatch();

  const expenses = useSelector((state: RootState) => state.expense.expenses);
  const searchWord = useSelector(
    (state: RootState) => state.expense.searchWord
  );

  const { register, handleSubmit } = useForm<Inputs>();

  const search: SubmitHandler<Inputs> = (data) => {
    dispatch(setSearchWord(data.search));
  };

  const searchResultObject = expenses.filter((item) =>
    item.name.includes(searchWord)
  );

  return (
    <div>
      <SearchForm onChange={handleSubmit(search)}>
        <SearchInput
          {...register("search")}
          placeholder="Type to search..."
          value={searchWord}
        />
      </SearchForm>

      <div style={{ marginBottom: "1em" }}>
        {searchWord.length != 0 &&
          searchResultObject.map(function (item) {
            return <ExpenseItem item={item} />;
          })}
      </div>
    </div>
  );
}

//style imports

const SearchForm = styled.form`
  margin-bottom: 1em;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 4em;
  padding: 1em;
`;
