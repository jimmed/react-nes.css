import cx from "classnames";
import * as React from "react";

export interface TextInputProps {
  label: string;
  name: string;
  type: string;
  inline: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  className: string;
}


const TextInput: React.SFC<TextInputProps> = ({
  label,
  name,
  type = "text",
  inline = false,
  success = false,
  warning = false,
  error = false,
  className,
  ...props
}) => (
    <div className={cx("field", { "is-inline": inline })}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        className={cx(
          "input",
          {
            "is-error": error,
            "is-success": success,
            "is-warning": warning,
          },
          className,
        )}
        {...props}
      />
    </div>
  );

export default TextInput;
