import { PASSWORD_REGEX } from "@/enum";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";

interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

function PasswordRequirement({ meets, label }: PasswordRequirementProps) {
  return (
    <p className="flex items-center gap-x-2 text-sm">
      {meets ? (
        <FaRegCircleCheck className="text-primary" />
      ) : (
        <FiAlertCircle className="text-destructive" />
      )}{" "}
      <span>{label}</span>
    </p>
  );
}

interface PasswordPopoverProps {
  password: string;
}

interface Requirement {
  regEx: RegExp;
  label: string;
  meets: boolean;
}

const PasswordPopover: React.FC<PasswordPopoverProps> = ({ password }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([
    {
      regEx: PASSWORD_REGEX.LENGTH,
      label: "Minimum of 8 characters",
      meets: false,
    },
    {
      regEx: PASSWORD_REGEX.UPPERCASE,
      label: "Uppercase letter",
      meets: false,
    },
    {
      regEx: PASSWORD_REGEX.LOWERCASE,
      label: "Lowercase letter",
      meets: false,
    },
    { regEx: PASSWORD_REGEX.NUMBER, label: "Number", meets: false },
    {
      regEx: PASSWORD_REGEX.SYMBOL,
      label: "Includes special symbol",
      meets: false,
    },
  ]);

  useEffect(() => {
    setRequirements((prev) =>
      prev.map((requirement) => ({
        ...requirement,
        meets: requirement.regEx.test(password),
      }))
    );
  }, [password]);

  if (requirements.every((requirement) => requirement.meets)) return null;

  return (
    <div className="space-y-1 pt-1">
      {requirements.map((requirement) => (
        <PasswordRequirement
          key={requirement.label}
          label={requirement.label}
          meets={requirement.regEx.test(password)}
        />
      ))}
    </div>
  );
};

export default PasswordPopover;
