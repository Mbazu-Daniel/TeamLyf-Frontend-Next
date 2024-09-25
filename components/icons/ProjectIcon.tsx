import { cn } from "@/lib/utils";
import { IconProps } from "@/types";

export const ProjectIcon = ({
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
        d="M16 6.34961L15.9117 6.04055C15.4717 4.5005 15.2517 3.73048 14.7279 3.29004C14.2041 2.84961 13.5084 2.84961 12.117 2.84961H11.883C10.4916 2.84961 9.79587 2.84961 9.2721 3.29004C8.74832 3.73048 8.52832 4.5005 8.0883 6.04055L8 6.34961"
        fill={primaryColor}
      />
      <path
        d="M3 11.3496L3.15288 14.2129C3.31714 17.8266 3.39927 19.6335 4.55885 20.7415C5.71843 21.8496 7.52716 21.8496 11.1446 21.8496H12.8554C16.4728 21.8496 18.2816 21.8496 19.4412 20.7415C20.6007 19.6335 20.6829 17.8266 20.8471 14.2129L21 11.3496"
        fill={secondaryColor}
      />
      <path
        d="M3 11.3496L3.15288 14.2129C3.31714 17.8266 3.39927 19.6335 4.55885 20.7415C5.71843 21.8496 7.52716 21.8496 11.1446 21.8496H12.8554C16.4728 21.8496 18.2816 21.8496 19.4412 20.7415C20.6007 19.6335 20.6829 17.8266 20.8471 14.2129L21 11.3496"
        stroke={secondaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.84718 10.7927C4.54648 14.024 8.3792 15.3496 12 15.3496C15.6208 15.3496 19.4535 14.024 21.1528 10.7927C21.964 9.25017 21.3498 6.34961 19.352 6.34961H4.648C2.65023 6.34961 2.03603 9.25017 2.84718 10.7927Z"
        fill={secondaryColor}
        stroke={secondaryColor}
        strokeWidth="1.5"
      />
      <path
        d="M12 15.3496V16.8496"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
