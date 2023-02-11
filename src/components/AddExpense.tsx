import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// store imports
import { addExpense } from "../store/expenseSlice";

//typescript declarations
type Inputs = {
  expenseName: string;
  expenseCost: number;
};

export default function AddExpense() {
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
      <SectionTitle>Add Expense</SectionTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: "1em" }}>
          <div>
            <Title>Name</Title>
            <Input {...register("expenseName", { required: true })} />
          </div>

          <div>
            <Title>Cost</Title>
            <Input
              type="number"
              {...register("expenseCost", {
                required: true,
                valueAsNumber: true,
              })}
            />
          </div>
        </div>

        <ThisButton>Save</ThisButton>
      </Form>
    </>
  );
}

// style imports
import Button from "../styles/buttons/Button";
import Title from "../styles/fonts/Title";
import SectionTitle from "../styles/SectionsTitle";
import Input from "../styles/Input";
import Form from "../styles/Form";

const ThisButton = styled(Button)`
  margin-top: 1em;
`;
