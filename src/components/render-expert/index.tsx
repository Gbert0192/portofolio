import React, { FC } from "react";

type Props = {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};
const RenderExpert: FC<Props> = ({ Icon }) => {
  return <Icon className="w-20 h-20 " />;
};

export default RenderExpert;
