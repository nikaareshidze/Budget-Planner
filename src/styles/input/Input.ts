import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 16em;
  height: 2em;
`;

export default Input;
