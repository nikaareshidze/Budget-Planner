import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { addBudget } from "../store/expenseSlice";
import Form from "../styles/Form";
import Input from "../styles/Input";
import SectionTitle from "../styles/SectionsTitle";
import Title from "../styles/Title";

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
      <SectionTitle>Help From Elon</SectionTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Title>Product Cost</Title>
          <Input
            type="number"
            {...register("money", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>

        <button>Thanks!</button>
      </Form>
    </div>
  );
}
