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
  ]);

  return (
    <div className='h-full w-[720px]'>
      <Card className='relative m-auto min-h-[474px] w-[592px] pb-14'>
        <CardHeading>
        </CardHeading>
        <CardContent>
        </CardContent>
      </Card>
    </div>
  );
};
export default SignUpForm;
