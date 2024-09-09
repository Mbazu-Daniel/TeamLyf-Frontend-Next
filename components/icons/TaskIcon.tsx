import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const TaskIcon = ({
  className,
  primaryColor = "#828282",
  secondaryColor = "#D9D9D9",
}: IconProps) => {
  return (
    <svg
      className={cn("w-6 h-6 fill-none", className)}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2.5V4.5M12 2.5V4.5M7 2.5V4.5"
        stroke="#9747FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10.5C3.5 7.20017 3.5 5.55025 4.52513 4.52513C5.55025 3.5 7.20017 3.5 10.5 3.5H13.5C16.7998 3.5 18.4497 3.5 19.4749 4.52513C20.5 5.55025 20.5 7.20017 20.5 10.5V15.5C20.5 18.7998 20.5 20.4497 19.4749 21.4749C18.4497 22.5 16.7998 22.5 13.5 22.5H10.5C7.20017 22.5 5.55025 22.5 4.52513 21.4749C3.5 20.4497 3.5 18.7998 3.5 15.5V10.5Z"
        fill={secondaryColor}
        stroke={secondaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15.5H12M8 10.5H16"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
