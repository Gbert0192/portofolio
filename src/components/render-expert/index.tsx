import { cn } from "@/lib/utils";
import React, { FC } from "react";

type Props = {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  label: string;
  className?: string;
};
const RenderExpert: FC<Props> = ({ Icon, label, className }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <Icon className={cn("w-20 h-20", className)} />
        <span className="text-[15px] font-semibold">{label}</span>
      </div>
    </>
  );
};

export default RenderExpert;
