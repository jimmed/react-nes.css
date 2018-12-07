import cx from "classnames";
import * as React from "react";

export interface OctocatProps {
  className: string;
  animate: boolean;
}

const Octocat: React.SFC<OctocatProps> = ({
  className,
  animate = false,
  ...props
}) => (
    <i className={cx("octocat", { animate }, className)} {...props} />
  );

export default Octocat;
