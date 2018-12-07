import LabelledInput, { LabelledInputProps } from "./LabelledInput";

export type CheckboxProps = LabelledInputProps;

const Checkbox: React.SFC<CheckboxProps> = (props) => (
  LabelledInput({ ...props, type: "checkbox" })
);

export default Checkbox;
