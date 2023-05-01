import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { addBudget } from "../store/expenseSlice";
import Form from "../styles/Form";
import Input from "../styles/Input";
import Title from "../styles/Title";
import Button from "../styles/Button";
import SectionTitle from "../styles/SectionTitle";

type Inputs = {
  money: number;
};

export default function AddBudget() {
  const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addBudget(data.money));
    resetField("money");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "16px" }}>
          <SectionTitle>Help From Elon Musk</SectionTitle>
        </div>

        <div>
          <Title>How much do you need?</Title>
          <Input
            type="number"
            {...register("money", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>

        <div style={{ marginTop: "8px" }}>
          <Button>Thanks!</Button>
        </div>
      </Form>
    </div>
  );
}
