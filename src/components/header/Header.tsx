'use client';

import { usePathname } from 'next/navigation';
import { navList } from '@/constant';
import ActionsIcons from './ActionsIcons';

import Mobilenav from './Mobilenav';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="container backdrop-blur-md bg-white/80  md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-6 sticky top-0  z-50 ">
        <div className="flex justify-between items-center">
          <Mobilenav />

          <nav>
            <ul className="hidden md:flex items-center font-light text-base gap-x-8 ">
              {navList.map((list) => {
                return (
                  <li
                    key={list.id}
                    className={`${
                      pathname === list.href ||
                      pathname.startsWith(list.href + '/')
                        ? 'font-semibold underline'
                        : ''
                    } flex items-center gap-x-1 cursor-pointer text-gray-700`}
                  >
                    <Link href={list.href}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ActionsIcons />
        </div>
      </header>
    </>
  );
}
