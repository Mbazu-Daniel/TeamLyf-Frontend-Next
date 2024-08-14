'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formSchema } from '@/validators/signup/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CustomLogo } from '@/components/shared/CustomLogo';
import { useState } from 'react';
import { PasswordInput } from '@/components/ui/password-input';
import PasswordPopover from '@/components/shared/PasswordPopover';
import BaseAuthentication from '@/components/auth/BaseAuthentication';
import { Separator } from '@/components/ui/separator';

type InputValidation = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const router = useRouter();
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

  const onSubmit = (values: InputValidation) => {
    try {
      console.log(values);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-[720px]'>
      <Card className='mx-auto min-h-[474px] w-[592px] space-y-4'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Create Account</CardTitle>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            Sign up with <CustomLogo width={72} height={14} />
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                name='email'
                control={form.control}
                render={function ({ field }) {
                  return (
                    <FormItem key={field.name}>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder='johndoe@gmail.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                name='password'
                control={form.control}
                render={function ({ field, fieldState }) {
                  const { onBlur, ...restFields } = field;
                  return (
                    <FormItem key={field.name}>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          className='bg-background px-3 py-2 text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-300 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
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

              <div className='mt-4 flex justify-end'>
                <Button
                  label={'SignUp'}
                  type='submit'
                  isLoading={form.formState.isLoading}
                  disabled={form.formState.isSubmitting}
                  intent='secondary'
                  className='bg-purple-300 text-white transition hover:-translate-y-[3px] hover:bg-purple-500 focus-visible:bg-[none] active:-translate-y-[1px]'
                />
              </div>
            </form>
          </Form>
        </CardContent>

        <CardFooter className='mt-auto flex-col items-stretch space-y-4'>
          <Separator />
          <BaseAuthentication />
          <div className='flex justify-center gap-2 text-sm text-muted-foreground'>
            Already have an account?
            <Link href='/auth/login' className='text-purple-700'>
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default SignUpForm;
