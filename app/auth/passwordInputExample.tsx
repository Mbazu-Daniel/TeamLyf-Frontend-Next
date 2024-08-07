import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Logger from "@/utils/logger";
import { PASSWORD_REGEX } from "@/enum";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordPopover from "@/components/shared/PasswordPopover";

const signupSchemma = z
  .object({
    password: z.string().regex(PASSWORD_REGEX.FULL, {
      message: "Please match requirements",
    }),
    confirmPassword: z
      .string()
      .min(2, { message: "Please re-type your password" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Passwords do not match",
      });
    }
  });

type SignupFormFields = z.infer<typeof signupSchemma>;

export default function SignupForm() {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const signupForm = useForm<SignupFormFields>({
    resolver: zodResolver(signupSchemma),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormFields) => {
    Logger.info("data", data);
  };

  return (
    <Form {...signupForm}>
      <form onSubmit={signupForm.handleSubmit(onSubmit)} className="space-y-6">
        {/* Password field */}
        <FormField
          control={signupForm.control}
          name="password"
          render={({ field, fieldState }) => {
            const { onBlur, ...restFields } = field;
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your password"
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => {
                      onBlur();
                      setIsPasswordFocused(false);
                    }}
                    {...restFields}
                  />
                </FormControl>
                {(!!fieldState.error?.message || isPasswordFocused) && (
                  <PasswordPopover password={field.value} />
                )}
              </FormItem>
            );
          }}
        />

        {/* Confirm password field */}
        <FormField
          control={signupForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Confirm your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button
          type="submit"
          isLoading={signupForm.formState.isSubmitting}
          spinnerColor="currentColor"
          label={signupForm.formState.isSubmitting ? "" : "Sign up"}
          className="w-full"
        />
      </form>
    </Form>
  );
}
