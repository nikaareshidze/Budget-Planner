import GreetingContainer from "../styles/greeting/GreetingContainer";
import GreetingDescription from "../styles/greeting/GreetingDescription";
import GreetingTitle from "../styles/greeting/GreetingTitle";

export default function Greeting() {
  return (
    <GreetingContainer>
      <GreetingTitle>Welcome back, Nika!</GreetingTitle>
      {/* <GreetingDescription>Good to see you again, Nika</GreetingDescription> */}
    </GreetingContainer>
  );
}
