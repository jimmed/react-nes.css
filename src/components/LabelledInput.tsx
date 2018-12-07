import cx from "classnames";
import * as React from "react";

export interface LabelledInputProps {
  children: React.ReactNode;
  className: string;
}

const LabelledInput: React.SFC<LabelledInputProps & { type: "radio" | "checkbox" }> = ({
  children,
  type,
  className,
  ...props
}) => (
    <label>
      <input type={type} className={cx(type, className)} {...props} />
      <span>{children}</span>
    </label>
  );

export default LabelledInput;
