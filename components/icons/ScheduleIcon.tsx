import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const ScheduleIcon = ({
  className,
  primaryColor = "#828282",
  secondaryColor = "#d9d9d9",
}: IconProps) => {
  return (
    <svg
      className={cn("w-6 h-6 fill-none", className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.25C8.41421 2.25 8.75 2.58579 8.75 3V6C8.75 6.41421 8.41421 6.75 8 6.75C7.58579 6.75 7.25 6.41421 7.25 6V3C7.25 2.58579 7.58579 2.25 8 2.25ZM16 2.25C16.4142 2.25 16.75 2.58579 16.75 3V6C16.75 6.41421 16.4142 6.75 16 6.75C15.5858 6.75 15.25 6.41421 15.25 6V3C15.25 2.58579 15.5858 2.25 16 2.25Z"
        fill={primaryColor}
      />
      <path
        d="M3 9H21V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V9Z"
        fill={secondaryColor}
      />
      <path
        d="M17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V9H21V7.5C21 5.29086 19.2091 3.5 17 3.5Z"
        fill={secondaryColor}
      />
      <path
        d="M11.9955 10H12.0045M11.9955 14H12.0045M15.991 10H16M8 10H8.00897M8 14H8.00897"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
