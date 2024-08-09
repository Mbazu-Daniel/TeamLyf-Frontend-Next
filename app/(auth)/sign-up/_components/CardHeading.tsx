import React from 'react';
import Image from 'next/image';

import { CardHeader } from '@/components/ui/card';
type Props = {
  children?: React.ReactNode;
};

export const CardHeading = ({ children }: Props) => {
  return (
    <CardHeader>
      <Image src='/assets/lyfBlueLogo.svg' alt='Teamlyf Logo' width={180} height={34} />
      {children}
    </CardHeader>
  );
};
