import * as React from "react";
import cx from "classnames";

export type TextInputProps = {
  label: string;
  name: string;
  type: string;
  inline: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  className: string;
};

export default function TextInput({
  label,
  name,
  type = "text",
  inline = false,
  success = false,
  warning = false,
  error = false,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className={cx("field", { "is-inline": inline })}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        className={cx(
          "input",
          {
            "is-success": success,
            "is-warning": warning,
            "is-error": error
          },
          className
        )}
        {...props}
      />
    </div>
  );
}
