'use client';
/* eslint-disable react/no-unknown-property */
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

const inputVariants = cva(
  'relative px-3.5 py-2.5 flex items-center justify-center gap-2 !focus:border-0 rounded-lg transition-all select-none shadow-xs focus-within-ring bg-background px-3 py-2 text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-300 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      intent: {
        default: 'border-solid border border-input-border !focus:border-none text-black bg-white',
      },
      inputSize: {
        sm: 'text-sm py-2',
        md: 'text-base py-3',
        lg: 'text-lg py-4',
      },
    },
    defaultVariants: {
      intent: 'default',
      inputSize: 'sm',
    },
  }
);

export interface InputVariants
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

interface TextInputProps extends InputVariants {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeHolder?: string;
  isPasswordVisible?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      leftIcon,
      rightIcon,
      type,
      isLoading,
      disabled,
      onChange,
      placeHolder,
      intent,
      inputSize,
      ...props
    },
    ref
  ) => {
    const classNames = cn(
      inputVariants({ intent, inputSize }),
      className,
      disabled || isLoading ? 'opacity-[.8] cursor-not-allowed' : ''
    );

    return (
      <div className={classNames}>
        {leftIcon && leftIcon}
        <input
          onChange={onChange}
          type={type}
          className={cn(
            'hide-caret placeholder:text-placeholder w-full bg-transparent outline-none',
            (disabled ?? isLoading) ? 'cursor-not-allowed' : ''
          )}
          placeholder={placeHolder ?? 'Placeholder'}
          disabled={isLoading ?? disabled}
          ref={ref}
          {...props}
        />
        <style jsx>
          {`
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              -webkit-background-clip: text;
              -webkit-text-fill-color: #000;
              transition: background-color 5000s ease-in-out 0s;
              box-shadow: inset 0 0 20px 20px #fff;
            }
          `}
        </style>
        {rightIcon && rightIcon}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, type TextInputProps };
