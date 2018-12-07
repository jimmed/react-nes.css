import cx from "classnames";
import * as React from "react";

export type IconName =
  | "close"
  | "facebook"
  | "github"
  | "heart"
  | "like"
  | "star"
  | "twitter";

export interface IconProps {
  name: IconName;
  className: string;
  medium: boolean;
  large: boolean;
}

const Icon: React.SFC<IconProps> = ({
  name,
  className,
  medium = false,
  large = false,
  ...props
}) => (
    <i
      className={cx(
        "icon",
        name,
        { "is-medium": medium, "is-large": large },
        className,
      )}
      {...props}
    />
  );

export default Icon;
