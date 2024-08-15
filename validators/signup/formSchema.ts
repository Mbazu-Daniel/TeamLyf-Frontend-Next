import * as z from 'zod';
import { PASSWORD_REGEX } from '@/enum';

export const formSchema = z
  .object({
    country: z.string().min(2, { message: 'Please select your location' }),
    email: z.string().email(),
    businessName: z
      .string()
      .min(3, { message: 'Business name must be 3 character length or above' }),
    password: z
      .string()
      .regex(PASSWORD_REGEX.FULL, {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and atleast 8 character',
      })
      .min(8),
    confirmPassword: z.string().min(8, { message: 'Please re-type your password' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: 'custom',
        message: 'Passwords do not match',
      });
    }
  });
