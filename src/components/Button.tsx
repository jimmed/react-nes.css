import * as React from "react";
import cx from "classnames";

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  className: string;
};

export default function Button({
  children,
  primary = false,
  success = false,
  warning = false,
  error = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        "btn",
        {
          "is-primary": primary,
          "is-success": success,
          "is-warning": warning,
          "is-error": error
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
