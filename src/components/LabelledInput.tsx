import * as React from "react";
import cx from "classnames";

export type LabelledInputProps = {
  children: React.ReactNode;
  className: string;
};

export default function LabelledInput({
  children,
  type,
  className,
  ...props
}: LabelledInputProps & {
  type: "radio" | "checkbox";
}) {
  return (
    <label>
      <input type={type} className={cx(type, className)} {...props} />
      <span>{children}</span>
    </label>
  );
}
