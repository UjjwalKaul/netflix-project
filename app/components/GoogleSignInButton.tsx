'use client';
import googleIcon from '../../public/google.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const GoogleSignInButton = () => {
  return (
    <Button variant="outline" size="icon">
      <Image priority src={googleIcon} alt="Google Icon" className="w-8 h-8" />
    </Button>
  );
};

export default GoogleSignInButton;
