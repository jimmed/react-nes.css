import cx from "classnames";
import * as React from "react";

export interface BalloonProps {
  children: React.ReactNode;
  className: string;
  fromLeft: boolean;
  fromRight: boolean;
}


const Balloon: React.SFC<BalloonProps> = ({
  children,
  fromLeft = false,
  fromRight = false,
  className,
  ...props
}) => (
    <div
      className={cx(
        "balloon",
        {
          "from-left": fromLeft,
          "from-right": fromRight,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );

export default Balloon;
