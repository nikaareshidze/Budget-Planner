import Input from "../../styles/input/Input";
import Title from "../../styles/fonts/Title";

export default function ExpenseInput(props: { name: string; type: string }) {
  return (
    <div>
      <Title>{props.name}</Title>
      <Input type={`${props.type}`} />
    </div>
  );
}
