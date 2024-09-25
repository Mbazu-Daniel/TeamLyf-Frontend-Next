import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const LogOutIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={cn("w-6 h-6 fill-none", className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        fill="#FA4B4B"
        fillOpacity="0.2"
      />
      <path
        d="M3.36091 3.36091L3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68803C1.74998 8.03144 1.74999 9.75212 1.75 11.9428L1.75 12L1.75 12.0572C1.74999 14.2479 1.74998 15.9685 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.3609 20.6391L3.36092 20.6391C4.21912 21.4973 5.31137 21.8843 6.68803 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12H12.0572C14.2479 22.25 15.9685 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6392L20.6392 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9685 22.25 14.2479 22.25 12.0572V12V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68803C21.8843 5.31137 21.4973 4.21912 20.6391 3.36092L20.6391 3.3609C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9685 1.74998 14.2479 1.74999 12.0572 1.75L12 1.75L11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091Z"
        stroke="#FA4B4B"
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <path
        d="M16 12H8M16 12C16 11.2998 14.0057 9.99153 13.5 9.5M16 12C16 12.7002 14.0057 14.0085 13.5 14.5"
        stroke="#FA4B4B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
