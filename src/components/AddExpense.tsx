import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

//store imports
import { addExpense } from "../store/expenseSlice";
import { setSearchWord } from "../store/expenseSlice";

//typescript declarations
type Inputs = {
  expenseName: string;
  expenseCost: number;
};

import { SiContactlesspayment } from "react-icons/si";

export default function AddExpense() {
  const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const [id, setId] = useState(4);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      addExpense({ cost: data.expenseCost, name: data.expenseName, id: id })
    );
    setId((id) => id + 1);
    resetField("expenseName");
    resetField("expenseCost");
    dispatch(setSearchWord(""));
  };

  return (
    <div>
      <SectionTitle>Buy Something</SectionTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormChild>
          <div>
            <Title>Product Name</Title>
            <Input {...register("expenseName", { required: true })} />
          </div>

          <div>
            <Title>Product Cost</Title>
            <Input
              type="number"
              {...register("expenseCost", {
                required: true,
                valueAsNumber: true,
              })}
            />
          </div>
        </FormChild>

        <ThisButton>Buy</ThisButton>
      </Form>
    </div>
  );
}

//style imports
import Button from "../styles/Button";
import Title from "../styles/Title";
import SectionTitle from "../styles/SectionsTitle";
import Input from "../styles/Input";
import Form from "../styles/Form";

const ThisButton = styled(Button)`
  margin-top: 1em;
`;

const FormChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 610px) {
    flex-direction: column;
  }
`;
