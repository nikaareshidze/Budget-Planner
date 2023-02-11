import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import styled from "styled-components";

//store imports
import { setBudget } from "../store/expenseSlice";
import { changeEditBudgetVisibility } from "../store/visibilitySlice";

//typescript declarations
type Inputs = {
  newBudget: number;
};

export default function EditBudgetForm() {
  const dispatch = useDispatch();

  const editBudgetVisibility = useSelector(
    (state: RootState) => state.visibility.editBudgetVisibility
  );

  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setBudget(data.newBudget));
    resetField("newBudget");
    dispatch(changeEditBudgetVisibility());
  };

  return (
    <>
      {editBudgetVisibility && (
        <ThisForm onSubmit={handleSubmit(onSubmit)}>
          <ThisFormChild>
            <Title>Please, set the new budget</Title>
            <ThisInput {...register("newBudget", { required: true })} />
            <Button>Choose</Button>
          </ThisFormChild>
        </ThisForm>
      )}
    </>
  );
}

//style imports
import Button from "../styles/Button";
import Title from "../styles/Title";
import Input from "../styles/Input";
import Form from "../styles/Form";

const ThisForm = styled(Form)`
  margin-top: 0.5em;
`;

const ThisFormChild = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;

  @media (max-width: 610px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ThisInput = styled(Input)`
  margin-top: 0;
`;
