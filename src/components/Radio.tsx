import LabelledInput, { LabelledInputProps } from "./LabelledInput";

export type RadioProps = LabelledInputProps;

export default function Radio(props: RadioProps) {
  return LabelledInput({ ...props, type: "radio" });
}
