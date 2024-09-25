import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const DashboardIcon = ({
  className,
  primaryColor = "#828282",
  secondaryColor = "#D9D9D9",
}: IconProps) => {
  return (
    <svg
      className={cn("w-6 h-6 fill-none", className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.50195 3.50146C1.50195 2.39689 2.39738 1.50146 3.50195 1.50146H8.42529C9.52986 1.50146 10.4253 2.3969 10.4253 3.50146V8.4248C10.4253 9.52937 9.52986 10.4248 8.42529 10.4248H3.50195C2.39738 10.4248 1.50195 9.52937 1.50195 8.4248V3.50146Z"
        fill={primaryColor}
      />
      <circle cx="17.8874" cy="5.96313" r="4.46166" fill={secondaryColor} />
      <circle cx="5.96362" cy="17.8865" r="4.46166" fill={secondaryColor} />
      <path
        d="M13.4258 15.4248C13.4258 14.3202 14.3212 13.4248 15.4258 13.4248H20.3491C21.4537 13.4248 22.3491 14.3202 22.3491 15.4248V20.3481C22.3491 21.4527 21.4537 22.3481 20.3491 22.3481H15.4258C14.3212 22.3481 13.4258 21.4527 13.4258 20.3481V15.4248Z"
        fill={primaryColor}
      />
    </svg>
  );
};
