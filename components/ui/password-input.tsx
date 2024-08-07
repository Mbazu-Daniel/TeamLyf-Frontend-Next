"use client";
import { forwardRef, useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { Input, type TextInputProps } from "./input";

const PasswordInput = forwardRef<
  HTMLInputElement,
  Omit<TextInputProps, "type" | "rightIcon">
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Input
      ref={ref}
      type={showPassword ? "text" : "password"}
      rightIcon={
        <button
          type="button"
          className="p-0.5"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <PiEyeLight className="stroke-clr-text stroke-[1.33] text-base" />
          ) : (
            <PiEyeSlash className="stroke-clr-text stroke-[1.33] text-base" />
          )}
        </button>
      }
      {...props}
    />
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
