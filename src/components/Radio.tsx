import LabelledInput, { LabelledInputProps } from "./LabelledInput";

export type RadioProps = LabelledInputProps;

const Radio: React.SFC<RadioProps> = (props) => (LabelledInput({ ...props, type: "radio" }));

export default Radio;
