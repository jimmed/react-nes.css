import cx from "classnames";
import * as React from "react";

export interface CheckboxProps {
  children: React.ReactNode;
  title: string;
  center: boolean;
  dark: boolean;
  rounded: boolean;
  className: string;
}

const Checkbox: React.SFC<CheckboxProps> = ({
  children,
  title,
  center = false,
  dark = false,
  rounded = false,
  className,
  ...props
}) => {
  const hasTitle = title != null;
  return (
    <section
      className={cx(
        "container",
        {
          "is-center": center,
          "is-dark": dark,
          "is-rounded": rounded,
          "with-title": hasTitle,
        },
        className,
      )}
      {...props}
    >
      {hasTitle && <p className="title">{title}</p>}
      {children}
    </section>
  );
};

export default Checkbox;
