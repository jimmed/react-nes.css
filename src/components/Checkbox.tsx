import LabelledInput, { LabelledInputProps } from "./LabelledInput";

export type CheckboxProps = LabelledInputProps;

export default function Checkbox(props: CheckboxProps) {
  return LabelledInput({ ...props, type: "checkbox" });
}
