import * as React from "react";
import cx from "classnames";

export type IconName =
  | "close"
  | "facebook"
  | "github"
  | "heart"
  | "like"
  | "star"
  | "twitter";

export type IconProps = {
  name: IconName;
  className: string;
  medium: boolean;
  large: boolean;
};

export default function Icon({
  name,
  className,
  medium = false,
  large = false,
  ...props
}: IconProps) {
  return (
    <i
      className={cx(
        "icon",
        name,
        { "is-medium": medium, "is-large": large },
        className
      )}
      {...props}
    />
  );
}
