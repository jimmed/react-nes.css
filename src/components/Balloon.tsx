import * as React from "react";
import cx from "classnames";

export type BalloonProps = {
  children: React.ReactNode;
  className: string;
  fromLeft: boolean;
  fromRight: boolean;
};

export default function Balloon({
  children,
  fromLeft = false,
  fromRight = false,
  className,
  ...props
}: BalloonProps) {
  return (
    <div
      className={cx(
        "balloon",
        {
          "from-left": fromLeft,
          "from-right": fromRight
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
