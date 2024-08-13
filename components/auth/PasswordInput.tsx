"use client";

import { useState } from "react";
import OpenEye from "@/public/assets/eyeopenicon.svg";
import CloseEye from "@/public/assets/eyecloseicon.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordInputProps {
  label: string;
  placeholder: string;
  register: any; // The register function from react-hook-form
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Label htmlFor="password">{label}</Label>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register("password", { required: "Please provide a password" })}
        intent="default"
        inputSize="md"
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword((prevShow) => !prevShow)}
            className="text-sm leading-5"
          >
            {showPassword ? <img src={OpenEye} className="w-5 h-5" alt="Hide password" /> : <img src={CloseEye} className="w-5 h-5" alt="Show password" />}
          </button>
        }
        error={error}
      />
    </div>
  );
};

export default PasswordInput;
