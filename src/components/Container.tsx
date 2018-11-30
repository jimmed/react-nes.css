import * as React from "react";
import cx from "classnames";

export type ContainerProps = {
  children: React.ReactNode;
  title: string;
  center: boolean;
  dark: boolean;
  rounded: boolean;
  className: string;
};

export default function Container({
  children,
  title,
  center = false,
  dark = false,
  rounded = false,
  className,
  ...props
}: ContainerProps) {
  const hasTitle = title != null;
  return (
    <section
      className={cx(
        "container",
        {
          "with-title": hasTitle,
          "is-center": center,
          "is-dark": dark,
          "is-rounded": rounded
        },
        className
      )}
      {...props}
    >
      {hasTitle && <p className="title">{title}</p>}
      {children}
    </section>
  );
}
