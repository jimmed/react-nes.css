import cx from "classnames";
import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  primary: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  className: string;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  primary = false,
  success = false,
  warning = false,
  error = false,
  className,
  ...props
}) => (
  <button
    className={cx(
      "btn",
      {
        "is-error": error,
        "is-primary": primary,
        "is-success": success,
        "is-warning": warning,
      },
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
