import React from 'react';
import LeftFormCard from '@/components/auth/LeftFormCard';
import SignUpForm from '../_components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='m-auto flex h-screen w-screen max-w-screen-2xl items-center'>
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
