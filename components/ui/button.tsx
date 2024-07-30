import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  ComponentProps,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-5 h-10 rounded-md text-white font-medium leading-[1.2em] disabled:cursor-not-allowed transition-all duration-100 ease-in",
  {
    variants: {
      intent: {
        primary:
          "bg-primary border border-solid border-primary hover:bg-transparent hover:text-primary focus-visible:text-primary focus-visible:bg-transparent focus-visible:outline-none",
        secondary:
          "bg-secondary border text-primary hover:bg-transparent focus-visible:bg-transparent focus-visible:outline-none focus-visible-ring",
        transparent:
          "bg-transparent text-primary transition-[width] after:absolute after:bottom-0 after:w-full after:h-[2px] after:bg-current hover:after:w-0 focus-visible:outline-none focus-visible-ring",
        outline:
          "bg-transparent text-primary border border-input-border focus-visible:outline-none focus-visible-ring",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-2.5",
        lg: "text-lg px-9 py-3",
        none: "px-0 py-0 h-fit text-sm",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

interface ButtonVariants
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}

interface ButtonProps extends ButtonVariants {
  className?: ComponentProps<"div">["className"];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerColor?: string;
  label: any;
  spinnerSize?: string | number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading,
      disabled,
      leftIcon,
      rightIcon,
      spinnerColor,
      spinnerSize,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const classNames = cn(buttonVariants(props), className);

    return (
      <button
        type="button"
        disabled={(isLoading ?? disabled) || disabled}
        className={classNames}
        ref={ref}
        {...props}
      >
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
          <svg
            width={spinnerSize ?? "20"}
            height={spinnerSize ?? "20"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "animate-spin transition",
              isLoading ? "opacity-1 visible" : "hidden opacity-0"
            )}
          >
            <path
              fill={spinnerColor ?? "#fff"}
              d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
            />
          </svg>
        </div>
        <p
          className={cn(
            "flex items-center justify-center gap-2",
            isLoading ? "opacity-90" : "opacity-1"
          )}
        >
          {leftIcon}
          {label}
          {rightIcon && (
            <span
              style={{
                opacity: isLoading ? 0 : 1,
              }}
            >
              {rightIcon}
            </span>
          )}
        </p>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
