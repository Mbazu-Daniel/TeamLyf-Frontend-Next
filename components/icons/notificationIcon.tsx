import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const NotificationIcon = ({
  className,
  primaryColor = "#828282",
  secondaryColor = "#D9D9D9",
}: IconProps) => {
  return (
    <svg
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 fill-none", className)}
    >
      <path
        d="M8.80078 19C9.25927 20.7252 10.8763 22 12.8008 22C14.7253 22 16.3423 20.7252 16.8008 19"
        fill={primaryColor}
      />
      <path
        d="M8.80078 19C9.25927 20.7252 10.8763 22 12.8008 22C14.7253 22 16.3423 20.7252 16.8008 19"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3307 14.7696C3.11805 16.1636 4.06878 17.1312 5.23283 17.6134C9.69559 19.4622 15.906 19.4622 20.3687 17.6134C21.5328 17.1312 22.4835 16.1636 22.2709 14.7696C22.1402 13.9129 21.494 13.1995 21.0152 12.5029C20.3881 11.5793 20.3258 10.5718 20.3257 9.5C20.3257 5.35786 16.9567 2 12.8008 2C8.64491 2 5.27591 5.35786 5.27591 9.5C5.27581 10.5718 5.2135 11.5793 4.58639 12.5029C4.10762 13.1995 3.46139 13.9129 3.3307 14.7696Z"
        fill={secondaryColor}
        stroke={secondaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
