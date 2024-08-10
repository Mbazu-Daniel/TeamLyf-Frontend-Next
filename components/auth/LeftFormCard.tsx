'use client';

import logoIcon from '../../public/assets/lyfBlueLogo.svg';
import productBag from '../../public/assets/images/Productivity3D.png';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LeftFormCardProps {
  title: string;
  message: string;
  className?: string;
}

const LeftFormCard = ({ title, message, className }: LeftFormCardProps) => {
  return (
    <div
      className={cn(
        "left-pane hidden bg-[url('/assets/images/authBackground.png')] bg-cover bg-no-repeat p-6 pt-8 md:block",
        className
      )}
    >
      <Image src={logoIcon} alt='logo icon' className='ml-8 mt-8' />
      <div className='innerWrap hidden flex-col items-center px-16 md:flex '>
        <Image src={productBag} alt='productivity logo' width={450} height={200} className='mt-4' />
        <h3 className='text-[40px] font-bold'>{title}</h3>
        <p className='text-md text-center text-muted-foreground'>
          <span className='font-bold'>Teamlyf –</span>
          {message}

        </p>
      </div>
    </div>
  );
};

export default LeftFormCard;
