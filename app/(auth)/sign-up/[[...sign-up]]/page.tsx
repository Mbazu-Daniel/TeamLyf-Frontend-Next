import React from 'react';
import LeftFormCard from '@/components/auth/LeftFormCard';
import SignUpForm from '../_components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='max-w-screen-[1440px] m-auto flex max-h-[1024px]  items-center bg-cs-gray-200'>
      <LeftFormCard
        className='w-[720px]'
        title='Productivity at its peak'
        message="Where productivity meets collaboration at its peak. Elevate your work experience as Teamlyf seamlessly integrates tools and streamlines communication right at the core of your team's success."
      />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
