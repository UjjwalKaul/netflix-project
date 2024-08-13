import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import { redirect } from 'next/navigation';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  return <div>{children};</div>;
};

export default HomeLayout;
