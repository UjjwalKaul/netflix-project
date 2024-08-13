import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import { redirect } from 'next/navigation';
import Navbar from '../components/Navbar';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto sm:px-6 lg:px-12">{children}</main>
    </>
  );
};

export default HomeLayout;
