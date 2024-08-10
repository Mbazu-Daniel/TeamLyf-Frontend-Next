'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { useMutistepForm } from '@/hooks/useMultiStepForm';
import { formSchema } from '@/validators/signup/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { countryOptions, FormDetails } from '@/constants/signup-form';
import { Input } from '@/components/ui/input';
import { CustomLogo as CardHeading } from '../../../../components/shared/CustomLogo';
import HeadingDetail from './HeadingDetail';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/ui/select';
import { PasswordInput } from '@/components/ui/password-input';
import PasswordPopover from '@/components/shared/PasswordPopover';

type InputValidation = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      businessName: '',
      country: '',
    },
  });
  // ╭─────────────────────────────────────────────────────────╮
  // │ TODO: create a customField that will be reusable        │
  // ╰─────────────────────────────────────────────────────────╯
  const { isFirstStep, isLastStep, step, next, back, currentStepIndex } = useMutistepForm([
    <FormField
      key={1}
      name='email'
      control={form.control}
      render={function ({ field }) {
        return (
          <FormItem key={field.name}>
            <FormControl>
              <Input placeholder='johndoe@gmail.com' {...field} />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Already have an account?{' '}
              <Link href='/login' className='text-purple-700'>
                Login
              </Link>
            </FormDescription>
          </FormItem>
        );
      }}
    />,
    <>
      <FormField
        key={2}
        name='password'
        control={form.control}
        render={function ({ field, fieldState }) {
          const { onBlur, ...restFields } = field;
          return (
            <FormItem key={field.name}>
              <FormControl>
                <PasswordInput
                  placeholder='Enter your password'
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
      <FormField
        key={3}
        name='confirmPassword'
        control={form.control}
        render={function ({ field }) {
          const { onBlur, ...restFields } = field;
          return (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder='Confirm your password'
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => {
                    onBlur();
                    setIsPasswordFocused(false);
                  }}
                  {...restFields}
                  onChange={(e) => {
                    field.onChange(e);
                    form.trigger(field.name);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>,

    <FormField
      key={4}
      name='businessName'
      control={form.control}
      render={function ({ field }) {
        return (
          <FormItem>
            <FormControl>
              <Input type='text' placeholder='Business name' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />,

    <FormField
      key={5}
      name='country'
      control={form.control}
      render={function ({ field }) {
        return (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Select your location' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countrys</SelectLabel>
                  <SelectSeparator />
                  {countryOptions.map((country, idx) => {
                    return (
                      <SelectItem key={idx} value={country.label}>
                        {country.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />,
  ]);

  // const handleNextStep = () => {
  //   if (Array.isArray(step.props.children)) {
  //     form.trigger(
  //       step?.props?.children?.map((field: any) => field.props.name),
  //       { shouldFocus: true }
  //     );
  //   } else {
  //     form.trigger([step?.props?.name], {
  //       shouldFocus: true,
  //     });
  //   }
  //   const fieldState = form.getFieldState(
  //     step.props.name || (step.props.children[0].props.name && step.props.children[1].props.name)
  //   );
  //   console.log(fieldState);
  //   if (!fieldState.isDirty || fieldState.error) return;
  //   next();
  // };

  const handleNextStep = () => {
    const currentStepFields = Array.isArray(step.props.children)
      ? step.props.children.map((child: any) => child.props.name)
      : [step.props.name];

    form.trigger(currentStepFields).then((result) => {
      if (result) {
        next();
      } else {
        console.log('Validation errors:', form.formState.errors);
      }
    });
  };

  const onSubmit = (values: InputValidation) => {
    try {
      console.log(values);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // ╭─────────────────────────────────────────────────────────╮
    // │ TODO: turn this Card to compound component              │
    // ╰─────────────────────────────────────────────────────────╯
    <div className='w-[720px]'>
      <Card className='relative m-auto min-h-[474px] w-[592px] pb-14'>
        <CardHeading width={180} height={34}>
          {FormDetails.map((detail) => {
            if (detail.step === currentStepIndex) {
              return (
                <HeadingDetail
                  detail={detail}
                  isFirstStep={isFirstStep}
                  back={back}
                  key={detail.step}
                />
              );
            }
            return null;
          })}
        </CardHeading>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              {step}
              <div className='absolute bottom-8 right-6 flex justify-end'>
                {isLastStep ? (
                  <Button
                    label={'SignUp'}
                    type='submit'
                    isLoading={form.formState.isLoading}
                    disabled={form.formState.isSubmitting}
                    intent='secondary'
                    className='bg-purple-300'
                  />
                ) : (
                  <Button
                    label='Next'
                    type='button'
                    onClick={handleNextStep}
                    intent='secondary'
                    className='bg-purple-300 text-white hover:bg-purple-500 focus-visible:bg-[none]'
                  />
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
export default SignUpForm;
