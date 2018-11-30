import * as React from "react";

export type ControllerProps = {
  className: string;
};

export default function Controller({ className, ...props }: ControllerProps) {
  return <i className="nes-logo" {...props} />;
}
