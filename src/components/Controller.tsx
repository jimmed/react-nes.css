import * as React from "react";

export interface ControllerProps {
  className: string;
}

const Controller: React.SFC<ControllerProps> = ({ className, ...props }) => (<i className="nes-logo" {...props} />);

export default Controller;

