import React from 'react';
import { ArrowBigLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CardTitle, CardDescription } from '@/components/ui/card';

interface Props {
  detail: {
    step: number;
    title: string;
    description: string;
    info: string;
  };
  isFirstStep: boolean;
  back: () => void;
}

export default function HeadingDetail({ detail, isFirstStep, back }: Props) {
  return (
    <div key={detail.step} className='space-y-4'>
      {!isFirstStep && (
        <div className='mt-8'>
          <Button
            leftIcon={<ArrowBigLeft fill='bg-[#000]' />}
            label={detail.info}
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
