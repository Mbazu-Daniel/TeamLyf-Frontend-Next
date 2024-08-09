'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { useMutistepForm } from '@/constants/useMultiStepForm';
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
import { CardHeading } from './CardHeading';
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

type InputValidation = z.infer<typeof formSchema>;

const SignUpForm = () => {
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
        render={function ({ field }) {
          return (
            <FormItem key={field.name}>
              <FormControl>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter password'
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    form.trigger('password');
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        key={3}
        name='confirmPassword'
        control={form.control}
        render={function ({ field }) {
          return (
            <div className='space-y-2'>
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Re-type your password'
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      form.trigger('confirmPassword');
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              <div className='flex items-center space-x-2'>
                <Checkbox id='password' onCheckedChange={() => setShowPassword((prev) => !prev)} />
                <label
                  htmlFor='password'
                  className='cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Show password
                </label>
              </div>
            </div>
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
                  <SelectValue placeholder='e.g Nigeria' />
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // ╭─────────────────────────────────────────────────────────╮
    <div className='h-full w-[720px]'>
      <Card className='relative m-auto min-h-[474px] w-[592px] pb-14'>
        <CardHeading>
        </CardHeading>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-9'>
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
