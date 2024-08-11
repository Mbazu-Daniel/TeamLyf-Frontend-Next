import React from 'react';
import { ArrowBigLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  detail: {
    step: number;
    title: string;
    description: string;
    info: string;
  };
  isFirstStep: boolean;
  back: () => void;
  watch: UseFormReturn['watch'];
}

export default function HeadingDetail({ detail, isFirstStep, back, watch }: Props) {
  const email = watch('email', 'johndoe@gmail.com');
  const businessName = watch('businessName', 'daniel & co');
  return (
    <div key={detail.step} className='space-y-4'>
      {!isFirstStep && (
        <div className='mt-8'>
          <Button
            leftIcon={<ArrowBigLeft fill='bg-[#000]' />}
            label={
              detail.info === 'email'
                ? email
                : detail.info === 'businessName'
                  ? businessName
                  : detail.info
            }
            intent='transparent'
            className='pl-[unset] text-sm text-muted-foreground after:w-0'
            onClick={() => back()}
          />
        </div>
      )}
      <CardTitle className={cn('text-2xl font-bold', isFirstStep && 'mt-14')}>
        {detail.title}
      </CardTitle>
      <CardDescription className='text-sm text-muted-foreground'>
        {detail.description}
      </CardDescription>
    </div>
  );
}
