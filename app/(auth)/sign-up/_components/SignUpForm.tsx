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

