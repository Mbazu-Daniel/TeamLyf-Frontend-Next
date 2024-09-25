import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const ChartIcon = ({
  className,
  primaryColor = "#828282",
  secondaryColor = "#d9d9d9",
}: IconProps) => {
  return (
    <svg
      className={cn("w-6 h-6 fill-none", className)}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09881 19.3496C4.7987 19.2217 3.82475 18.8312 3.17157 18.178C2 17.0065 2 15.1208 2 11.3496V10.8496C2 7.07837 2 5.19276 3.17157 4.02118C4.34315 2.84961 6.22876 2.84961 10 2.84961H14C17.7712 2.84961 19.6569 2.84961 20.8284 4.02118C22 5.19276 22 7.07837 22 10.8496V11.3496C22 15.1208 22 17.0065 20.8284 18.178C19.6569 19.3496 17.7712 19.3496 14 19.3496C13.4395 19.3621 12.9931 19.4047 12.5546 19.5046C11.3562 19.7805 10.2465 20.3937 9.14987 20.9285C7.58729 21.6904 6.806 22.0714 6.31569 21.7147C5.37769 21.0161 6.29454 18.8515 6.5 17.8496"
        fill={secondaryColor}
      />
      <path
        d="M6.09881 19.3496C4.7987 19.2217 3.82475 18.8312 3.17157 18.178C2 17.0065 2 15.1208 2 11.3496V10.8496C2 7.07837 2 5.19276 3.17157 4.02118C4.34315 2.84961 6.22876 2.84961 10 2.84961H14C17.7712 2.84961 19.6569 2.84961 20.8284 4.02118C22 5.19276 22 7.07837 22 10.8496V11.3496C22 15.1208 22 17.0065 20.8284 18.178C19.6569 19.3496 17.7712 19.3496 14 19.3496C13.4395 19.3621 12.9931 19.4047 12.5546 19.5046C11.3562 19.7805 10.2465 20.3937 9.14987 20.9285C7.58729 21.6904 6.806 22.0714 6.31569 21.7147C5.37769 21.0161 6.29454 18.8515 6.5 17.8496"
        stroke={secondaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 13.8496H16M8 8.84961H12"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
