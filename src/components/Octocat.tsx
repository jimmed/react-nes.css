import * as React from "react";
import cx from "classnames";

export type OctocatProps = {
  className: string;
  animate: boolean;
};

export default function Octocat({
  className,
  animate = false,
  ...props
}: OctocatProps) {
  return <i className={cx("octocat", { animate }, className)} {...props} />;
}
