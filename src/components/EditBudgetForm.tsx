import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import { setBudget } from "../store/expenseSlice";
import { changeEditBudgetVisibility } from "../store/visibilitySlice";

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

import Button from "../styles/buttons/Button";
import Title from "../styles/fonts/Title";

const formStyle: {} = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
};

const inputStyle = {
  width: "15rem",
  height: "2rem",
};
