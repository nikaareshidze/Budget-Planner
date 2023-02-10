import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

import { addExpense } from "../../store/expenseSlice";

type Inputs = {
  expenseName: string;
  expenseCost: number;
};

export default function AddExpense() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const [id, setId] = useState(1);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      addExpense({ cost: data.expenseCost, name: data.expenseName, id: id })
    );
    setId((id) => id + 1);
    resetField("expenseName");
    resetField("expenseCost");
  };

  return (
    <>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <div style={{ display: "flex", gap: "1em" }}>
          <div>
            <Title>Name</Title>
            <input
              {...register("expenseName", { required: true })}
              style={inputStyle}
            />
          </div>

          <div>
            <Title>Cost</Title>
            <input
              type="number"
              {...register("expenseCost", {
                required: true,
                valueAsNumber: true,
              })}
              style={inputStyle}
            />
          </div>
        </div>

        <Button>Save</Button>
      </form>
    </>
  );
}

import Button from "../../styles/buttons/Button";
import Title from "../../styles/fonts/Title";

const inputStyle = {
  width: "15rem",
  height: "2rem",
};

const formStyle: {} = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
};
