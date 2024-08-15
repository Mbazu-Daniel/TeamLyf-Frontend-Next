import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
type Props = {
  className?: string;
  width: number;
  height: number;
};

export const CustomLogo = ({ className, width, height }: Props) => {
  return (
    <div className={className}>
      <Link href='/' className='w-fit'>
        <Image src='/assets/lyfBlueLogo.svg' alt='Teamlyf Logo' width={width} height={height} />
      </Link>
    </div>
  );
};
