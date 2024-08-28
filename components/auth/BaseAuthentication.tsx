'use client';

import React from 'react';
import Image from 'next/image';
import googleIcon from '../../public/assets/googleIcon.svg';
import gitHubIcon from '../../public/assets/gitHubIcon.svg';
import { Button } from '../ui/button';

function BaseAuthentication() {
  return (
    <>
      <div className='flex justify-between space-x-4'>
        <Button
          className='flex items-center bg-gray-200 p-6 text-sm font-bold text-black hover:bg-gray-400'
          label='Continue with Google'
          intent='secondary'
          leftIcon={<Image src={googleIcon} alt='Google icon' width={24} height={24} />}
        />

        <Button
          onClick={() => alert('Continue with Github in progress')}
          className='flex items-center bg-gray-200 py-6 text-sm font-bold text-black ring-[unset] hover:bg-gray-400'
          label='Continue with Github'
          intent='secondary'
          leftIcon={<Image src={gitHubIcon} alt='Github icon' width={24} height={24} />}
        />
      </div>
    </>
  );
}

export default BaseAuthentication;
