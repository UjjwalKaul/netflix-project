'use client';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

const GithubSignInButton = () => {
  return (
    <Button
      onClick={() => {
        signIn('github');
        redirect('/home');
      }}
      variant="outline"
      size="icon">
      <GithubIcon className="w-6 h-6" />
    </Button>
  );
};

export default GithubSignInButton;
