'use client';
import googleIcon from '../../public/google.svg';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
const GoogleSignInButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        signIn('google');
        redirect('/home');
      }}>
      <Image priority src={googleIcon} alt="Google Icon" className="w-8 h-8" />
    </Button>
  );
};

export default GoogleSignInButton;
