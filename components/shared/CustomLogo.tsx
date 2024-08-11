import React from 'react';
import Image from 'next/image';

import { CardHeader } from '@/components/ui/card';
import Link from 'next/link';
type Props = {
  children?: React.ReactNode;
  className?: string;
  width: number;
  height: number;
};

export const CustomLogo = ({ children, className, width, height }: Props) => {
  return (
    <CardHeader className={className}>
      <Link href='/' className='w-fit'>
        <Image src='/assets/lyfBlueLogo.svg' alt='Teamlyf Logo' width={width} height={height} />
      </Link>
      {children}
    </CardHeader>
  );
};
