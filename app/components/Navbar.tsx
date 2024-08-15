'use client';
import { Bell, SearchIcon } from 'lucide-react';
import logo from '../../public/netflix_logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserNav from './UserNav';

interface linkProps {
  name: string;
  href: string;
}
const links: linkProps[] = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'TV Shows',
    href: '/home/shows',
  },
  {
    name: 'Movies',
    href: '/home/movies',
  },
  {
    name: 'Recently Added',
    href: '/home/recently',
  },
  {
    name: 'My List',
    href: '/home/user/list',
  },
];
const Navbar = ({ name, email }: { name: string; email: string }) => {
  const pathName = usePathname();
  return (
    <div className="w-full mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-12 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={logo} alt="Logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => {
            return (
              <div key={idx}>
                {pathName === link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="text-white font-semibold underline text-sm">
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="text-gray-300 font-normal text-sm hover:text-gray-500 transition">
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <SearchIcon className="w-6 h-6 text-gray-300 cursor-pointer" />
        <Bell className="h-6 w-6 text-gray-300 cursor-pointer" />
        <UserNav name={name} email={email} />
      </div>
    </div>
  );
};

export default Navbar;
