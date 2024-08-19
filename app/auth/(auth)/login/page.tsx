'use client';

import Link from 'next/link';
import * as z from 'zod';
import Logger from "@/utils/logger";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';


import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password-input';
import PasswordPopover from '@/components/shared/PasswordPopover'; 
import BaseAuthentication from '@/components/auth/BaseAuthentication';
import LeftFormCard from '@/components/auth/LeftFormCard';
import { CustomLogo } from '@/components/shared/CustomLogo';

const LoginPage: React.FC = () => {
  const router = useRouter();

  const loginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = (data) => {
    Logger.info("Login Data:", data);
    router.push('/');
  };

  return (
    <div className="m-auto flex h-screen w-screen max-w-screen-2xl items-center">
      <LeftFormCard
        className='w-[720px]'
        title='Productivity at its peak'
        message="Where productivity meets collaboration at its peak. Elevate your work experience as Teamlyf seamlessly integrates tools and streamlines communication right at the core of your team's success."
      />
      <div className="w-[45rem]">
        <Card className="mx-auto min-h-[474px] w-[592px] space-y-8">
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Login</CardTitle>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              Securely login to <CustomLogo width={72} height={14} />
            </div>
          </CardHeader>
            
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                  name='email'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem key={field.name}>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder='johndoe@gmail.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name='password'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FormItem key={field.name}>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Enter your password"
                        />
                      </FormControl>
                      {(fieldState.error?.message) && (
                        <PasswordPopover password={field.value} />
                      )}
                    </FormItem>
                  )}
                />

                <div className='mt-4 flex justify-end'>
                  <Button
                    label={'Login'}
                    type='submit'
                    isLoading={form.formState.isSubmitting}
                    disabled={form.formState.isSubmitting}
                    intent='secondary'
                    className='bg-purple-300 text-white transition hover:-translate-y-[3px] hover:bg-purple-500 focus-visible:bg-[none] active:-translate-y-[1px]'
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>

          <CardFooter className='mt-auto flex-col items-stretch space-y-4'>
            <Separator />
            <BaseAuthentication />
            <div className='flex justify-center gap-2 text-sm text-muted-foreground'>
              Don't have an account?
              <Link href='/auth/register' className='text-purple-700'>
                Sign Up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
